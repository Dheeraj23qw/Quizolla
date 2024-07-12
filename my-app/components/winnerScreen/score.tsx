import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { winnerstyles } from './winnerScreenCSS';

interface ScoreProps {
  correctAnswers: number;
}

const Score: React.FC<ScoreProps> = memo(({ correctAnswers }) => {
  const globalRank = '#1';
  const gamePoints = correctAnswers * 10;
  const totalPoints = correctAnswers * 10;

  const scoreData = [
    { icon: 'trophy', color: 'gold', title: 'Global Rank', value: globalRank },
    { icon: 'score', color: 'blue', title: 'Game Points', value: gamePoints },
    { icon: 'star', color: 'orange', title: 'Total Points', value: totalPoints }
  ];

  return (
    <View style={winnerstyles.scoreContainer}>
      {scoreData.map((item, index) => (
        <TouchableOpacity key={index} style={winnerstyles.scoreCard}>
          {item.icon === 'trophy' && <FontAwesome name="trophy" size={24} color={item.color} />}
          {item.icon === 'score' && <MaterialIcons name="score" size={24} color={item.color} />}
          {item.icon === 'star' && <FontAwesome name="star" size={24} color={item.color} />}
          <Text style={winnerstyles.scoreTitle}>{item.title}</Text>
          <Text style={winnerstyles.scoreValue}>{item.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

export default Score;
