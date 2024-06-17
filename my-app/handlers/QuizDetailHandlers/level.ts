import { useState } from "react";
import {
  EASY_MESSAGES,
  MEDIUM_MESSAGES,
  HARD_MESSAGES,
} from "@/constants/levelmsg";
export const useLevelHandlers = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessages, setAlertMessages] = useState<string[]>([]);

  const handleSelectedLevel = (level: string) => {
    setSelectedLevel(level);
    let messages: string[];
    switch (level) {
      case "easy":
        messages = EASY_MESSAGES;
        break;
      case "medium":
        messages = MEDIUM_MESSAGES;
        break;
      case "hard":
        messages = HARD_MESSAGES;
        break;
      default:
        messages = [];
    }
    setAlertMessages(messages);
    setAlertVisible(true);
  };

  const handleConfirm = () => {
    setAlertVisible(false);
  };

  const handleCancel = () => {
    setAlertVisible(false);
  };

  return {
    selectedLevel,
    isAlertVisible,
    alertMessages,
    handleSelectedLevel,
    handleConfirm,
    handleCancel,
  };
};
