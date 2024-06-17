import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { cardstyles } from "@/styles/card";
import { responsiveWidth } from "react-native-responsive-dimensions";
import CustomAlert from "./customalert";
import { levelCSS } from "./QuizDetailScreenCSS/levelCSS";
import { useLevelHandlers } from "@/handlers/QuizDetailHandlers/level";

export default function Level() {
  const {
    selectedLevel,
    isAlertVisible,
    alertMessages,
    handleSelectedLevel,
    handleConfirm,
    handleCancel,
  } = useLevelHandlers();

  return (
    <View style={levelCSS.container}>
      <Text style={levelCSS.title}>Level</Text>
      <View style={levelCSS.subContainer}>
        <TouchableOpacity
          style={[
            cardstyles.Card,
            levelCSS.card,
            selectedLevel === "easy" ? levelCSS.selected : null,
          ]}
          onPress={() => handleSelectedLevel("easy")}
        >
          <FontAwesome name="circle" size={responsiveWidth(12)} color="green" />
          <Text style={levelCSS.cardText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            cardstyles.Card,
            levelCSS.card,
            selectedLevel === "medium" ? levelCSS.selected : null,
          ]}
          onPress={() => handleSelectedLevel("medium")}
        >
          <FontAwesome
            name="circle"
            size={responsiveWidth(12)}
            color="orange"
          />
          <Text style={levelCSS.cardText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            cardstyles.Card,
            levelCSS.card,
            selectedLevel === "hard" ? levelCSS.selected : null,
          ]}
          onPress={() => handleSelectedLevel("hard")}
        >
          <FontAwesome name="circle" size={responsiveWidth(12)} color="red" />
          <Text style={levelCSS.cardText}>Hard</Text>
        </TouchableOpacity>
      </View>
      <CustomAlert
        isVisible={isAlertVisible}
        title="Level Selected"
        messages={alertMessages}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </View>
  );
}
