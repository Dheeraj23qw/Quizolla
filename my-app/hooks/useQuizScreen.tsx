// useQuiz.ts
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { questions } from '@/constants/question';
import { Audio } from 'expo-av';
import useQuizSoundManager from './useQuizSound';

const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flippedQuestionIndex, setFlippedQuestionIndex] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(false);
  const [usedFlip, setUsedFlip] = useState<boolean>(false);
  const [hint, setHint] = useState<string | null>(null);
  const [fiftyFiftyOptions, setFiftyFiftyOptions] = useState<string[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [timerKey, setTimerKey] = useState<number>(0);

  const {
    loadSounds,
    playCorrectSound,
    playWrongSound,
    playThinkingSound,
    stopSound,
    unloadSounds,
  } = useQuizSoundManager(); 

  const limitedQuestions = questions.slice(0, 5);

  const currentQuestion = flippedQuestionIndex !== null
    ? limitedQuestions[flippedQuestionIndex]
    : limitedQuestions[currentQuestionIndex];

  const { question, options, correctAnswer, hint: questionHint } = currentQuestion;

  const router = useRouter();

  useEffect(() => {
    loadSounds();
    return () => {
      unloadSounds();
    };
  }, []);

  useEffect(() => {
    if (correctAnswers === limitedQuestions.length) {
      stopSound(); // Stop any playing sounds
      router.push({
        pathname: '/winner',
        params: {
          correctAnswers,
          isWinner: "true",
        },
      });
    }
  }, [correctAnswers, router, stopSound]);

  useEffect(() => {
    if (selectedAnswer && selectedAnswer !== correctAnswer) {
      stopSound();
      playWrongSound();
      const timer = setTimeout(() => {
        stopSound();
        router.push({
          pathname: '/winner',
          params: {
            correctAnswers,
            isWinner: "false",
          },
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else if (selectedAnswer && selectedAnswer === correctAnswer) {
      stopSound();
      playCorrectSound();
      setTimeout(() => {
        playThinkingSound();
      }, 2000);
    }
  }, [selectedAnswer, correctAnswer, stopSound, playWrongSound, playCorrectSound, playThinkingSound]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft]);

  const handleTimeUp = useCallback(() => {
    stopSound();
    if (correctAnswers < limitedQuestions.length && !selectedAnswer) {
      router.push({
        pathname: '/winner',
        params: {
          correctAnswers,
          isWinner: "false",
        },
      });
    }
  }, [correctAnswers, selectedAnswer, stopSound, router, limitedQuestions]);



  const flipQuestion = useCallback(() => {
    let newQuestionIndex;
    const usedQuestionIds = skippedQuestions.map(index => limitedQuestions[index].id).concat(limitedQuestions[currentQuestionIndex].id);

    while (true) {
      newQuestionIndex = Math.floor(Math.random() * limitedQuestions.length);
      if (!usedQuestionIds.includes(limitedQuestions[newQuestionIndex].id)) {
        break;
      }
    }
    setFlippedQuestionIndex(newQuestionIndex);
    setSkippedQuestions(prevSkippedQuestions => [...prevSkippedQuestions, currentQuestionIndex]);
    setTimeLeft(10);
    setTimerKey(prevKey => prevKey + 1);
  }, [currentQuestionIndex, limitedQuestions, skippedQuestions]);

  const useLifeline = useCallback((lifeline: string) => {
    if (lifeline === 'Hint' && !usedHint) {
      setUsedHint(true);
      setHint(questionHint);
    } else if (lifeline === '50-50' && !usedFiftyFifty) {
      setUsedFiftyFifty(true);
      const incorrectOptions = options.filter((option) => option !== correctAnswer);
      const randomOptions = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
      setFiftyFiftyOptions(randomOptions);
    } else if (lifeline === 'Flip' && !usedFlip) {
      setUsedFlip(true);
      setSelectedAnswer(null);
      setHint(null);
      setFiftyFiftyOptions([]);
      flipQuestion();
    }
  }, [usedHint, usedFiftyFifty, usedFlip, questionHint, options, correctAnswer, flipQuestion]);



  const moveToNextQuestion = useCallback(() => {
    if (flippedQuestionIndex !== null) {
      setSkippedQuestions((prevSkippedQuestions) => [...prevSkippedQuestions, flippedQuestionIndex]);
    }
    setSelectedAnswer(null);
    setHint(null);
    setFiftyFiftyOptions([]);
    setFlippedQuestionIndex(null);
    setTimeLeft(10);
    setTimerKey((prevKey) => prevKey + 1);
  }, [flippedQuestionIndex]);

  const handleOptionPress = useCallback((option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (option === correctAnswer) {
        setTimeout(() => {
          moveToNextQuestion();
          setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % limitedQuestions.length);
          setCorrectAnswers((prev) => prev + 1);
          playThinkingSound();
        }, 2000);
      }
    }
  }, [selectedAnswer, correctAnswer, moveToNextQuestion, limitedQuestions, playThinkingSound]);

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    usedHint,
    usedFiftyFifty,
    usedFlip,
    hint,
    fiftyFiftyOptions,
    correctAnswers,
    timeLeft,
    timerKey,
    handleOptionPress,
    useLifeline,
    handleTimeUp,
  };
};

export default useQuiz;
