import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizSider from '@/components/Sidebars/QuizSider';
import { questions } from '@/constants/question';
import { styles } from './QuizscreenCss';
import { useRouter } from 'expo-router';
import HeaderComponent from '@/components/QuizScreen/QuizHeaderSingle';
import QuestionComponent from '@/components/QuizScreen/QuizQuestion';
import OptionsComponent from '@/components/QuizScreen/QuizOptions';
import LifelineComponent from '@/components/QuizScreen/Lifelines';
import HintComponent from '@/components/QuizScreen/message';

interface QuizScreenProps {}

const QuizScreen: React.FC<QuizScreenProps> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flippedQuestionIndex, setFlippedQuestionIndex] = useState<number | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [usedFiftyFifty, setUsedFiftyFifty] = useState<boolean>(false);
  const [usedFlip, setUsedFlip] = useState<boolean>(false);
  const [hint, setHint] = useState<string | null>(null);
  const [fiftyFiftyOptions, setFiftyFiftyOptions] = useState<string[]>([]);
  const [skippedQuestions, setSkippedQuestions] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
 

  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(10); // Initial time for each question
  const [timerKey, setTimerKey] = useState<number>(0); // Key to reset timer

  // Limiting questions to 5
  const limitedQuestions = questions.slice(0, 5);

  const currentQuestion =
    flippedQuestionIndex !== null ? limitedQuestions[flippedQuestionIndex] : limitedQuestions[currentQuestionIndex];
  const { question, options, correctAnswer, hint: questionHint } = currentQuestion;

  const router = useRouter();

  useEffect(() => {
    if (correctAnswers === limitedQuestions.length) {
      router.push({
        pathname: '/winner',
        params: {
          correctAnswers,
          isWinner: "true", 
        },
      });
    }
   
  }, [correctAnswers]);

  useEffect(() => {
    if (selectedAnswer && selectedAnswer !== correctAnswer) {
      const timer = setTimeout(() => {
        router.push({
          pathname: '/winner',
          params: {
            correctAnswers,
            isWinner: "false", 
          },
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeUp();
    }
  }, [timeLeft]);

  const handleTimeUp = () => {
    if (correctAnswers < limitedQuestions.length) {
      // Navigate to loser screen
      router.push({
        pathname: '/winner',
        params: {
          correctAnswers,
          isWinner: "false", 
        },
      });
    }

  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const useLifeline = (lifeline: string) => {
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
  };
       
  const flipQuestion = () => {
    let newQuestionIndex;
    const usedQuestionIds = skippedQuestions.map(index => limitedQuestions[index].id).concat(limitedQuestions[currentQuestionIndex].id);

    do {
      newQuestionIndex = Math.floor(Math.random() * limitedQuestions.length);
    } while (usedQuestionIds.includes(limitedQuestions[newQuestionIndex].id));

    setFlippedQuestionIndex(newQuestionIndex);
    setSkippedQuestions([...skippedQuestions, currentQuestionIndex]);
    setTimeLeft(10);
    setTimerKey((prevKey) => prevKey + 1);
  };

  const handleOptionPress = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (option === correctAnswer) {
        setTimeout(() => {
          moveToNextQuestion();
          setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % limitedQuestions.length);
          setCorrectAnswers((prev) => prev + 1);
        }, 2000);
      }
    }
  };

  const moveToNextQuestion = () => {
    if (flippedQuestionIndex !== null) {
      setSkippedQuestions([...skippedQuestions, flippedQuestionIndex]);
    }
    setSelectedAnswer(null);
    setHint(null);
    setFiftyFiftyOptions([]);
    setFlippedQuestionIndex(null);
    setTimeLeft(10);
    setTimerKey((prevKey) => prevKey + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />
      {sidebarOpen && <QuizSider />}

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <HeaderComponent
            toggleSidebar={toggleSidebar}
            onTimeUp={handleTimeUp}
            correctAnswer={selectedAnswer === correctAnswer}
            key={timerKey}
          />

          <QuestionComponent
            questionNumber={currentQuestionIndex + 1}
            question={question}
          />

          <OptionsComponent
            options={options}
            handleOptionPress={handleOptionPress}
            selectedAnswer={selectedAnswer}
            fiftyFiftyOptions={fiftyFiftyOptions}
            selectedOption={selectedAnswer || ''}
            correctAnswer={correctAnswer}
          />

          <LifelineComponent
            useLifeline={useLifeline}
            usedHint={usedHint}
            usedFiftyFifty={usedFiftyFifty}
            usedFlip={usedFlip}
            selectedAnswer={selectedAnswer}
          />

          {hint && <HintComponent hint={hint} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
