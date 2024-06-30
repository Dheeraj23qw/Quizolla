import {  Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { cardstyles } from "@/styles/card";
import { resultScreenStyle} from "./ResultscreenCSS"

export default function Score() {
  return (
    <>
        <View style={resultScreenStyle.scoreDetailsContainer}>
            <TouchableOpacity style={[resultScreenStyle.pointsCard,{height:"70%",width:"50%"}]}>
                <Text style={[resultScreenStyle.detailTitle]}>
                  Correct Answer
                </Text>
                <Text style={resultScreenStyle.scoreText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[resultScreenStyle.pointsCard,{height:"70%",width:"50%"}]}>
                <Text style={[resultScreenStyle.detailTitle]}>
                  time/question
                </Text>
                <Text style={resultScreenStyle.scoreText}>5</Text>
            </TouchableOpacity>
          </View>
   </>
  )
}