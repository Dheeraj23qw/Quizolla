import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "@/styles/global";
import Msg from "@/components/winnerScreen/msg";
import Photo from "@/components/winnerScreen/photo";
import Score from "@/components/winnerScreen/score";
import Button from "@/components/winnerScreen/button";
import ScreenHeader from "@/components/_screenHeader";

interface WinnerProps {
  correctAnswers: number;
  isWinner: string;
}

const Winner: React.FC<WinnerProps> = ({ correctAnswers, isWinner }) => {
  // Convert isWinner to boolean for conditional rendering
  const isWinnerBool = isWinner === "true";

  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name={isWinnerBool ? "Congratulations !!" : "Oops!! You Lose!"} />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <Photo isWinner={isWinnerBool} />
        {/* Ensure correctAnswers is correctly passed to Score */}
        <Score correctAnswers={correctAnswers} />
        <Msg isWinner={isWinnerBool} />
        <Button />
      </View>
    </SafeAreaView>
  );
};

// Memoize the Winner component to prevent unnecessary re-renders
export default React.memo(Winner, (prevProps, nextProps) => {
  return (
    prevProps.correctAnswers === nextProps.correctAnswers &&
    prevProps.isWinner === nextProps.isWinner
  );
});
