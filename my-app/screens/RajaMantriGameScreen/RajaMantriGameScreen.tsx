import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

// Define the props interface for the RajaMantriGameScreen component
interface RajaMantriGameScreenProps {}

const RajaMantriGameScreen: React.FC<RajaMantriGameScreenProps> = () => {
  const initialFlippedStates = [false, false, false, false];
  const initialClickedCards = [false, false, false, false];
  const initialFlipAnims = Array(4).fill(new Animated.Value(0));

  const [flipAnims, setFlipAnims] = useState<Animated.Value[]>(initialFlipAnims);
  const [flippedStates, setFlippedStates] = useState<boolean[]>(initialFlippedStates);
  const [clickedCards, setClickedCards] = useState<boolean[]>(initialClickedCards);
  const [selectedPlayer, setSelectedPlayer] = useState<number>(1);
  const [message, setMessage] = useState<string>('Welcome! Choose one player to press the button.');
  const [roles, setRoles] = useState<string[]>(['King', 'Advisor', 'Thief', 'Police']);
  const [isPlayButtonDisabled, setIsPlayButtonDisabled] = useState<boolean>(false);
  const [round, setRound] = useState<number>(1);
  const [playerNames, setPlayerNames] = useState<string[]>(['John', 'Jerry', 'Jane', 'Jack']);
  const [policeClickCount, setPoliceClickCount] = useState<number>(0);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    console.log(`LOG Current round: ${round}`);
    console.log(`LOG Current message: ${message}`);
  }, [round, message]); // Log round and message whenever they change

  const resetGame = () => {
    setFlipAnims(initialFlipAnims.map(() => new Animated.Value(0)));
    setFlippedStates(initialFlippedStates);
    setClickedCards(initialClickedCards);
    setSelectedPlayer(1);
    setIsPlayButtonDisabled(false);
    setRound(1);
    setMessage('Welcome! Choose one player to press the button.');
    setPoliceClickCount(0);
  };

  const handlePlay = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    setSelectedPlayer(randomIndex + 1);
    setIsPlayButtonDisabled(true);

    const shuffledRoles = shuffleArray(['King', 'Advisor', 'Thief', 'Police']);
    setRoles(shuffledRoles);

    const policeIndex = shuffledRoles.indexOf('Police');
    if (policeIndex !== -1) {
      const policePlayerName = playerNames[policeIndex];
      const newMessage = `Player ${policePlayerName}, you are chosen for the Police role. Find out who is the Thief!`;
      setMessage(newMessage);

      flipCard(policeIndex, 1, 1800);
    }
  };

  const handleCardClick = (index: number) => {
    const playerName = playerNames[index];
    const playerRole = roles[index];

    
      // Police player logic
      if (playerRole === 'Thief') {
        setMessage(`Great job ${playerNames[selectedPlayer - 1]}! You found the Thief!`);
        setTimeout(() => resetForNextRound(), 3000);
      } else {
        setPoliceClickCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount === 2) {
            revealAllCards();
            setMessage(`Sorry ${playerNames[selectedPlayer - 1]}, you couldn't find the Thief. -200 points for this Round.`);
            setTimeout(() => resetForNextRound(), 5000);
          } else {
            setMessage(`Not the Thief, ${playerNames[selectedPlayer - 1]}. Your 500 points will transfer to the Thief of this round. Choose wisely!`);
          }
          return newCount;
        });
      }
    

    if (!flippedStates[index] && roles[index] !== 'Police' && !clickedCards[index]) {
      flipCard(index, 1, 500);
      setClickedCards((prev) => {
        const newClickedCards = [...prev];
        newClickedCards[index] = true;
        return newClickedCards;
      });
      console.log(`Player ${playerName} clicked on their card.`);
    } else if (flippedStates[index] && roles[index] !== 'Police') {
      flipCard(index, 0, 500);
      setClickedCards((prev) => {
        const newClickedCards = [...prev];
        newClickedCards[index] = false;
        return newClickedCards;
      });
      console.log(`Player ${playerName} flipped back their card.`);
    }
  };

  const flipCard = (index: number, toValue: number, duration: number) => {
    Animated.timing(flipAnims[index], {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(() => {
      setFlippedStates((prev) => {
        const newFlippedStates = [...prev];
        newFlippedStates[index] = toValue === 1;
        return newFlippedStates;
      });

      const allNonPoliceFlipped = [...flippedStates].every(
        (flipped, idx) => roles[idx] === 'Police' || clickedCards[idx] || index === idx
      );
      if (allNonPoliceFlipped) {
        setRound((prevRound) => prevRound + 1);
        setTimeout(() => {
          resetForNextRound();
        }, 5000);
      }
    });
  };

  const revealAllCards = () => {
    roles.forEach((_, index) => {
      if (!flippedStates[index]) {
        flipCard(index, 1, 500);
      }
    });
  };

  const resetForNextRound = () => {
    if (round >= 10) {
      resetGame();
    } else {
      setFlipAnims(initialFlipAnims.map(() => new Animated.Value(0)));
      setFlippedStates(initialFlippedStates);
      setClickedCards(initialClickedCards);
      setIsPlayButtonDisabled(false);
      const newMessage = `Now round-${round} is started! Player ${selectedPlayer} is chosen to press the play button.`;
      setMessage(newMessage);
      setPoliceClickCount(0);
      const newRoles = shuffleArray(['King', 'Advisor', 'Thief', 'Police']);
      setRoles(newRoles);
    }
  };

  const flipInterpolate = (index: number) =>
    flipAnims[index].interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '7200deg'],
    });

  const animatedStyle = (index: number) => ({
    transform: [{ rotateY: flipInterpolate(index) }],
  });

  const renderRoleContent = (index: number) => {
    const roleImages: { [key: string]: any } = {
      King: require('../../assets/images/chorsipahi/king.jpg'),
      Advisor: require('../../assets/images/chorsipahi/advisor.jpg'),
      Thief: require('../../assets/images/chorsipahi/thief.jpg'),
      Police: require('../../assets/images/chorsipahi/police.jpg'),
    };

    if (flippedStates[index]) {
      if (roles[index] === 'Police') {
        return <Image source={roleImages.Police} style={styles.cardImage} />;
      } else {
        return (
          <TouchableOpacity onPress={() => handleCardClick(index)}>
            <Image source={roleImages[roles[index]]} style={styles.cardImage} />
          </TouchableOpacity>
        );
      }
    } else {
      return (
        <TouchableOpacity onPress={() => handleCardClick(index)}>
          <Text style={styles.cardText}>{playerNames[index]}</Text>
        </TouchableOpacity>
      );
    }
  };

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <View style={[styles.playButton, isPlayButtonDisabled && styles.playButtonDisabled]}>
        <TouchableOpacity onPress={handlePlay} disabled={isPlayButtonDisabled}>
          <Text style={styles.playButtonText}>
            {isPlayButtonDisabled ? `Round ${round}` : `Player ${selectedPlayer} Press to play!`}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        {roles.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardClick(index)}
            disabled={!flippedStates[index] || clickedCards[index]}
          >
            <Animated.View style={[styles.card, animatedStyle(index)]}>
              {renderRoleContent(index)}
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView style={styles.tableContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.table}>
          {playerNames.map((name, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCell}>
                <Text style={styles.cellText}>{name}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RajaMantriGameScreen;
