// PlayButton.tsx
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "@/screens/RajaMantriGameScreen/styles";
import { View } from "react-native";

interface PlayButtonProps {
  disabled: boolean;
  onPress: () => void;
  buttonText: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ disabled, onPress, buttonText }) => {
  return (
    <View style={[styles.playButton, disabled && styles.playButtonDisabled]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Text style={styles.playButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayButton;
