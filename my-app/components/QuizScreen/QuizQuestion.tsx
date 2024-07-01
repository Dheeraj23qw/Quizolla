import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';
import { QuestionComponentProps } from '@/types/quizScreenTypes';

const QuestionComponent: React.FC<QuestionComponentProps> = ({ questionNumber, question }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionNumber}>Question {questionNumber}</Text>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

export default QuestionComponent;
