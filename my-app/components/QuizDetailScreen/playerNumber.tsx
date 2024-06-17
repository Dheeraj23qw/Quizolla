import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { playerNumberCSS } from "./QuizDetailScreenCSS/playerNumberCSS";
export default function PlayerNumber() {
  const [selectedPlayer, setSelectedPlayer] = useState("single");

  const handleCheckBox = (playerType: string) => {
    setSelectedPlayer(playerType);
  };

  return (
    <View style={playerNumberCSS.container}>
      <View style={playerNumberCSS.section}>
        <TouchableOpacity
          style={playerNumberCSS.row}
          onPress={() => handleCheckBox("single")}
        >
          <Checkbox
            style={playerNumberCSS.checkbox}
            value={selectedPlayer === "single"}
            onValueChange={() => handleCheckBox("single")}
          />
          <Text style={playerNumberCSS.paragraph}>Single Player</Text>
        </TouchableOpacity>
        <FontAwesome
          name="user"
          size={responsiveScreenFontSize(3)}
          color="black"
        />
      </View>
      <View style={playerNumberCSS.section}>
        <TouchableOpacity
          style={playerNumberCSS.row}
          onPress={() => handleCheckBox("multi")}
        >
          <Checkbox
            style={playerNumberCSS.checkbox}
            value={selectedPlayer === "multi"}
            onValueChange={() => handleCheckBox("multi")}
            color={selectedPlayer === "multi" ? "#4630EB" : undefined}
          />
          <Text style={playerNumberCSS.paragraph}>Multi Player</Text>
        </TouchableOpacity>
        <FontAwesome5
          name="users"
          size={responsiveScreenFontSize(3)}
          color="black"
        />
      </View>
    </View>
  );
}
