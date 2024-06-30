// QuizscreenCss.ts

import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 4,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    backgroundColor: "#e9ecef",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "bold",
    color: "#343a40",
  },
  timer: {
    fontSize: responsiveFontSize(2.5),
    color: "#495057",
  },
  questionContainer: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(3),
  },
  questionNumber: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: "bold",
    color: "#212529",
  },
  questionText: {
    fontSize: responsiveFontSize(2),
    color: "#212529",
    marginTop: responsiveHeight(1),
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
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
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
  },
  selectedOption: {
    backgroundColor: "#007bff", // Example color for selected option background
    borderColor: "#007bff", // Example color for selected option border
  },
  selectedText: {
    color: "#ffffff", // Style for selected option text
  },
  correctOption: {
    backgroundColor: "#28a745",
    borderColor: "#28a745",
  },
  wrongOption: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
  },
  redText: {
    color: "#dc3545",
  },
  hintText: {
    fontSize: responsiveFontSize(2),
    color: "#17a2b8",
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
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
    borderRadius: 5,
    backgroundColor: "#6c757d",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disabledLifeline: {
    backgroundColor: "#adb5bd",
    borderColor: "#adb5bd",
  },
  lifelineText: {
    fontSize: responsiveFontSize(2),
    color: "#ffffff",
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
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    backgroundColor: "#f8f9fa",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
});
