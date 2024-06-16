import { TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { globalstyles } from "@/styles/global";
import { cardstyles } from "@/styles/card";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useRouter } from "expo-router";

const DailyQuiz = () => {
  const router = useRouter();
  
  return (
    <View style={[globalstyles.Container4, { borderRadius: responsiveWidth(0.6) }]}>
      <TouchableOpacity onPress={() => router.push("/joinquiz")}>
        <View style={[cardstyles.Card, { height: responsiveHeight(100), width: responsiveWidth(100) }]}>
          <Image
            source={require("../../assets/images/homeImages/4.png")}
            style={cardstyles.cardImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DailyQuiz;
