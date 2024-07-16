import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation, useLocalSearchParams } from 'expo-router';
import ChorPoliceResult from '@/screens/ResultScreen/chorPoliceResult';

export default function ChorPoliceResultScreen() {
  const navigation = useNavigation();
  const { selectedPlayer, selectedScore } = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Parse the selectedPlayer data
  const player = selectedPlayer && typeof selectedPlayer === 'string' ? JSON.parse(selectedPlayer) : null;
  const score = Array.isArray(selectedScore) ? selectedScore[0] : selectedScore;

  return (
    <ChorPoliceResult player={player} score={score} />
  );
}
