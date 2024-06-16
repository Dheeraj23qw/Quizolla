import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export const tabcss = StyleSheet.create({

    tabBar: {
        height: responsiveHeight(6.25),
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: responsiveWidth(2.5),
        gap: responsiveWidth(2),
      },
      tab: {
        paddingVertical: responsiveHeight(1.25),
        paddingHorizontal: responsiveWidth(3.75),
        borderRadius: responsiveWidth(2.5),
        flex: 1, // Added to ensure equal space
      },
      activeTab: {
        backgroundColor: "#BEA1FE",
        borderBottomColor: "lightgrey",
        borderBottomWidth: responsiveWidth(0.5), // Increased for better visibility
      },
      activeTabText: {
        fontSize: responsiveFontSize(2),
        fontWeight: "bold",
        color: "white",
        textAlign: "center", // Added to center text
      },
      tabText: {
        fontSize: responsiveFontSize(2),
        fontWeight: "bold",
        textAlign: "center", // Added to center text
      },

})