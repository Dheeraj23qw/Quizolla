import { View, Image } from "react-native";;
import { cardstyles } from "@/styles/card";
import { winnerstyles } from "./winnerScreenCSS";


export default function Msg() {
  return (
    <>
    <View style={winnerstyles.messageContainer}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/congratulation/congo.png")}
            style={cardstyles.cardImage}
          />
        </View>
      </View>
    </>
  )
}