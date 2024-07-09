import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: responsiveWidth(4),
      backgroundColor: '#fff',
    },
    messageBox: {
      flex: 0.3,
      padding: responsiveWidth(4),
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      marginBottom: responsiveHeight(2.5),
      borderRadius: responsiveWidth(5),
    },
    messageText: {
      fontSize: responsiveFontSize(2.5),
      color: "white",
      fontFamily: "myfont-bold"
    },
    playButton: {
      padding: responsiveWidth(2.5),
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      marginBottom: responsiveHeight(2.5),
      borderRadius: responsiveWidth(2.5),
    },
    playButtonText: {
      color: '#fff',
      fontSize: responsiveFontSize(2.4),
      fontFamily: "myfont-bold",
      letterSpacing: 1,
    },
    playButtonDisabled: {
      backgroundColor: '#ccc', // Disabled button color
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: responsiveHeight(2.5),
    },
    card: {
      width: responsiveWidth(20),
      height: responsiveWidth(20),
      borderRadius: responsiveWidth(10),
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
    },
    cardText: {
      color: '#fff',
      fontSize: responsiveFontSize(2.5),
      fontFamily: "myfont-bold"
    },
    cardImage: {
      width: responsiveWidth(20),
      height: responsiveWidth(20),
      borderRadius: responsiveWidth(10),
    },
    tableContainer: {
      flex: 1,
    },
    table: {
      flexDirection: 'column',
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tableCell: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#8e44ad',
    },
    cellText: {
      fontSize: responsiveFontSize(2.5),
      fontFamily: "myfont-bold"
    },
    scrollView: {
      flex: 1,
    },
});
