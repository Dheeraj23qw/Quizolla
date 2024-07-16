import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

export const chorPoliceQuizstyles = StyleSheet.create({
    imageBackground: {
      flex: 1,
    },
    quizContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    playerInfo: {
      alignItems: 'center',
      marginBottom: 20,
    },
    playerImage: {
      width: 180,
      height: 180,
      borderRadius: 180, // Circular border
      marginBottom: 10,
      borderWidth: 6,
      shadowColor: '#4682B4',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.5,
      shadowRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      borderColor: '#87CEEB', // Blue border color
    },
    playerName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FF6347', // Red color for player name
    },
    questionBox: {
      width: '80%',
      padding: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 15,
      borderWidth: 3,
      shadowColor: '#4682B4',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.5,
      shadowRadius: 12,
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      borderColor: '#87CEEB', // Blue border color
    },
    question: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
    },
    option: {
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: 15,
      borderRadius: 20,
      marginVertical: 10,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
      shadowColor: '#B22222',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      borderColor: '#87CEEB', // Blue border color
      borderWidth: 3,
    },
    optionText: {
      fontSize: 28,
      color: '#333',
      fontFamily: 'myfont-bold',
    },
    correctOption: {
      backgroundColor: 'green',
      borderColor: 'green',
    },
    wrongOption: {
      backgroundColor: 'red',
      borderColor: 'red',
    },
  });