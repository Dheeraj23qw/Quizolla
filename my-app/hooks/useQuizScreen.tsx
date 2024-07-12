import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'expo-router'; 
import { questions } from '@/constants/question'; 
import useQuizSoundManager from './useQuizSound'; 

export interface QuizState {
  currentQuestionIndex: number;
  currentQuestion: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    hint: string;
  };
  selectedAnswer: string | null;
  usedHint: boolean;
  usedFiftyFifty: boolean;
  usedFlip: boolean;
  hint: string | null;
  fiftyFiftyOptions: string[];
  skippedQuestions: number[];
  correctAnswers: number;
  timeLeft: number;
  timerKey: number;
  isPlaying: boolean;
  handleOptionPress: (option: string) => void;
  useLifeline: (lifeline: string) => void;
  handleTimeUp: () => void;
  flipQuestion: () => void;
  moveToNextQuestion: () => void;

}

const useQuiz = (): QuizState => {
  const initialQuestionIndex = 0;
  const initialFlippedQuestionIndex = null;
  const initialSelectedAnswer = null;
  const initialUsedHint = false;
  const initialUsedFiftyFifty = false;
  const initialUsedFlip = false;
  const initialHint = null;
  const initialFiftyFiftyOptions: string[] = [];
  const initialSkippedQuestions: number[] = [];
  const initialCorrectAnswers = 0;
  const initialTimeLeft = 10;
  const initialTimerKey = 0;
  const initialIsPlaying = true;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialQuestionIndex);
  const [flippedQuestionIndex, setFlippedQuestionIndex] = useState<number | null>(initialFlippedQuestionIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(initialSelectedAnswer);
  const [usedHint, setUsedHint] = useState<boolean>(initialUsedHint);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(initialUsedFiftyFifty);
  const [usedFlip, setUsedFlip] = useState<boolean>(initialUsedFlip);
  const [hint, setHint] = useState<string | null>(initialHint);
  const [fiftyFiftyOptions, setFiftyFiftyOptions] = useState<string[]>(initialFiftyFiftyOptions);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>(initialSkippedQuestions);
  const [correctAnswers, setCorrectAnswers] = useState<number>(initialCorrectAnswers);
  const [timeLeft, setTimeLeft] = useState<number>(initialTimeLeft);
  const [timerKey, setTimerKey] = useState<number>(initialTimerKey);
  const [isPlaying, setIsPlaying] = useState<boolean>(initialIsPlaying);

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

  // Load sounds on component mount and unload on unmount
  useEffect(() => {
    loadSounds();
    return () => {
      unloadSounds();
    };
  }, []);

  // Handle correct answer scenario
  useEffect(() => {
    if (correctAnswers === limitedQuestions.length) {
      stopSound();
      setIsPlaying(false);
  
      const timer = setTimeout(() => {
        router.push({
          pathname: '/winner',
          params: {
            correctAnswers,
            isWinner: "true",
          },
        });
      }, 1000); // Reduced timeout for faster transition

      return () => clearTimeout(timer);
    } else if (selectedAnswer === correctAnswer && correctAnswers < limitedQuestions.length && selectedAnswer !== null) {
      console.log("Correct answer selected. Playing correct sound.");
      stopSound();
      playCorrectSound();
      setTimeout(() => {
        if (correctAnswers < limitedQuestions.length - 1) {
          playThinkingSound();
        }
      }, 2000); // Adjust timeout delay as needed
    }
  }, [
    correctAnswers, 
    router, 
    stopSound, 
    setIsPlaying, 
    selectedAnswer, 
    correctAnswer, 
    limitedQuestions, 
    playCorrectSound, 
    playThinkingSound,
  ]);

  // Handle wrong answer scenario
  useEffect(() => {
    if (selectedAnswer !== null && selectedAnswer !== correctAnswer) {
      console.log("Wrong answer selected. Moving to winner screen.");
      stopSound();
      playWrongSound();
      setIsPlaying(false); 

      const timer = setTimeout(() => {
        router.push({
          pathname: '/winner',
          params: {
            correctAnswers,
            isWinner: "false",
          },
        });
      }, 2000); // Adjust timeout delay as needed

      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, correctAnswer, correctAnswers, stopSound, playWrongSound, setIsPlaying, router]);

  // Handle time up scenario
  const handleTimeUp = useCallback(() => {
    console.log("Handling time up scenario.");
    stopSound();
    if (correctAnswers < limitedQuestions.length && !selectedAnswer) {
      console.log("Time up and question not answered. Moving to winner screen.");
      router.push({
        pathname: '/winner',
        params: {
          correctAnswers,
          isWinner: "false",
        },
      });
    }
  }, [correctAnswers, selectedAnswer, stopSound, router]);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("Time up for the current question. Handling time up.");
      handleTimeUp();
    }
  }, [timeLeft, handleTimeUp]);

  // Flip to a new question
  const flipQuestion = useCallback(() => {
    console.log("Flipping question.");
    const usedQuestionIds = [...skippedQuestions, limitedQuestions[currentQuestionIndex].id];
    let newQuestionIndex;
    do {
      newQuestionIndex = Math.floor(Math.random() * limitedQuestions.length);
    } while (usedQuestionIds.includes(limitedQuestions[newQuestionIndex].id));

    setFlippedQuestionIndex(newQuestionIndex);
    setSkippedQuestions(prevSkippedQuestions => [...prevSkippedQuestions, currentQuestionIndex]);
    setTimerKey(prevKey => prevKey + 1);
    setIsPlaying(false); // Set isPlaying to false after flipping question
  }, [currentQuestionIndex, limitedQuestions, skippedQuestions, setIsPlaying]);

  // Use a lifeline (Hint, 50-50, Flip)
  const useLifeline = useCallback((lifeline: string) => {
    console.log(`Using lifeline: ${lifeline}`);
    if (lifeline === 'Hint' && !usedHint) {
      setUsedHint(true);
      setHint(questionHint);
    } else if (lifeline === '50-50' && !usedFiftyFifty) {
      setUsedFiftyFifty(true);
      const incorrectOptions = options.filter(option => option !== correctAnswer);
      const randomOptions = incorrectOptions.sort(() => 0.5 - Math.random()).slice(0, 2);
      setFiftyFiftyOptions(randomOptions);
    } else if (lifeline === 'Flip' && !usedFlip) {
      setUsedFlip(true);
      setSelectedAnswer(null);
      setHint(null);
      setFiftyFiftyOptions([]);
      flipQuestion();
      setIsPlaying(true); // Set isPlaying to true after flipping question
    }
  }, [usedHint, usedFiftyFifty, usedFlip, questionHint, options, correctAnswer, flipQuestion, setIsPlaying]);

  // Move to the next question
  const moveToNextQuestion = useCallback(() => {
    console.log("Moving to next question.");
    setSelectedAnswer(null);
    setHint(null);
    setFiftyFiftyOptions([]);
    setFlippedQuestionIndex(null);
    setCorrectAnswers(prev => prev + 1);
    setTimerKey(prevKey => prevKey + 1);

    // Increment current question index and handle looping back to start
    setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % limitedQuestions.length);
    
  }, [selectedAnswer, correctAnswer, limitedQuestions.length, correctAnswers]);



  // Handle option press
  const handleOptionPress = useCallback((option: string) => {
    console.log(`Option "${option}" selected.`);
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (option === correctAnswer) {
        setTimeout(() => {
          moveToNextQuestion();
          playThinkingSound();
        }, 2000); // Adjust timeout delay as needed
      }
    }
  }, [selectedAnswer, correctAnswer, moveToNextQuestion, playThinkingSound]);

  // Return state and functions for use in components
  return {
    currentQuestionIndex,
    currentQuestion,
    selectedAnswer,
    usedHint,
    usedFiftyFifty,
    usedFlip,
    hint,
    fiftyFiftyOptions,
    skippedQuestions,
    correctAnswers,
    timeLeft,
    timerKey,
    isPlaying,
    handleOptionPress,
    useLifeline,
    handleTimeUp,
    flipQuestion,
    moveToNextQuestion,

  };
};

export default useQuiz;
