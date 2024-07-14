// QuizscreenCss.ts

import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
 
  scrollContent: {
    flexGrow: 1,
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    backgroundColor: "#8E5DE9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap:8
  },
  headerText: {
    fontSize: responsiveFontSize(3.5),
    color: "white",
    fontFamily:'outfit-bold'
  },
  headerTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    gap:10
  },

  questionContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(3),
    marginTop:responsiveHeight(3),
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#87CEEB',
    shadowColor: '#4682B4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  
  
  questionNumber: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: "bold",
    color: "#212529",
  },
  questionText: {
    fontSize: responsiveFontSize(2.2),
    color: "#212529",
    marginTop: responsiveHeight(1),
   
    fontFamily:'outfit-bold'
  },
  optionsContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(2),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(3),
 
    borderRadius: 15,
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderColor: '#87CEEB',
    borderWidth: 3,
  },
  optionLabel: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    color: "#343a40",
    marginRight: responsiveWidth(2),
  },
  optionText: {
    fontSize: responsiveFontSize(2),
    color: "#495057",
     fontFamily:'outfit-bold'
  },


  correctOption: {
    backgroundColor: "#28a745",
    borderColor: "#28a745",
    color: "#ffffff",
  },
  wrongOption: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
    
  },
  selectedOptionText:{
    fontSize: responsiveFontSize(2.1),
    color: "#ffffff",
    fontWeight: "bold",
  
},
  hintText: {
    fontSize: responsiveFontSize(3.2),
    color: "#17a2b8",
    paddingHorizontal: responsiveWidth(5),
    fontFamily:"myfont-bold"
  },
  lifelineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: responsiveHeight(2),
  },
  lifeline: {
    marginHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderWidth: 1,
    borderColor: "#6c757d",
    borderRadius: 999,
    backgroundColor: "#8E5DE9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: responsiveWidth(20), 
    height: responsiveWidth(20), 
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledLifeline: {
    backgroundColor: "#adb5bd",
    borderColor: "#adb5bd",
  },
  lifelineText: {
    fontSize: responsiveFontSize(3),
    color: "#ffffff",
    fontFamily:"myfont-bold",
  },
  solutionText: {
    fontSize: responsiveFontSize(2),
    color: "#343a40",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  messageContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  msgContainer: {
    flex:8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: responsiveFontSize(2.8),
    color: 'white',
    fontWeight: 'bold',
  },
});
