import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
  import { StyleSheet } from 'react-native';

  export const playerNumberCSS=StyleSheet.create({
    container: {
        flex: 0.3,
        paddingTop: responsiveHeight(1),
        paddingBottom: responsiveHeight(2),
        padding: responsiveHeight(2),
        borderRadius: responsiveWidth(3),
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        backgroundColor: "#BEA1FE",
      },
      section: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: responsiveHeight(0.3),
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
      paragraph: {
        fontSize: responsiveFontSize(3.2),
        fontFamily: "myfont-bold",
        color: "black",
      },
      checkbox: {
        marginRight: responsiveWidth(3),
        width: responsiveWidth(8),
        height: responsiveWidth(7),
      },

  })