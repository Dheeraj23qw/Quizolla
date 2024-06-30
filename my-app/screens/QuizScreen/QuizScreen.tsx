import React, { useState } from 'react';
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
  const [correctAnswers, setCorrectAnswers] = useState<number>(0); // Track correct answers

  // Limiting questions to 5
  const limitedQuestions = questions.slice(0, 5);

  const currentQuestion =
    flippedQuestionIndex !== null ? limitedQuestions[flippedQuestionIndex] : limitedQuestions[currentQuestionIndex];
  const { question, options, correctAnswer, hint: questionHint } = currentQuestion;

  const checkAnswer = (answer: string): boolean => {
    return answer === correctAnswer;
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
    do {
      newQuestionIndex = Math.floor(Math.random() * limitedQuestions.length);
    } while (newQuestionIndex === currentQuestionIndex || skippedQuestions.includes(newQuestionIndex));
    setFlippedQuestionIndex(newQuestionIndex);
  };

  const handleOptionPress = (option: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(option);
      if (checkAnswer(option)) {
        setTimeout(() => {
          moveToNextQuestion();
          setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % limitedQuestions.length);
          if (currentQuestionIndex === limitedQuestions.length - 1) {
            // Navigate to winner screen after answering all questions correctly
            router.push('/winner');
          }
        }, 1000);
        setCorrectAnswers((prev) => prev + 1); // Increment correct answer count
      } else {
        setTimeout(() => {
          // Navigate to result screen on quiz loss
          router.push('/looser');
        }, 1000);
      }
    }
  };

  const router = useRouter();

  const moveToNextQuestion = () => {
    if (flippedQuestionIndex !== null) {
      setSkippedQuestions([...skippedQuestions, flippedQuestionIndex]);
    }
    setSelectedAnswer(null);
    setHint(null);
    setFiftyFiftyOptions([]);
    setFlippedQuestionIndex(null);
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
          <HeaderComponent toggleSidebar={toggleSidebar} />

          <QuestionComponent
            questionNumber={currentQuestionIndex + 1}
            question={question}
          />

          <OptionsComponent
            options={options}
            handleOptionPress={handleOptionPress}
            selectedAnswer={selectedAnswer}
            fiftyFiftyOptions={fiftyFiftyOptions}
            selectedOption={selectedAnswer || ''} // Ensure to pass selectedOption
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
