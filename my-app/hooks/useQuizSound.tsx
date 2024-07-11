// SoundManager.ts
import { useState } from 'react';
import { Audio } from 'expo-av';

const useQuizSoundManager = () => {
  const [thinkingSound, setThinkingSound] = useState<Audio.Sound | null>(null);
  const [correctSound, setCorrectSound] = useState<Audio.Sound | null>(null);
  const [wrongSound, setWrongSound] = useState<Audio.Sound | null>(null);

  const loadSounds = async () => {
    const [thinking, correct, wrong] = await Promise.all([
      Audio.Sound.createAsync(require('@/assets/audio/QuizScreen/thinking.mp3')),
      Audio.Sound.createAsync(require('@/assets/audio/QuizScreen/correct.mp3')),
      Audio.Sound.createAsync(require('@/assets/audio/QuizScreen/wrong.mp3')),
    ]);
    setThinkingSound(thinking.sound);
    setCorrectSound(correct.sound);
    setWrongSound(wrong.sound);
    await thinking.sound.playAsync();
    thinking.sound.setIsLoopingAsync(true);
  };

  const playCorrectSound = async () => {
    if (correctSound) {
      await correctSound.replayAsync();
    }
  };

  const playWrongSound = async () => {
    if (wrongSound) {
      await wrongSound.replayAsync();
    }
  };

  const playThinkingSound = async () => {
    if (thinkingSound) {
      await thinkingSound.playAsync();
    }
  };

  const stopSound = async () => {
    if (thinkingSound) {
      await thinkingSound.stopAsync();
    }
    // Add stop methods for correctSound and wrongSound if needed
  };

  const unloadSounds = async () => {
    if (thinkingSound) {
      await thinkingSound.unloadAsync();
    }
    if (correctSound) {
      await correctSound.unloadAsync();
    }
    if (wrongSound) {
      await wrongSound.unloadAsync();
    }
  };

  return {
    loadSounds,
    playCorrectSound,
    playWrongSound,
    playThinkingSound,
    stopSound,
    unloadSounds,
  };
};

export default useQuizSoundManager;
