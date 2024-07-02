import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from 'expo-router';
import Winner from '@/screens/WinnerScreen/Winner';

export default function WinnerScreen() {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  // Retrieve and parse the parameters
  const correctAnswers = Number(params.correctAnswers);
  const isWinner = String(params.isWinner); 

  return (
    <Winner correctAnswers={correctAnswers} isWinner={isWinner} />
  );
}
