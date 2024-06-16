import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "./../../styles/global";
import ScreenHeader from "@/components/_screenHeader";
export default function QuizDetailScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Profile" />
      <View style={[globalstyles.Container2, { flex: 10 }]}></View>
    </SafeAreaView>
  );
}
