
import {View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "@/styles/global";
import Msg from "@/components/winnerScreen/msg";
import Photo from "@/components/winnerScreen/photo";
import Score from "@/components/winnerScreen/score";
import Button from "@/components/winnerScreen/button";

export default function Winner() {
  return (
    <SafeAreaView style={[globalstyles.container,{backgroundColor:"#9C28B1"}]}>
      <Msg />
      <View style={[globalstyles.Container2, { flex: 2.8 }]}>
        <Photo />
        <Score />
        <Button />
      </View>
    </SafeAreaView>
  );
}

