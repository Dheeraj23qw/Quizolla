import React, { useState, useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import { motivationalMessages, consolationMessages } from "@/constants/message";
import { winnerstyles } from "./winnerScreenCSS";

interface MsgProps {
  isWinner: boolean;
}

const Msg: React.FC<MsgProps> = ({ isWinner }) => {
  const [selectedMessage, setSelectedMessage] = useState<string>("");

  useEffect(() => {
    setSelectedMessage(getRandomMessage());
  }, [isWinner]);

  const getRandomMessage = () => {
    const messages = isWinner ? motivationalMessages : consolationMessages;
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  // Memoize the selected message to avoid unnecessary recalculations
  const memoizedMessage = useMemo(() => getRandomMessage(), [isWinner]);

  return (
    <View style={winnerstyles.motivationContainer}>
      <View style={winnerstyles.motivationCard}>
        <Text style={winnerstyles.motivationalMessage}>{memoizedMessage}</Text>
      </View>
    </View>
  );
};

export default Msg;
