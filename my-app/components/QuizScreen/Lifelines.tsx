import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';

interface LifelineComponentProps {
  useLifeline: (lifeline: string) => void;
  usedHint: boolean;
  usedFiftyFifty: boolean;
  usedFlip: boolean;
  selectedAnswer: string | null;
}

const LifelineComponent: React.FC<LifelineComponentProps> = ({
  useLifeline,
  usedHint,
  usedFiftyFifty,
  usedFlip,
  selectedAnswer,
}) => {
  const lifelines = ['Hint', '50-50', 'Flip'];

  return (
    <View style={styles.lifelineContainer}>
      {lifelines.map((lifeline, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.lifeline,
            (lifeline === 'Hint' && usedHint) ||
            (lifeline === '50-50' && usedFiftyFifty) ||
            (lifeline === 'Flip' && usedFlip)
              ? styles.disabledLifeline
              : null,
          ]}
          onPress={() => useLifeline(lifeline)}
          disabled={
            (lifeline === 'Hint' && usedHint) ||
            (lifeline === '50-50' && usedFiftyFifty) ||
            (lifeline === 'Flip' && usedFlip) ||
            !!selectedAnswer
          }
        >
          <Text style={styles.lifelineText}>{lifeline}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LifelineComponent;
