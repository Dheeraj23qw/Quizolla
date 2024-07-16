import ScreenHeader from "@/components/_screenHeader";
import { globalstyles } from "@/styles/global";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { chorPoliceQuizstyles } from "./quizStyle";

interface PlayerData {
  name: string;
  playerId: number; 
  scores: number[];
}

const generateRandomOptions = (correctScore: number, allScores: number[]) => {
  const options = new Set<number>();

  // Add correct score and two random scores
  options.add(correctScore);
  while (options.size < 3) {
    const randomScore = allScores[Math.floor(Math.random() * allScores.length)];
    if (randomScore !== correctScore) {
      options.add(randomScore);
    }
  }

  return Array.from(options).sort(() => Math.random() - 0.5); // Shuffle options
};

const RajaMantriQuizScreen = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const router = useRouter();

  const playerData: PlayerData[] = [
    { name: "John", playerId: 1, scores: [6700] },
    { name: "Jane", playerId: 2, scores: [7200] },
    { name: "Jack", playerId: 3, scores: [7500] },
    { name: "Jerry", playerId: 4, scores: [7000] },
    // Add more players as needed
  ];

  const playerImages: { [key: number]: any } = {
    1: require("../../assets/images/chorsipahi/kid1.jpg"),
    2: require("../../assets/images/chorsipahi/kid2.jpg"),
    3: require("../../assets/images/chorsipahi/kid3.jpg"),
    4: require("../../assets/images/chorsipahi/kid4.jpg"),
  };

  const handleAnswerSelect = (score: number) => {
    const selectedPlayer = playerData[currentPlayerIndex];
    const correctScore = selectedPlayer.scores[0]; // Assuming the first score is the correct one
    const isAnswerCorrect = score === correctScore;

    setSelectedOption(score);
    setIsCorrect(isAnswerCorrect);

    if (currentPlayerIndex < playerData.length - 1) {
      setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
        setCurrentPlayerIndex(currentPlayerIndex + 1);
      }, 1000); // Delay to show the feedback
    } else {
      setTimeout(() => {
        const dataToSend = { selectedPlayer, selectedScore: score };
        router.push({
          pathname: "/chorPoliceResult",
          params: {
            selectedPlayer: JSON.stringify(selectedPlayer),
            selectedScore: score,
          },
        });
      }, 1000); // Delay to show the feedback
    }
  };

  const selectedPlayer = playerData[currentPlayerIndex];
  const options = generateRandomOptions(
    selectedPlayer.scores[0],
    selectedPlayer.scores
  );

  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Quiz Time" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <ImageBackground
          source={require("../../assets/images/chorsipahi/chorpolicequiz.jpg")}
          style={chorPoliceQuizstyles.imageBackground}
          resizeMode="cover"
        >
          <View style={chorPoliceQuizstyles.quizContainer}>
            <View style={chorPoliceQuizstyles.playerInfo}>
              <Image
                source={playerImages[selectedPlayer.playerId]}
                style={chorPoliceQuizstyles.playerImage}
              />
            </View>
            <View style={chorPoliceQuizstyles.questionBox}>
              <Text style={chorPoliceQuizstyles.question}>
                <Text style={chorPoliceQuizstyles.playerName}>
                  {selectedPlayer.name}
                </Text>
                , Can you Guess your Score?
              </Text>
            </View>
            {options.map((score, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  chorPoliceQuizstyles.option,
                  selectedOption === score &&
                    (isCorrect
                      ? chorPoliceQuizstyles.correctOption
                      : chorPoliceQuizstyles.wrongOption),
                ]}
                onPress={() => handleAnswerSelect(score)}
              >
                <Text style={chorPoliceQuizstyles.optionText}>{score}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default RajaMantriQuizScreen;
