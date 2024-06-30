import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { useCountdown } from 'react-native-countdown-circle-timer';

const Timer: React.FC<{ duration: number; onComplete?: () => void }> = ({
  duration,
  onComplete
}) => {
  const width = 300;
  const height = 100;
  const terminalWidth = 20;

  const colors = [
    ['#00ff00', 0.5], // green for the first half of the duration
    ['#ff0000', 0.5]  // red for the second half of the duration
  ] as any;

  const {
    remainingTime
  } = useCountdown({
    duration,
    colors,
    onComplete: () => {
      if (onComplete) {
        onComplete(); // Call onComplete prop if provided
      }
    }
  });

  const remainingWidth = (width - terminalWidth) * (remainingTime / duration);
  const fillColor = interpolateColor(remainingTime, duration);

  return (
    <View style={styles.container}>
      <View style={{ width: width + terminalWidth, height, position: 'relative' }}>
        <Svg width={width + terminalWidth} height={height}>
          <Rect
            x={0}
            y={0}
            width={remainingWidth}
            height={height}
            fill={fillColor}
          />
        </Svg>
        <View style={styles.time}>
          <Text style={styles.timeText}>{remainingTime}</Text>
        </View>
      </View>
    </View>
  );
};

const interpolateColor = (remainingTime: number, duration: number) => {
  const ratio = remainingTime / duration;
  const red = Math.min(255, Math.max(0, 255 * (1 - ratio)));
  const green = Math.min(255, Math.max(0, 255 * ratio));
  return `rgb(${red},${green},0)`;
};

const styles = StyleSheet.create({
  container: {
    flex: 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  timeText: {
    fontSize: 20,
    color: 'black',
  },
});

export default Timer;
