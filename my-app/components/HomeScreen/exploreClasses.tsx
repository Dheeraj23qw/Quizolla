import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { useRouter } from "expo-router";
import { exploreStyles } from "./HomeScreenCss/bodyCss";
const ExploreClasses = React.memo(() => {
  const router = useRouter();

  return (
    <View style={exploreStyles.container}>
      <View style={exploreStyles.headerContainer}>
        <Text style={exploreStyles.headerText}>Explore Classes</Text>
        <TouchableOpacity onPress={() => router.push("/classrooms")}>
          <AntDesign name="arrowright" size={32} color="black" style={exploreStyles.iconStyle}/>
        </TouchableOpacity>
      </View>
      <View style={exploreStyles.cardsContainer}>
        <View style={exploreStyles.row}>
          <TouchableOpacity style={exploreStyles.card}>
            <Image
              source={require("../../assets/images/homeImages/5.png")}
              style={exploreStyles.cardImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={exploreStyles.card}>
            <Image
              source={require("../../assets/images/homeImages/6.png")}
              style={exploreStyles.cardImage}
            />
          </TouchableOpacity>
        </View>
        <View style={exploreStyles.row}>
          <TouchableOpacity style={exploreStyles.card}>
            <Image
              source={require("../../assets/images/homeImages/7.png")}
              style={exploreStyles.cardImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={exploreStyles.card}>
            <Image
              source={require("../../assets/images/homeImages/8.png")}
              style={exploreStyles.cardImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});



export default ExploreClasses;
