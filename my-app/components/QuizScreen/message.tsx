import React from "react";
import { Text, View } from "react-native";
import { styles } from "@/screens/QuizScreen/QuizscreenCss";

interface HintComponentProps {
  hint: string | null;
}

const HintComponent: React.FC<HintComponentProps> = ({ hint }) => {
  return (
    <View style={styles.msgContainer}>
      <Text style={styles.hintText}>{hint}</Text>
    </View>
  );
};

export default HintComponent;