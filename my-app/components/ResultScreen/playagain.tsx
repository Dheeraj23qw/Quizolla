import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { resultScreenStyle} from "./ResultscreenCSS"

export default function PlayAgain() {
  return (
   <>
   <View style={resultScreenStyle.playAgainContainer}>
            <TouchableOpacity style={resultScreenStyle.playAgainButton}>
              <Text style={resultScreenStyle.buttonText}>Play Again</Text>
            </TouchableOpacity>
          </View>
   </>
  )
}