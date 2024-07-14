import React from "react";
import { Text, TouchableOpacity, Image, Animated, ImageBackground,View } from "react-native";
import { styles } from "@/screens/RajaMantriGameScreen/styles";

interface PlayerCardProps {
  index: number;
  role: string;
  playerName: string;
  flipped: boolean;
  clicked: boolean;
  onClick: (index: number) => void;
  animatedStyle: any;
}

const roleImages: { [key: string]: any } = {
  King: require("../../assets/images/chorsipahi/king.jpg"),
  Advisor: require("../../assets/images/chorsipahi/advisor.jpg"),
  Thief: require("../../assets/images/chorsipahi/thief.jpg"),
  Police: require("../../assets/images/chorsipahi/police.jpg"),
};

const playerImages: { [key: number]: any } = {
  1: require("../../assets/images/chorsipahi/kid1.jpg"),
  2: require("../../assets/images/chorsipahi/kid2.jpg"),
  3: require("../../assets/images/chorsipahi/kid3.jpg"),
  4: require("../../assets/images/chorsipahi/kid4.jpg"),
};

const PlayerCard: React.FC<PlayerCardProps> = React.memo(({
  index,
  role,
  playerName,
  flipped,
  clicked,
  onClick,
  animatedStyle,
}) => {
  const renderContent = () => {
    if (flipped) {
      if (role === "Police") {
        return <Image source={roleImages.Police} style={styles.cardImage} />;
      } else {
        return (
          <TouchableOpacity onPress={() => onClick(index)}>
            <Image source={roleImages[role]} style={styles.cardImage} />
          </TouchableOpacity>
        );
      }
    } else {
      return (
        <ImageBackground source={playerImages[index + 1]} style={styles.playerNmaeCardImage}>
            <View style={styles.overlay}>
        <TouchableOpacity onPress={() => onClick(index)}>
          
            <Text style={styles.cardText}>{playerName}</Text>

        </TouchableOpacity>
        </View>
        </ImageBackground>
      );
    }
  };

  return (
    <TouchableOpacity onPress={() => onClick(index)} disabled={flipped || clicked}>
      <Animated.View style={[styles.card, animatedStyle]}>
        {renderContent()}
      </Animated.View>
    </TouchableOpacity>
  );
});

export default PlayerCard;
