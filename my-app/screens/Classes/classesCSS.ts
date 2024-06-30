import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { StyleSheet } from 'react-native';
 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: responsiveWidth(4),
      paddingTop: responsiveHeight(5),
      backgroundColor:"white"
    },
    backButton: {
      marginVertical: responsiveHeight(2),
    },
    sectionTitle: {
      fontSize: responsiveFontSize(2.5),
      fontWeight: 'bold',
      marginVertical: responsiveHeight(2),
    },
    flatList: {
      marginBottom: responsiveHeight(2),
    },
    flatListContent: {
      paddingHorizontal: responsiveWidth(1),

    },
    classItem: {
      width: responsiveWidth(35), // Fixed width of 100 units
      height: responsiveHeight(15), // Fixed height of 100 units
      marginRight: responsiveWidth(4),
      padding: responsiveHeight(2),
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },

  });