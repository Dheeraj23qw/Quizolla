import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

  import { StyleSheet } from 'react-native';

  export const headerCSS = StyleSheet.create({
    container: {
      flex: 0.8,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: responsiveHeight(0.5),
      backgroundColor: "#FFFFFF",
      padding: responsiveWidth(2),
      borderRadius: responsiveWidth(2),
      justifyContent: 'center',
      gap: responsiveWidth(0.5),
    },
    headerText: {
      fontSize: responsiveFontSize(3.8),
      fontFamily: "myfont-bold",
      marginLeft: responsiveWidth(2),
      textAlign: "center",
    },
    subTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: responsiveHeight(0.3),
    },
    subText: {
      fontSize: responsiveFontSize(2.4),
      marginLeft: responsiveWidth(2),
      textAlign: "center",
      fontFamily: "myfont-bold",
    }
  })