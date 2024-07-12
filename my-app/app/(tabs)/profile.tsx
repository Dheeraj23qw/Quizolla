import React from "react";
import ProfileInfo from "@/components/ProfileScreen/ProfileInfo";
import Badges from "@/components/ProfileScreen/Badges";
import ScreenHeader from "@/components/_screenHeader";
import {  View } from "react-native";
import { globalstyles } from "@/styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

import Winner from "@/screens/WinnerScreen/Winner";
import RajaMantriQuizScreen from "@/screens/RajaMantriGameScreen/Rajamantriquizscreen";
import RajaMantriGameScreen from "@/screens/RajaMantriGameScreen/RajaMantriGameScreen";
export default function profile() {
  return (
    // <SafeAreaView style={globalstyles.container}>
    //   <ScreenHeader name="Profile" />
    //    <View style={[globalstyles.Container2,{flex:10}]}>
    //   <ProfileInfo />
    //   <Badges />
    //   </View>
    // </SafeAreaView>
    <>
   {/* <RajaMantriQuizScreen/> */}
   <RajaMantriGameScreen/>
    </>
  );
}
