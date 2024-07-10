// RajaMantriGameScreen.tsx
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Animated,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import PlayerCard from "@/components/RajamantriGameScreen/cardComponent";
import PlayButton from "@/components/RajamantriGameScreen/playButton";
import ScoreTable from "@/components/RajamantriGameScreen/scoretable";
import useRajaMantriGame from "@/hooks/useRajaMantriGame";// Import the custom hook

interface RajaMantriGameScreenProps {}

const RajaMantriGameScreen: React.FC<RajaMantriGameScreenProps> = () => {
  const playerNames = ["Muskan", "Simran", "Lado", "Baua"]; // Example player names
  const {
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
  } = useRajaMantriGame({ playerNames });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
      <PlayButton
        disabled={isPlayButtonDisabled}
        onPress={handlePlay}
        buttonText={
          isPlayButtonDisabled
            ? `Round ${round}`
            : `Press to play!`
        }
      />
      <View style={styles.cardRow}>
        {roles.map((_, index) => (
          <PlayerCard
            key={index}
            index={index}
            role={roles[index]}
            playerName={playerNames[index]}
            flipped={flippedStates[index]}
            clicked={clickedCards[index]}
            onClick={handleCardClick}
            animatedStyle={{
              transform: [
                {
                  rotateY: flipAnims[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "7200deg"],
                  }),
                },
              ],
            }}
          />
        ))}
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ScoreTable playerNames={playerNames} playerScores={playerScores} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RajaMantriGameScreen;
