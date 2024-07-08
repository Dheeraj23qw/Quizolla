import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    messageBox: {
      flex: 0.3,
      padding: 16,
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 20,
    },
    messageText: {
      fontSize: 20,
      color:"white",
      fontFamily:"myfont-bold"
    },
    playButton: {
      padding: 10,
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      marginBottom: 20,
      borderRadius: 10,
    },
    playButtonText: {
      color: '#fff',
      fontSize: 19,
     fontFamily:"myfont-bold",
     letterSpacing: 1,
    },
    playButtonDisabled: {
        backgroundColor: '#ccc', // Disabled button color
      },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    card: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      justifyContent: 'center',
      backfaceVisibility: 'hidden',
    },
    cardText: {
      color: '#fff',
      fontSize: 20,
      fontFamily:"myfont-bold"
    },
    cardImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
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
      fontSize: 15,
      fontFamily:"myfont-bold"
    },
    scrollView: {
      flex: 1,
    },

  });