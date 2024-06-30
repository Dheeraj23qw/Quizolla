import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
  import { StyleSheet } from 'react-native';

  export const customAlertCSS=StyleSheet.create({
    modalContainer: {
      backgroundColor: 'white',
      padding: responsiveWidth(5),
      borderRadius: responsiveWidth(2),
      alignItems: 'center',
      
    },
    title: {
      fontSize: responsiveFontSize(4),
      marginBottom: responsiveHeight(2),
      fontFamily:"myfont-bold",
    },
    message: {
      fontSize: responsiveFontSize(2.8),
      textAlign: 'center',
      marginBottom: responsiveHeight(1),
      fontFamily:"myfont-bold",
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: responsiveHeight(2),
    },
    button: {
      backgroundColor: '#BEA1FE',
      padding: responsiveHeight(1.5),
      borderRadius: responsiveWidth(2),
      flex: 1,
      margin: responsiveWidth(1),
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: responsiveFontSize(2.4),
      fontFamily:"myfont-bold",
    },
    Card: {
   
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.4,
      elevation: 5,
      overflow: 'hidden',
      padding: responsiveWidth(0.6), 
   
  },

  })