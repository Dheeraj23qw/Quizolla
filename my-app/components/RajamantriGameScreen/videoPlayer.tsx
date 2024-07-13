import React from "react";
import { View } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av"; 
import { styles } from "@/screens/RajaMantriGameScreen/styles";

interface VideoPlayerComponentProps {
  videoIndex: number;
  onVideoEnd: () => void; 
}

const videoSources: { [key: number]: any } = {
  1: require("../../assets/gif/chorPolicescreen/chorpolice.mp4"),
  2: require("../../assets/gif/chorPolicescreen/chorwin.mp4"),
  3: require("../../assets/gif/chorPolicescreen/policewinner.mp4"),
  4: require("../../assets/gif/chorPolicescreen/policechase.mp4"),
};

const VideoPlayerComponent: React.FC<VideoPlayerComponentProps> = ({
  videoIndex,
  onVideoEnd,
}) => {

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && !status.isPlaying) {
      onVideoEnd(); 
    }
  };

  return (
    <View style={styles.fullScreenContainer}>
      <Video
        source={videoSources[videoIndex]}
        style={styles.fullScreenVideo} 
        resizeMode={ResizeMode.CONTAIN} 
        shouldPlay 
        isLooping={false} 
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate} 
      />
    </View>
  );
};

export default VideoPlayerComponent;
