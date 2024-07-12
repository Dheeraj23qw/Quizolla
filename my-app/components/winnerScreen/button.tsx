import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { winnerstyles } from './winnerScreenCSS';
import useQuiz, { QuizState } from '@/hooks/useQuizScreen'; // Adjust the import path as per your project structure

const Button: React.FC = () => {


  const handleNewQuiz = () => {
   
    console.log('Starting a new quiz...');
  };

  const handlePlayAgain = () => {
    console.log('Playing the quiz again...');
  };

  const handleShare = () => {
    // Handle share functionality
    console.log('Share button pressed...');
  };

  return (
    <View style={winnerstyles.buttonContainer}>
      <TouchableOpacity style={winnerstyles.button} onPress={handleNewQuiz}>
        <Text style={winnerstyles.buttonText}>New Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={winnerstyles.button} onPress={handleShare}>
        <Text style={winnerstyles.buttonText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={winnerstyles.button} onPress={handlePlayAgain}>
        <Text style={winnerstyles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
