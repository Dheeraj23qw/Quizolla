import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "@/styles/global";
import ScreenHeader from "@/components/_screenHeader";
import { cardstyles } from "@/styles/card";

import Point from "@/components/ResultScreen/point";
import Score from "@/components/ResultScreen/score";
import Promotion from "@/components/ResultScreen/promotion";
import PlayAgain from "@/components/ResultScreen/playagain";
import Review from "@/components/ResultScreen/Review";

const ResultScreen = () => {
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Score" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <View style={[cardstyles.Card, {flex: 1,backgroundColor: "white",}]}>

          <Point />
          <Score />
          <Promotion />
          <PlayAgain />
          <Review />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;


