import { useState, useRef, useEffect } from 'react';
import { AVPlaybackStatus, Video, ResizeMode, AVPlaybackStatusSuccess } from 'expo-av';

type VideoName = 'chorPolice' | 'thiefWin' | 'policeWinner' | 'policeChase';

const videos: Record<VideoName, any> = {
  chorPolice: require('../assets/gif/chorPolice/chorPolice.mp4'),
  thiefWin: require('../assets/gif/chorPolice/chorwin.mp4'),
  policeWinner: require('../assets/gif/chorPolice/policewinner.mp4'),
  policeChase: require('../assets/gif/chorPolice/policechase.mp4')
};

const useVideoPlayer = () => {
  const [currentVideo, setCurrentVideo] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<Video | null>(null);

  const playVideo = async (videoName: VideoName) => {
    setCurrentVideo(videos[videoName]);
    setIsPlaying(true);
    if (videoRef.current) {
      await videoRef.current.playAsync();
    }
  };

  const stopVideo = async () => {
    setIsPlaying(false);
    if (videoRef.current) {
      await videoRef.current.stopAsync();
    }
  };

  const togglePlayback = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      (async () => {
        await videoRef.current?.loadAsync(currentVideo, {}, true);
        if (isPlaying) {
          await videoRef.current?.playAsync();
        }
      })();
    }
  }, [currentVideo, isPlaying]);

  return {
    currentVideo,
    isPlaying,
    videoRef,
    playVideo,
    stopVideo,
    togglePlayback,
    setIsPlaying
  };
};

export default useVideoPlayer;
