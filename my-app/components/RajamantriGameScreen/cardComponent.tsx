// PlayerCard.tsx
import React from "react";
import { Text, TouchableOpacity, Image, Animated } from "react-native";
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

const PlayerCard: React.FC<PlayerCardProps> = ({
  index,
  role,
  playerName,
  flipped,
  clicked,
  onClick,
  animatedStyle,
}) => {
  const roleImages: { [key: string]: any } = {
    King: require("../../assets/images/chorsipahi/king.jpg"),
    Advisor: require("../../assets/images/chorsipahi/advisor.jpg"),
    Thief: require("../../assets/images/chorsipahi/thief.jpg"),
    Police: require("../../assets/images/chorsipahi/police.jpg"),
  };

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
        <TouchableOpacity onPress={() => onClick(index)}>
          <Text style={styles.cardText}>{playerName}</Text>
        </TouchableOpacity>
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
};

export default PlayerCard;
