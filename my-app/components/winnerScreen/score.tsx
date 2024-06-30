
import { View,Text, TouchableOpacity } from "react-native";
import { resultScreenStyle } from "@/components/ResultScreen/ResultscreenCSS";

export default function Score() {
  return (
    <>
         <View style={[resultScreenStyle.scoreDetailsContainer, { flex: 0.4 }]}>
          <TouchableOpacity style={[resultScreenStyle.pointsCard, { height: "70%", width: "50%" }]}>
            <Text style={[resultScreenStyle.detailTitle]}>
              Correct Answer
            </Text>
            <Text style={resultScreenStyle.scoreText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[resultScreenStyle.pointsCard, { height: "70%", width: "50%" }]}>
            <Text style={[resultScreenStyle.detailTitle]}>
              time/question
            </Text>
            <Text style={resultScreenStyle.scoreText}>5</Text>
          </TouchableOpacity>
        </View>
    </>
  )
}