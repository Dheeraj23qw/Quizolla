import React, { useState, useCallback } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { tabcss } from "./QuizListScreenCSS/tabcss";

const QuizListTab = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // Specify the type for activeTab as number
  const tabs: string[] = ["Public", "Friends", "Join By Id"]; // Specify the type for tabs as string[]

  // Memoized callback function using useCallback
  const handleTabPress = useCallback((index: number) => {
    setActiveTab(index);
  }, []);

  return (
    <View style={tabcss.tabBar}>
      {tabs.map((tab: string, index: number) => ( // Specify the types for tab and index
        <TouchableOpacity
          key={index}
          style={[tabcss.tab, activeTab === index && tabcss.activeTab]}
          onPress={() => handleTabPress(index)}
        >
          <Text
            style={activeTab === index ? tabcss.activeTabText : tabcss.tabText}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default React.memo(QuizListTab);
