import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';
interface HeaderComponentProps {
  toggleSidebar: () => void;
  onTimeUp: () => void;  // Function to call when timer reaches zero
  correctAnswer: boolean; // Prop to indicate if the answer is correct
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ toggleSidebar, onTimeUp, correctAnswer }) => {
  const [key, setKey] = useState(0);  // Key to reset the timer

  useEffect(() => {
    if (correctAnswer) {
      setKey(prevKey => prevKey + 1);
    }
  }, [correctAnswer]);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialIcons
          name="menu"
          size={responsiveFontSize(3.5)}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Quiz</Text>
      <View style={styles.timerContainer}>
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={10}
          size={responsiveFontSize(9)}
          strokeWidth={responsiveFontSize(0.7)}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            onTimeUp();
            return { shouldRepeat: false };  
          }}
        >
          {({ remainingTime }) => (
            <Text style={styles.timerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
};




export default HeaderComponent;
