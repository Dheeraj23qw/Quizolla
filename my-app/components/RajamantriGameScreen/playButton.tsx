// PlayButton.tsx
import React from "react";
import { Text, Pressable, View, ImageBackground } from "react-native";
import { styles } from "@/screens/RajaMantriGameScreen/styles";

interface PlayButtonProps {
  disabled: boolean;
  onPress: () => void;
  buttonText: string;
}

const PlayButton: React.FC<PlayButtonProps> = React.memo(({ disabled, onPress, buttonText }) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
    
      <View >
      <ImageBackground   source={require('../../assets/images/chorsipahi/kidbutton.png')}
          resizeMode="cover"
          style={[styles.playButton,styles.backgroundImage, disabled && styles.playButtonDisabled]}>
        <Text style={styles.playButtonText}>{buttonText}</Text>
        </ImageBackground>
      </View>
      
    </Pressable>
  );
});

export default PlayButton;
