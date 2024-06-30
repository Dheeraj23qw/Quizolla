import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { resultScreenStyle} from "./ResultscreenCSS"

export default function Promotion() {
  return (
    <>
       <View style={resultScreenStyle.videoContainer}>
            <TouchableOpacity style={resultScreenStyle.videoButton}>
              <Text style={resultScreenStyle.buttonText}>Watch Video 2X</Text>
            </TouchableOpacity>
          </View>
   </>
  )
}