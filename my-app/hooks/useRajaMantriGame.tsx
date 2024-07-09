// useRajaMantriGame.ts
import { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";

interface UseRajaMantriGameOptions {
  playerNames: string[];
}

const useRajaMantriGame = ({ playerNames }: UseRajaMantriGameOptions) => {
  const initialFlippedStates = [false, false, false, false];
  const initialClickedCards = [false, false, false, false];
  const initialFlipAnims = Array(4).fill(new Animated.Value(0));

  const [flipAnims, setFlipAnims] = useState<Animated.Value[]>(initialFlipAnims);
  const [flippedStates, setFlippedStates] = useState<boolean[]>(initialFlippedStates);
  const [clickedCards, setClickedCards] = useState<boolean[]>(initialClickedCards);
  const [selectedPlayer, setSelectedPlayer] = useState<number>(1);
  const [message, setMessage] = useState<string>("Welcome! Press the Button to Start the Game.");
  const [roles, setRoles] = useState<string[]>(["King", "Advisor", "Thief", "Police"]);
  const [isPlayButtonDisabled, setIsPlayButtonDisabled] = useState<boolean>(false);
  const [policeClickCount, setPoliceClickCount] = useState<number>(0);
  const [policePlayerName, setPolicePlayerName] = useState<string | null>(null);
  const [policeIndex, setPoliceIndex] = useState<number | null>(null);
  const [kingIndex, setKingIndex] = useState<number | null>(null);
  const [advisorIndex, setAdvisorIndex] = useState<number | null>(null);
  const [thiefIndex, setThiefIndex] = useState<number | null>(null);
  const [playerScores, setPlayerScores] = useState<Array<{ playerName: string; scores: number[] }>>(
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
    setMessage("Welcome! Press the Button to Start the Game.");
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

  const updateScore = (playerIndex: number, newScore: number, roundIndex: number) => {
    setPlayerScores((prevScores) => {
      if (playerIndex >= 0 && playerIndex < prevScores.length) {
        const newPlayerScores = prevScores.map((player, index) => {
          if (index === playerIndex) {
            const updatedScores = [...player.scores];
            updatedScores[roundIndex] = newScore;
            return {
              ...player,
              scores: updatedScores,
            };
          } else {
            return player;
          }
        });

        return newPlayerScores;
      } else {
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
          if (newCount === 2 && thiefIndex !== null) {
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

      if (!flippedStates[index] && roles[index] !== "Police" && !clickedCards[index]) {
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
      setSelectedPlayer(1);
      setPoliceClickCount(0);
      setMessage("Press the Button to Start the Next Round.");
    }
  };

  function shuffleArray(array: any[]): any[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  return {
    flipAnims,
    flippedStates,
    clickedCards,
    selectedPlayer,
    message,
    roles,
    isPlayButtonDisabled,
    policeClickCount,
    policePlayerName,
    policeIndex,
    kingIndex,
    advisorIndex,
    thiefIndex,
    playerScores,
    round,
    handlePlay,
    handleCardClick,
    updateScore,
    resetGame,
    resetForNextRound,
  };
};

export default useRajaMantriGame;
