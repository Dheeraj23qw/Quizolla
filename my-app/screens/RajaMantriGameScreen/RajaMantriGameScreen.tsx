import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface RajaMantriGameScreenProps {}

const RajaMantriGameScreen: React.FC<RajaMantriGameScreenProps> = () => {
  const initialFlippedStates = [false, false, false, false];
  const initialClickedCards = [false, false, false, false];
  const initialFlipAnims = Array(4).fill(new Animated.Value(0));

  const [flipAnims, setFlipAnims] =
    useState<Animated.Value[]>(initialFlipAnims);
  const [flippedStates, setFlippedStates] =
    useState<boolean[]>(initialFlippedStates);
  const [clickedCards, setClickedCards] =
    useState<boolean[]>(initialClickedCards);
  const [selectedPlayer, setSelectedPlayer] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([
    "King",
    "Advisor",
    "Thief",
    "Police",
  ]);
  const [isPlayButtonDisabled, setIsPlayButtonDisabled] =
    useState<boolean>(false);

  const [playerNames, setPlayerNames] = useState<string[]>([
    "Muskan",
    "Simran",
    "Lado",
    "Baua",
  ]);
  const [policeClickCount, setPoliceClickCount] = useState<number>(0);
  const [policePlayerName, setPolicePlayerName] = useState<string | null>("");
  const [policeIndex, setPoliceIndex] = useState<number | null>(null);
  const [kingIndex, setKingIndex] = useState<number | null>(null);
  const [advisorIndex, setAdvisorIndex] = useState<number | null>(null);
  const [thiefIndex, setThiefIndex] = useState<number | null>(null);

  const [playerScores, setPlayerScores] = useState<
    Array<{ playerName: string; scores: number[] }>
  >(
    playerNames.map((name) => ({
      playerName: name,
      scores: Array.from({ length: 10 }, () => 0),
    }))
  );

  const [round, setRound] = useState<number>(1);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setFlipAnims(initialFlipAnims.map(() => new Animated.Value(0)));
    setFlippedStates(initialFlippedStates);
    setClickedCards(initialClickedCards);
    setSelectedPlayer(1);
    setIsPlayButtonDisabled(false);
    setRound(1);
    setMessage("Welcome !! Press the Button to Start the Game.");
    setPoliceClickCount(0);
    setAdvisorIndex(null);
    setThiefIndex(null);
    setKingIndex(null);
    setPoliceIndex(null);
    setPlayerScores(
      playerNames.map((name) => ({
        playerName: name,
        scores: Array.from({ length: 10 }, () => 0),
      }))
    );
  };

  const handlePlay = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    setSelectedPlayer(randomIndex + 1);
    setIsPlayButtonDisabled(true);
    const shuffledRoles = shuffleArray(["King", "Advisor", "Thief", "Police"]);
    setRoles(shuffledRoles);

    setPoliceIndex(shuffledRoles.indexOf("Police"));
    setKingIndex(shuffledRoles.indexOf("King"));
    setAdvisorIndex(shuffledRoles.indexOf("Advisor"));
    setThiefIndex(shuffledRoles.indexOf("Thief"));

    const policeIndex = shuffledRoles.indexOf("Police");
    if (policeIndex !== -1) {
      const policePlayerName = playerNames[policeIndex];
      const newMessage = `${policePlayerName}, you are chosen for the Police role. Find out who is the Thief!`;
      setPolicePlayerName(policePlayerName);
      setMessage(newMessage);
      flipCard(policeIndex, 1, 1800);
    }
  };
  const updateScore = (
    playerIndex: number,
    newScore: number,
    roundIndex: number
  ) => {
    setPlayerScores((prevScores) => {
      // Ensure playerIndex is within bounds
      if (playerIndex >= 0 && playerIndex < prevScores.length) {
        const newPlayerScores = prevScores.map((player, index) => {
          if (index === playerIndex) {
            // Update the scores array with the new score at the specified roundIndex
            const updatedScores = [...player.scores];
            updatedScores[roundIndex] = newScore; // Update the score for the specified round
            return {
              ...player,
              scores: updatedScores,
            };
          } else {
            return player;
          }
        });
  
        // Log sums after updating scores
        newPlayerScores.forEach((player) => {
          const sum = player.scores.reduce((total, score) => total + score, 0);
          if(round==10)
          console.log(`Player ${player.playerName} - Round ${roundIndex + 1} Sum: ${sum}`);
        });
  
        return newPlayerScores;
      } else {
        // If playerIndex is out of bounds, return previous state as is
        return prevScores;
      }
    });
  };

  const handleCardClick = (index: number) => {
    if (!isPlayButtonDisabled || flippedStates[index] || clickedCards[index]) {
      return;
    }
  
    const playerName = playerNames[index];
    if (
      isPlayButtonDisabled &&
      thiefIndex !== null &&
      policeIndex !== null &&
      advisorIndex !== null &&
      kingIndex !== null
    ) {
      const playerRole = roles[index];
  
      if (playerRole === "Thief" && thiefIndex !== null) {
        setMessage(
          `Great detective work, ${policePlayerName}! You found the Thief! ${playerNames[thiefIndex]} was the Thief of this round, but you kept your cool! Keep it up!`
        );
        revealAllCards();
        updateScore(thiefIndex, 0, round - 1);
        updateScore(policeIndex, 500, round - 1);
        updateScore(advisorIndex, 800, round - 1);
        updateScore(kingIndex, 1000, round - 1);
        setTimeout(() => resetForNextRound(), 6000);
      } else {
        setPoliceClickCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount == 2 && thiefIndex !== null) {
            setMessage(
              `Oops, ${policePlayerName}, you couldn't find the Thief this time. ${playerNames[thiefIndex]} was the Thief of this round and gets 500 points. Better luck next time!`
            );
            revealAllCards();
            updateScore(thiefIndex, 500, round - 1);
            updateScore(policeIndex, 0, round - 1);
            updateScore(advisorIndex, 800, round - 1);
            updateScore(kingIndex, 1000, round - 1);
            setTimeout(() => resetForNextRound(), 5000);
          } else {
            setMessage(
              `Keep trying, ${policePlayerName}! You're on the right track. Your 500 points will transfer to the Thief if you don't find them in your next attempt. Choose wisely!`
            );
          }
          return newCount;
        });
      }
  
      if (
        !flippedStates[index] &&
        roles[index] !== "Police" &&
        !clickedCards[index]
      ) {
        flipCard(index, 1, 500);
        setClickedCards((prev) => {
          const newClickedCards = [...prev];
          newClickedCards[index] = true;
          return newClickedCards;
        });
      } else if (flippedStates[index] && roles[index] !== "Police") {
        flipCard(index, 0, 500);
        setClickedCards((prev) => {
          const newClickedCards = [...prev];
          newClickedCards[index] = false;
          return newClickedCards;
        });
      }
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
        (flipped, idx) =>
          roles[idx] === "Police" || clickedCards[idx] || index === idx
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
      setRound((count) => count + 1);
      setFlipAnims(initialFlipAnims.map(() => new Animated.Value(0)));
      setFlippedStates(initialFlippedStates);
      setClickedCards(initialClickedCards);
      setIsPlayButtonDisabled(false);
      const newMessage = `Now round-${round} is started! Player ${selectedPlayer} is chosen to press the play button.`;
      setMessage(newMessage);
      setPoliceClickCount(0);
      const newRoles = shuffleArray(["King", "Advisor", "Thief", "Police"]);
      setRoles(newRoles);
    }
  };

  const flipInterpolate = (index: number) =>
    flipAnims[index].interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "7200deg"],
    });

  const animatedStyle = (index: number) => ({
    transform: [{ rotateY: flipInterpolate(index) }],
  });

  const renderRoleContent = (index: number) => {
    const roleImages: { [key: string]: any } = {
      King: require("../../assets/images/chorsipahi/king.jpg"),
      Advisor: require("../../assets/images/chorsipahi/advisor.jpg"),
      Thief: require("../../assets/images/chorsipahi/thief.jpg"),
      Police: require("../../assets/images/chorsipahi/police.jpg"),
    };

    if (flippedStates[index]) {
      if (roles[index] === "Police") {
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

  const renderTable = () => {
    const tableData = (
      <>
        {/* Header row */}
        <View style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>Rounds</Text>
          </View>
          {playerNames.map((name, index) => (
            <View key={index} style={styles.tableCell}>
              <Text style={styles.cellText}>{name}</Text>
            </View>
          ))}
        </View>

        {/* Data rows for rounds and scores */}
        {Array.from({ length: 10 }, (_, rowIndex) => (
          <View key={rowIndex} style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>Round {rowIndex + 1}</Text>
            </View>
            {playerScores.map((player, index) => (
              <View key={index} style={styles.tableCell}>
                <Text style={styles.cellText}>{player.scores[rowIndex]}</Text>
              </View>
            ))}
          </View>
        ))}
      </>
    );

    return <View style={styles.table}>{tableData}</View>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <View
        style={[
          styles.playButton,
          isPlayButtonDisabled && styles.playButtonDisabled,
        ]}
      >
        <TouchableOpacity onPress={handlePlay} disabled={isPlayButtonDisabled}>
          <Text style={styles.playButtonText}>
            {isPlayButtonDisabled
              ? `Round ${round}`
              : `${playerNames[Math.floor(Math.random() * 4)]} Press to play!`}
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
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {renderTable()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RajaMantriGameScreen;
