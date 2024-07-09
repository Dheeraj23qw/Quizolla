// import { useState, useEffect, useCallback } from "react";
// import { Animated } from "react-native";

// const useGameLogic = (playerNames: string[]) => {
//   const initialFlippedStates = [false, false, false, false];
//   const initialClickedCards = [false, false, false, false];
//   const initialFlipAnims = Array(4).fill(new Animated.Value(0));

//   const [flipAnims, setFlipAnims] =
//     useState<Animated.Value[]>(initialFlipAnims);
//   const [flippedStates, setFlippedStates] =
//     useState<boolean[]>(initialFlippedStates);
//   const [clickedCards, setClickedCards] =
//     useState<boolean[]>(initialClickedCards);
//   const [selectedPlayer, setSelectedPlayer] = useState<number>(1);
//   const [message, setMessage] = useState<string>("");
//   const [roles, setRoles] = useState<string[]>([
//     "King",
//     "Advisor",
//     "Thief",
//     "Police",
//   ]);
//   const [isPlayButtonDisabled, setIsPlayButtonDisabled] =
//     useState<boolean>(false);

//   const [policeClickCount, setPoliceClickCount] = useState<number>(0);
//   const [policePlayerName, setPolicePlayerName] = useState<string | null>("");
//   const [policeIndex, setPoliceIndex] = useState<number | null>(null);
//   const [kingIndex, setKingIndex] = useState<number | null>(null);
//   const [advisorIndex, setAdvisorIndex] = useState<number | null>(null);
//   const [thiefIndex, setThiefIndex] = useState<number | null>(null);

//   const [playerScores, setPlayerScores] = useState<
//     Array<{ playerName: string; scores: number[] }>
//   >(
//     playerNames.map((name) => ({
//       playerName: name,
//       scores: Array.from({ length: 10 }, () => 0),
//     }))
//   );

//   const [round, setRound] = useState<number>(1);

//   useEffect(() => {
//     resetGame();
//   }, []);

//   const resetGame = useCallback(() => {
//     setFlipAnims(initialFlipAnims.map(() => new Animated.Value(0)));
//     setFlippedStates(initialFlippedStates);
//     setClickedCards(initialClickedCards);
//     setSelectedPlayer(1);
//     setIsPlayButtonDisabled(false);
//     setRound(1);
//     setMessage("Welcome !! Press the Button to Start the Game.");
//     setPoliceClickCount(0);
//     setAdvisorIndex(null);
//     setThiefIndex(null);
//     setKingIndex(null);
//     setPoliceIndex(null);
//     setPlayerScores(
//       playerNames.map((name) => ({
//         playerName: name,
//         scores: Array.from({ length: 10 }, () => 0),
//       }))
//     );
//   }, [initialClickedCards, initialFlippedStates, initialFlipAnims, playerNames]);

//   const handlePlay = useCallback(() => {
//     const randomIndex = Math.floor(Math.random() * 4);
//     setSelectedPlayer(randomIndex + 1);
//     setIsPlayButtonDisabled(true);
//     const shuffledRoles = shuffleArray(["King", "Advisor", "Thief", "Police"]);
//     setRoles(shuffledRoles);

//     setPoliceIndex(shuffledRoles.indexOf("Police"));
//     setKingIndex(shuffledRoles.indexOf("King"));
//     setAdvisorIndex(shuffledRoles.indexOf("Advisor"));
//     setThiefIndex(shuffledRoles.indexOf("Thief"));

//     const policeIndex = shuffledRoles.indexOf("Police");
//     if (policeIndex !== -1) {
//       const policePlayerName = playerNames[policeIndex];
//       setPolicePlayerName(policePlayerName);
//     }

//     const animations = flipAnims.map((anim) =>
//       Animated.timing(anim, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       })
//     );

//     Animated.stagger(200, animations).start(() => {
//       setFlippedStates([true, true, true, true]);
//       setTimeout(() => {
//         handleRoundEnd();
//         setFlippedStates([false, false, false, false]);
//         flipAnims.forEach((anim) => anim.setValue(0));
//         setClickedCards([false, false, false, false]);
//         setIsPlayButtonDisabled(false);
//         if (round < 10) {
//           setRound(round + 1);
//         } else {
//           endGame();
//         }
//       }, 3000);
//     });
//   }, [flipAnims, handleRoundEnd, playerNames, round]);

//   const shuffleArray = (array: string[]) => {
//     const shuffledArray = array.slice();
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[j]] = [
//         shuffledArray[j],
//         shuffledArray[i],
//       ];
//     }
//     return shuffledArray;
//   };

//   const handleCardClick = useCallback((index: number) => {
//     if (roles[index] === "Police") {
//       setPoliceClickCount((prevCount) => prevCount + 1);
//       setClickedCards((prevClickedCards) => {
//         const newClickedCards = [...prevClickedCards];
//         newClickedCards[index] = true;
//         return newClickedCards;
//       });

//       if (policeClickCount === 2) {
//         setIsPlayButtonDisabled(false);
//       }
//     }
//   }, [policeClickCount, roles]);

//   const handleRoundEnd = useCallback(() => {
//     const kingPlayerName = playerNames[kingIndex as number];
//     const advisorPlayerName = playerNames[advisorIndex as number];
//     const thiefPlayerName = playerNames[thiefIndex as number];
//     const policePlayerName = playerNames[policeIndex as number];

//     const kingScore = 1000;
//     const advisorScore = 800;
//     const thiefScore = 0;
//     const policeScore = 500;

//     const newPlayerScores = playerScores.map((playerScore) => {
//       const { playerName, scores } = playerScore;
//       const newScores = [...scores];

//       if (playerName === kingPlayerName) {
//         newScores[round - 1] = kingScore;
//       } else if (playerName === advisorPlayerName) {
//         newScores[round - 1] = advisorScore;
//       } else if (playerName === thiefPlayerName) {
//         newScores[round - 1] = thiefScore;
//       } else if (playerName === policePlayerName) {
//         newScores[round - 1] = policeScore;
//       }

//       return { playerName, scores: newScores };
//     });

//     setPlayerScores(newPlayerScores);

//     setMessage(
//       `Round ${round} ended. King: ${kingPlayerName}, Advisor: ${advisorPlayerName}, Thief: ${thiefPlayerName}, Police: ${policePlayerName}`
//     );
//   }, [advisorIndex, kingIndex, playerNames, playerScores, policeIndex, round, thiefIndex]);

//   const endGame = useCallback(() => {
//     setMessage("Game Over! Thanks for playing.");
//     setIsPlayButtonDisabled(true);
//   }, []);

//   return {
//     flipAnims,
//     flippedStates,
//     clickedCards,
//     selectedPlayer,
//     message,
//     roles,
//     isPlayButtonDisabled,
//     policeClickCount,
//     policePlayerName,
//     policeIndex,
//     kingIndex,
//     advisorIndex,
//     thiefIndex,
//     playerScores,
//     round,
//     resetGame,
//     handlePlay,
//     handleCardClick,
//     handleRoundEnd,
//     endGame,
//   };
// };

// export default useGameLogic;
