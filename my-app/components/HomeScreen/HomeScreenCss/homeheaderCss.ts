import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

 export const homeHeader = StyleSheet.create({

    header: {
      flex:1,
      backgroundColor: '#BEA1FE',
      padding: responsiveWidth(2),
      flexDirection: 'row',
      alignItems: 'center',
      gap: responsiveWidth(2),
  },
  
    profileImg: {
      height: responsiveHeight(9),
      width: responsiveHeight(9),
      borderRadius: responsiveHeight(4.5),
    },
  
    profileName: {
      fontSize: responsiveHeight(2.5),
      fontWeight: "bold",
      paddingLeft: responsiveWidth(2),
      color: "white",
      fontFamily: "outfit",
    },
  
    hello: {
      fontSize: responsiveHeight(2),
      fontWeight: "bold",
      paddingTop: responsiveHeight(1),
      paddingLeft: responsiveWidth(2),
      color: "white",
    },
  });
  