import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "./../../styles/global";
import ScreenHeader from "@/components/_screenHeader";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { cardstyles } from "@/styles/card";
import Header from "@/components/QuizDetailScreen/Header";
import PlayerNumber from "@/components/QuizDetailScreen/playerNumber";
import Level from "@/components/QuizDetailScreen/level";
import Button from "@/components/button";

export default function QuizDetailScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Profile" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <View style={[cardstyles.Card, { flex: 1 }]}>
         
            <View style={styles.overlay}>
              <Header />
              <PlayerNumber />
              <Level />
              <Button />
            </View>
      
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: responsiveWidth(8.5),
    borderTopRightRadius: responsiveWidth(8.5),
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    flex: 1,
    padding: responsiveWidth(3),
  },
});
