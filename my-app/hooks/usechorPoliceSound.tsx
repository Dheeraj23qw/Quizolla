import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

type SoundName = 'win' | 'lose' | 'gameStart' | 'spin' | 'next';

// Define paths to your sound files
const soundPaths: Record<SoundName, any> = {
  win: require('../assets/audio/chorPolice/win.mp3'),
  lose: require('@/assets/audio/QuizScreen/wrong.mp3'),
  gameStart: require('../assets/audio/chorPolice/gameSound.mp3'),
  spin: require('../assets/audio/chorPolice/spin.mp3'),
  next: require('../assets/audio/chorPolice/round.mp3'),
};

const useChorPoliceSoundManager = () => {
  const [winSound, setWinSound] = useState<Audio.Sound | null>(null);
  const [loseSound, setLoseSound] = useState<Audio.Sound | null>(null);
  const [gameStartSound, setGameStartSound] = useState<Audio.Sound | null>(null);
  const [spinSound, setSpinSound] = useState<Audio.Sound | null>(null);
  const [nextSound, setNextSound] = useState<Audio.Sound | null>(null);

  const loadSounds = async () => {
    const [win,lose,gameStart,spin,next] = await Promise.all([
      Audio.Sound.createAsync(require('../assets/audio/chorPolice/win.mp3')),
      Audio.Sound.createAsync(require('@/assets/audio/QuizScreen/wrong.mp3')),
      Audio.Sound.createAsync(require('../assets/audio/chorPolice/gameSound.mp3')),
      Audio.Sound.createAsync(require('../assets/audio/chorPolice/spin.mp3')),
      Audio.Sound.createAsync(require('../assets/audio/chorPolice/round.mp3')),
    ]);
    setWinSound(win.sound)
    setLoseSound(lose.sound)
    setGameStartSound(gameStart.sound)
    setSpinSound(spin.sound)
    setNextSound(next.sound)
    await gameStart.sound.playAsync();
    gameStart.sound.setIsLoopingAsync(true);
  };

  const playWinSound = async () => {
    if (winSound) {
      await winSound.replayAsync();
    }
  };

  const playLoseSound = async () => {
    if (loseSound) {
      await loseSound.replayAsync();
    }
  };

  const playGameStartSound = async () => {
    if (gameStartSound) {
      await gameStartSound.playAsync();
    }
  };

  const playSpinSound = async () => {
    if (spinSound) {
      await spinSound.playAsync();
    }
  };

  const playNextSound = async () => {
    if (nextSound) {
      await nextSound.playAsync();
    }
  };

  const stopSound = async () => {
    if (gameStartSound) {
      await gameStartSound.stopAsync();
    }
    // Add stop methods for winSound, loseSound, spinSound, and nextSound if needed
  };


  const unloadSounds = async () => {
    try {
      if (winSound) {
        await winSound.unloadAsync();
      }
      if (loseSound) {
        await loseSound.unloadAsync();
      }
      if (gameStartSound) {
        await gameStartSound.unloadAsync();
      }
      if (spinSound) {
        await spinSound.unloadAsync();
      }
      if (nextSound) {
        await nextSound.unloadAsync();
      }
    } catch (error) {
      console.error('Failed to unload sounds', error);
    }
  };

  
  return {
    loadSounds,
    playWinSound,
    playLoseSound,
    playGameStartSound,
    playSpinSound,
    playNextSound,
    stopSound,
    unloadSounds,
  };
};

export default useChorPoliceSoundManager;
