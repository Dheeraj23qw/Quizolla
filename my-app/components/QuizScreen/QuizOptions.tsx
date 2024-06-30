import React from 'react';
import { Text, TouchableOpacity, View, TextStyle } from 'react-native';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';

interface OptionsComponentProps {
  options: string[];
  handleOptionPress: (option: string) => void;
  selectedAnswer: string | null;
  fiftyFiftyOptions: string[];
  selectedOption: string; // Ensure selectedOption matches your usage
}

const OptionsComponent: React.FC<OptionsComponentProps> = ({
  options,
  handleOptionPress,
  selectedAnswer,
  fiftyFiftyOptions,
  selectedOption,
}) => {
  const renderOptions = () => {
    return options.map((option, index) => {
      const isSelected = selectedOption === option;

      // Define styles based on conditions
      const optionStyle: TextStyle[] = [
        styles.option,
        isSelected ? styles.selectedOption : {},
        selectedAnswer === option && fiftyFiftyOptions.includes(option)
          ? styles.redText
          : {},
      ];

      return (
        <TouchableOpacity
          key={index}
          style={optionStyle}
          onPress={() => handleOptionPress(option)}
          disabled={!!selectedAnswer}
        >
          <Text style={styles.optionLabel}>
            {String.fromCharCode(65 + index) + '.  '}
          </Text>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      );
    });
  };

  return <View style={styles.optionsContainer}>{renderOptions()}</View>;
};

export default OptionsComponent;
