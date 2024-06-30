import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ResultScreen from '@/screens/ResultScreen/ResultScreen'
export default function LooserScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <>
    <ResultScreen />
    </>
  )
}