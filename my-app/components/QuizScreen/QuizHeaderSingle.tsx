import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { styles } from '@/screens/QuizScreen/QuizscreenCss';

interface HeaderComponentProps {
  toggleSidebar: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ toggleSidebar }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSidebar}>
        <MaterialIcons
          name="menu"
          size={responsiveFontSize(3.5)}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Quiz</Text>
      <Text style={styles.timer}>10:00</Text>
    </View>
  );
};

export default HeaderComponent;
