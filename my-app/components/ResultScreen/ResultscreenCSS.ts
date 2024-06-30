import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";


export const resultScreenStyle = StyleSheet.create({
    cardContainer: {
      flex: 1,
      backgroundColor: "white",
    },
    pointsContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
     
    
    },
    pointsCard: {
      height:"90%",
      width: "70%",
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: "#9C28B1",
      borderRadius: 10,
      elevation: 1,
      paddingVertical:9,
    },

    pointsTitle: {
      fontSize: responsiveHeight(4),
      fontFamily:"myfont-bold"
    },
    scoreDetailsContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      flexDirection: "row",
      padding: responsiveWidth(1),
      gap: responsiveWidth(2),
    },
    detailCard: {
      height: "90%",
      width: "45%",
    },
    detailTextContainer: {
      flex: 0.5,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    detailValueContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    detailTitle: {
      fontSize: responsiveHeight(3.25),
       fontFamily:"myfont-bold"
    },
    videoContainer: {
      flex: 0.4,
      justifyContent: "center",
    },
    videoButton: {
      flex: 0.9,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green",
      borderRadius: responsiveWidth(6),
    },
    playAgainContainer: {
      flex: 0.4,
      justifyContent: "center",
    },
    playAgainButton: {
      flex: 0.9,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
      borderRadius: responsiveWidth(6),
    },
    reviewContainer: {
      flex: 0.8,
      justifyContent: "flex-end",
    },
    reviewButton: {
      flex: 0.94,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "orange",
      borderRadius: responsiveWidth(6),
     
    },
    scoreText: {
      fontSize: responsiveHeight(6),
      fontFamily:"myfont-bold",
      color: "black",
    },
    buttonText: {
      fontSize: responsiveHeight(4),
      color: "white",
      fontFamily:"myfont-bold",
      textAlign: "center",
      alignItems: "center",
    },
  });