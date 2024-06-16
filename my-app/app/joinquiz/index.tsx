import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import QuizListScreen from "@/screens/QuizListScreen/QuizListScreen";

export default function JoinQuiz() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <QuizListScreen />
    </View>
  );
}
