import DailyQuiz from "@/components/HomeScreen/dailyquiz";
import ExploreClasses from "@/components/HomeScreen/exploreClasses";
import HomeHeader from "@/components/HomeScreen/homeheader";
import Homecard from "@/components/HomeScreen/Homecard";
import { globalstyles } from "@/styles/global";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native"; // Correct import

export default function HomeScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <HomeHeader />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Homecard />
          <DailyQuiz />
          <ExploreClasses />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
