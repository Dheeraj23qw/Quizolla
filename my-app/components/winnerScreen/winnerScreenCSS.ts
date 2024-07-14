import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

export const winnerstyles = StyleSheet.create({
  // Photo container styles
  photoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: responsiveHeight(1),
    backgroundColor: "rgba(0,0,0,0)",
  },
  photoCard: {
    height: responsiveHeight(20),
    width: responsiveHeight(20),
    borderRadius: responsiveHeight(12.5),
    overflow: 'hidden',
    borderColor: '#FFD700', // Gold border
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 5,
  },
  // Overlay styles
  overlay: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImage: {
    height: responsiveHeight(30),
    width: responsiveHeight(30),
    borderRadius: responsiveHeight(17.5),
    overflow: 'hidden',
    borderColor: '#FF4500', // OrangeRed border
    borderWidth: 3,
  },
  congratulationMessage: {
    fontSize: responsiveFontSize(3.2),
    fontFamily: "myfont-bold",
    color: "black",
    marginTop: responsiveHeight(1.5),
    paddingHorizontal: responsiveHeight(1.4),
  },

  // Score container styles
  scoreContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1), // Use padding instead of margin for gap
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: responsiveHeight(1),
    padding: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1E90FF', // DodgerBlue border
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "70%", // Adjusted for better consistency
  },
  scoreTitle: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.5),
    textAlign: 'center',
  },
  scoreValue: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.5),
    color: 'gray',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: responsiveWidth(2),
  },

  // Motivational container styles
  motivationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
  motivationCard: {
    backgroundColor: '#fff',
    borderRadius: responsiveHeight(1),
    padding: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#32CD32', // LimeGreen border
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    width: '90%',
    height: '60%',
  },
  motivationalMessage: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: "outfit-bold",
    color: "black",
    marginTop: responsiveHeight(1.5),
  },

  // Button styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1), // Use padding instead of margin for gap
    paddingHorizontal: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1),
    marginHorizontal: responsiveHeight(1),
    maxWidth: responsiveWidth(30),
    minWidth: responsiveWidth(20),
    backgroundColor: '#8E5DE9', // Tomato background color
    borderColor: '#32CD32', // OrangeRed border color
    borderWidth: 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,

  },
  buttonText: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'myfont',
    color: '#FFFFFF', // White text color
  },
});
