import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
  import { StyleSheet } from 'react-native';

  export const levelCSS=StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: responsiveFontSize(3.5),
      fontFamily: "myfont-bold",
    },
    card: {
      width: responsiveWidth(30),
      height: "95%",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: responsiveWidth(1),
      borderColor: "transparent",
      borderRadius: responsiveWidth(2),
    },
    cardText: {
      fontSize: responsiveFontSize(2.5),
      marginTop: responsiveWidth(1),
      fontFamily: "myfont-bold",
    },
    selected: {
      borderColor: "rgba(0, 0, 0, 0.7)",
      backgroundColor: "rgba(0, 0, 0, 0.07)",
    },
    subContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "white",
      overflow: "hidden",
    },

  })