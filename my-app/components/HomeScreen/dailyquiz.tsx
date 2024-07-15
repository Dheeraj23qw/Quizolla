import React from "react";
import { View, Image, StyleSheet,  TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useRouter } from "expo-router";
import { dailyQuizStyles } from "./HomeScreenCss/bodyCss";
const DailyQuiz = React.memo(() => {
  const router = useRouter();

  return (
    <View style={dailyQuizStyles.container}>
      <TouchableOpacity
        onPress={() => router.push("/joinquiz")}
        style={dailyQuizStyles.card}
      >
        <Image
          source={require("../../assets/images/homeImages/4.png")}
          style={dailyQuizStyles.cardImage}
        />
      </TouchableOpacity>
    </View>
  );
});



export default DailyQuiz;
