import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { cardstyles } from "@/styles/card";
import { resultScreenStyle } from "./ResultscreenCSS"

export default function Point() {
  return (
    <>
      <View style={resultScreenStyle.pointsContainer}>
        <TouchableOpacity style={[resultScreenStyle.pointsCard]}>
    
            <Text style={[resultScreenStyle.pointsTitle]}>
              Points Earned
            </Text>
            <Text style={resultScreenStyle.scoreText}>500</Text>
      
        </TouchableOpacity>
      </View>
    </>
  )
}