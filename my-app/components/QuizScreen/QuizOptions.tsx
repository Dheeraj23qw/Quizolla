import React from 'react';
import { Text, TouchableOpacity, View, TextStyle } from 'react-native';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';
import { OptionsComponentProps } from '@/types/quizScreenTypes';

const OptionsComponent: React.FC<OptionsComponentProps> = ({
  options,
  handleOptionPress,
  selectedAnswer,
  fiftyFiftyOptions,
  correctAnswer,
}) => {
  const renderOptions = () => {
    return options.map((option, index) => {
      const isFiftyFiftyActive = fiftyFiftyOptions.length > 0;
      const optionStyle: TextStyle[] = [styles.option];
      const textStyle: TextStyle[] = [styles.optionText];
      const labelStyle: TextStyle[] = [styles.optionLabel];
      const isSelected = option === selectedAnswer;
      const isCorrect = option === correctAnswer;
      const isFiftyFiftyWrong = isFiftyFiftyActive && fiftyFiftyOptions.includes(option) && !isCorrect;

      if (selectedAnswer) {
        if (isCorrect) {
          optionStyle.push(styles.correctOption);
          textStyle.push(styles.selectedOptionText);
          labelStyle.push(styles.selectedOptionText);
        } else if (isSelected) {
          optionStyle.push(styles.wrongOption);
          textStyle.push(styles.selectedOptionText);
          labelStyle.push(styles.selectedOptionText);
        }
      } else if (isFiftyFiftyWrong) {
        optionStyle.push(styles.wrongOption);
        textStyle.push(styles.selectedOptionText);
        labelStyle.push(styles.selectedOptionText);
      }

      return (
        <TouchableOpacity
          key={index}
          style={optionStyle}
          onPress={() => handleOptionPress(option)}
          disabled={!!selectedAnswer}
        >
          <Text style={labelStyle}>
            {String.fromCharCode(65 + index) + '.  '}
          </Text>
          <Text style={textStyle}>{option}</Text>
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.optionsContainer}>{renderOptions()}</View>;
};

export default OptionsComponent;
