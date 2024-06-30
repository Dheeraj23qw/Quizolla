
import { StyleSheet } from "react-native";
import { responsiveWidth,responsiveHeight } from "react-native-responsive-dimensions";

export const winnerstyles = StyleSheet.create({
    safeArea: {
      backgroundColor: "#9C28B1",
    },
    messageContainer: {
      flex: 0.3,
      backgroundColor: "#9C28B1",
    },
    button: {
      width: "25%",
      height: "70%",
      borderColor: "black",
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 9,
      fontFamily: "myfont-bold"
    },
    buttonText: {
      fontSize: responsiveHeight(4),
      fontFamily: "myfont-bold"
    },
    photoContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      paddingTop: 10,
    },
    photoCard: {
      height: "100%",
      width: "90%",
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    overlay: {
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    circularImage: {
      marginTop: 100,
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "#fff",
    },
    userNameText: {
      fontSize: responsiveHeight(4),
      fontFamily: "myfont-bold",
      color: "black",
      marginTop: 10,
    },
  });