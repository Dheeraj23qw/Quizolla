import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';
import { LifelineComponentProps } from '@/types/quizScreenTypes';

const LifelineComponent: React.FC<LifelineComponentProps> = ({
  useLifeline,
  usedHint,
  usedFiftyFifty,
  usedFlip,
  selectedAnswer,
}) => {
  const lifelines = [
    { name: 'Hint', used: usedHint },
    { name: '50-50', used: usedFiftyFifty },
    { name: 'Flip', used: usedFlip },
  ];

  const handleUseLifeline = useCallback(
    (name: string) => {
      useLifeline(name);
    },
    [useLifeline]
  );

  return (
    <View style={styles.lifelineContainer}>
      {lifelines.map(({ name, used }, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.lifeline, used ? styles.disabledLifeline : null]}
          onPress={() => handleUseLifeline(name)}
          disabled={used || !!selectedAnswer}
        >
          <Text style={styles.lifelineText}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default React.memo(LifelineComponent);
