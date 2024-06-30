import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { resultScreenStyle} from "./ResultscreenCSS"

export default function Review() {
  return (
    <>
       <View style={resultScreenStyle.reviewContainer}>
            <TouchableOpacity style={resultScreenStyle.reviewButton}>
              <Text style={resultScreenStyle.buttonText}>Review Questions</Text>
            </TouchableOpacity>
          </View>
   </>
  )
}