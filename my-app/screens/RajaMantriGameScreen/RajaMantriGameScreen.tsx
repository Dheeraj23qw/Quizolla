import React from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import PlayerCard from "@/components/RajamantriGameScreen/cardComponent";
import PlayButton from "@/components/RajamantriGameScreen/playButton";
import ScoreTable from "@/components/RajamantriGameScreen/scoretable";
import useRajaMantriGame from "@/hooks/useRajaMantriGame";
import VideoPlayerComponent from "@/components/RajamantriGameScreen/videoPlayer";
import { AVPlaybackStatus } from 'expo-av';

interface RajaMantriGameScreenProps {}

const RajaMantriGameScreen: React.FC<RajaMantriGameScreenProps> = () => {
  const playerNames = ["Muskan", "Simran", "Lado", "Baua"];
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
    videoIndex,
    isPlaying,
    handlePlay,
    setIsPlaying,
    handleCardClick,
    updateScore,
    resetGame,
    resetForNextRound,
  } = useRajaMantriGame({ playerNames });

  const handleVideoEnd = () => {
    setIsPlaying(false); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
     
        {isPlaying ? (
          <VideoPlayerComponent
            videoIndex={videoIndex}
            onVideoEnd={handleVideoEnd}
          />
        ) : (
          
          <>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> 
            <PlayButton
              disabled={isPlayButtonDisabled}
              onPress={handlePlay}
              buttonText={
                isPlayButtonDisabled ? `Round ${round}` : `Press to play!`
              }
            />
            <View style={styles.cardRow}>
              {roles.slice(0, 2).map((_, index) => ( // First row with 2 cards
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
            <View style={styles.cardRow}>
              {roles.slice(2).map((_, index) => ( // Second row with remaining cards
                <PlayerCard
                  key={index + 2}
                  index={index + 2}
                  role={roles[index + 2]}
                  playerName={playerNames[index + 2]}
                  flipped={flippedStates[index + 2]}
                  clicked={clickedCards[index + 2]}
                  onClick={handleCardClick}
                  animatedStyle={{
                    transform: [
                      {
                        rotateY: flipAnims[index + 2].interpolate({
                          inputRange: [0, 1],
                          outputRange: ["0deg", "7200deg"],
                        }),
                      },
                    ],
                  }}
                />
              ))}
            </View>
            <View style={styles.scrollView}>
              <ScoreTable playerNames={playerNames} playerScores={playerScores} />
            </View>
            </ScrollView>
          </>
        )}
      
    </SafeAreaView>
  );
};

export default RajaMantriGameScreen;
