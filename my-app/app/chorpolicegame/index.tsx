import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import RajaMantriGameScreen from '@/screens/RajaMantriGameScreen/RajaMantriGameScreen'
import { useNavigation } from 'expo-router';

export default function ChorPoliceQuiz() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      });
    }, [navigation]);
  return (
  <>
  <RajaMantriGameScreen/>
  </>
  )
}