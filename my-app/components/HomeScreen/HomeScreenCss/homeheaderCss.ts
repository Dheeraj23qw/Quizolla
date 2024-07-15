import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

export const homeHeader = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#8E5DE9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(6),
    justifyContent: 'flex-start',
    gap: responsiveWidth(2.5),
    height: responsiveHeight(10),  // Setting a fixed height for the header
    paddingVertical: responsiveHeight(2), // Vertical padding to ensure spacing
    paddingHorizontal: responsiveWidth(4), // Horizontal padding for inner elements
    borderBottomWidth: 1,  // Adding a bottom border for separation
    borderBottomColor: '#8E5DE9',  // Color for the bottom border
  },

  profileImg: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    borderRadius: responsiveHeight(5),
    borderWidth: 3,
    borderColor: "#fff",
  },

  profileName: {
    fontSize: responsiveHeight(3),
    paddingLeft: responsiveWidth(2),
    color: "#fff",
    fontFamily: "outfit-bold",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(5),
    backgroundColor: "#8E5DE9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },

  hello: {
    fontSize: responsiveHeight(2.4),
   
    paddingLeft: responsiveWidth(2.9),
    color: "#fff",
    fontFamily: "outfit-bold",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
   

    borderRadius: responsiveWidth(5),
    backgroundColor: "#8E5DE9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});
