import React, { useState, useEffect, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';
import { Ionicons } from '@expo/vector-icons'
import {  responsiveScreenFontSize } from 'react-native-responsive-dimensions'


interface HeaderComponentProps {
  onTimeUp: () => void;
  correctAnswer: boolean;
  name: string;
  isPlaying: boolean;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  onTimeUp,
  correctAnswer,
  name,isPlaying
}) => {
  const [key, setKey] = useState(0);


  useEffect(() => {
    if (correctAnswer) {
      setKey(prevKey => prevKey + 1);
    }
  }, [correctAnswer]);

  
  const headerStyles = useMemo(() => ({
    header: styles.header,
    headerTextContainer: styles.headerTextContainer,
    headerText: styles.headerText,
    timerContainer: styles.timerContainer,
    timerText: styles.timerText,
  }), []);

  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerTextContainer}>
      <Ionicons name="school" size={responsiveScreenFontSize(3.5)} color="white" />
        <Text style={headerStyles.headerText}>{name}</Text>
      </View>
      <View style={headerStyles.timerContainer}>
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={20}
          size={responsiveFontSize(9)}
          strokeWidth={responsiveFontSize(0.7)}
          colors={['#00FF00', '#FFFF00', '#FFA500', '#FF0000']} 
          colorsTime={[8, 5, 2, 0]} 
          onComplete={() => {
            onTimeUp();
            return { shouldRepeat: false };
          }}
        >
          {({ remainingTime }) => (
            <Text style={headerStyles.timerText}>{remainingTime}</Text>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
};

export default HeaderComponent;