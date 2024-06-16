import DailyQuiz from "@/components/HomeScreen/dailyquiz";
import ExploreClasses from "@/components/HomeScreen/exploreClasses";
import HomeHeader from "@/components/HomeScreen/homeheader";
import Homecard from "@/components/HomeScreen/Homecard";
import { globalstyles } from "@/styles/global";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <HomeHeader />
      <View style={[globalstyles.Container2]}>
        <Homecard />
        <DailyQuiz />
        <ExploreClasses />
      </View>
    </SafeAreaView>
  );
}
