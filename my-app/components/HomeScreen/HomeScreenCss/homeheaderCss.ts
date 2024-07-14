import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

export const homeHeader = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#8E5DE9",
    padding: responsiveWidth(2),
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    gap:responsiveWidth(4)
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
    paddingTop: responsiveHeight(1),
    paddingLeft: responsiveWidth(2),
    color: "#fff",
    fontFamily: "outfit-bold",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
   
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(5),
    backgroundColor: "#8E5DE9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
});
