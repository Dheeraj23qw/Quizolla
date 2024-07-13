import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus, AVPlaybackStatusError, ResizeMode } from 'expo-av';

interface PlaybackStatus {
  isPlaying: boolean;
}

export default function App() {
  const videos = {
    chorPolice: require('../assets/gif/chorPolicescreen/chorpolice.mp4'),
    thiefWin: require('../assets/gif/chorPolicescreen/chorwin.mp4'),
    policeWinner: require('../assets/gif/chorPolicescreen/policewinner.mp4'),
    policeChase: require('../assets/gif/chorPolicescreen/policechase.mp4')
  };

  const [currentVideo, setCurrentVideo] = React.useState(videos.chorPolice);
  const [status, setStatus] = React.useState<PlaybackStatus>({ isPlaying: false });
  const video = React.useRef<Video | null>(null);

  const handlePlayPause = async () => {
    if (video.current) {
      if (status.isPlaying) {
        await video.current.pauseAsync();
      } else {
        await video.current.playAsync();
      }
    }
  };

  const handleVideoChange = (videoSource: any) => {
    setCurrentVideo(videoSource);
    if (video.current) {
      video.current.replayAsync();
    }
  };

  const handlePlaybackStatusUpdate = (newStatus: AVPlaybackStatus | AVPlaybackStatusError) => {
    if ('isLoaded' in newStatus && 'isPlaying' in newStatus) {
      setStatus({ isPlaying: newStatus.isPlaying });
    }
    // Handle errors or other status updates as needed
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={currentVideo}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={handlePlayPause}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Chor Police"
            onPress={() => handleVideoChange(videos.chorPolice)}
          />
          <Button
            title="Thief Win"
            onPress={() => handleVideoChange(videos.thiefWin)}
          />
          <Button
            title="Police Winner"
            onPress={() => handleVideoChange(videos.policeWinner)}
          />
          <Button
            title="Police Chase"
            onPress={() => handleVideoChange(videos.policeChase)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
