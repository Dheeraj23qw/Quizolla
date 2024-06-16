import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BEA1FE",
    overflow: "hidden",
  },

  // contentContainer
  Container2: {
    flex: 6.5,
    borderTopLeftRadius: responsiveWidth(8.5),
    borderTopRightRadius: responsiveWidth(8.5),
    backgroundColor: "white",
    padding: responsiveWidth(1.5),
    gap: responsiveWidth(2),
    overflow: "hidden",
  },

  // container contains 2-4 cardswithin it
  Container3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: responsiveWidth(1),
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 10,
    gap: responsiveWidth(2),
  },

  // container contains only 1 thing in a row
  Container4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: responsiveWidth(1),
    overflow: "hidden",
    borderRadius: 10,
  },

  headerText: {
    color: "#333333",
    letterSpacing: responsiveWidth(0.1),
    alignSelf: "flex-start",
    marginLeft: responsiveWidth(2.5),
    fontSize: responsiveFontSize(2.6),
    fontFamily: "outfit-medium",
  },
});
