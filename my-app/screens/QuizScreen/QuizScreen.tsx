import React from 'react';
import { ScrollView, StatusBar, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './QuizscreenCss';
import HeaderComponent from '@/components/QuizScreen/QuizHeaderSingle';
import QuestionComponent from '@/components/QuizScreen/QuizQuestion';
import OptionsComponent from '@/components/QuizScreen/QuizOptions';
import LifelineComponent from '@/components/QuizScreen/Lifelines';
import HintComponent from '@/components/QuizScreen/message';
import { globalstyles } from '@/styles/global';
import useQuiz from '@/hooks/useQuizScreen';

interface QuizScreenProps {
  name: string;
}

const QuizScreen: React.FC<QuizScreenProps> = ({name}) => {
  const {
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
    isPlaying,

  } = useQuiz();

  return (
  
      <SafeAreaView style={globalstyles.container}>
        <StatusBar backgroundColor="#BEA1FE" barStyle="dark-content" />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
     
          <HeaderComponent
            onTimeUp={handleTimeUp}
            correctAnswer={selectedAnswer === currentQuestion.correctAnswer}
            key={timerKey}
            name={name}
            isPlaying={isPlaying}
          />
          <View style={[globalstyles.Container2, { flex: 10 }]}>
          <ImageBackground
            source={require('@/assets/images/bg/mybg.jpg')} 
             style={globalstyles.imageBackground}
          >
            <QuestionComponent
              questionNumber={currentQuestionIndex + 1}
              question={currentQuestion.question}
            />
            <OptionsComponent
              options={currentQuestion.options}
              handleOptionPress={handleOptionPress}
              selectedAnswer={selectedAnswer}
              fiftyFiftyOptions={fiftyFiftyOptions}
              selectedOption={selectedAnswer || ''}
              correctAnswer={currentQuestion.correctAnswer}
            />
            <LifelineComponent
              useLifeline={useLifeline}
              usedHint={usedHint}
              usedFiftyFifty={usedFiftyFifty}
              usedFlip={usedFlip}
              selectedAnswer={selectedAnswer}
            />
             </ImageBackground>
          </View>
          {hint && <HintComponent hint={hint} />}
        </ScrollView>
      </SafeAreaView>

  );
};

export default QuizScreen;
