import React, { useState } from "react";
import {  Text, View, TouchableOpacity } from "react-native";
import { tabcss } from "./QuizListScreenCSS/tabcss";


const QuizListTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Public", "Friends", "Join By Id"];

  return (
    <View style={tabcss.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[tabcss.tab, activeTab === index && tabcss.activeTab]}
          onPress={() => setActiveTab(index)}
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

export default QuizListTab;

