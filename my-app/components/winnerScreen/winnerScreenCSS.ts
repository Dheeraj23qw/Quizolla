import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";

export const winnerstyles = StyleSheet.create({

  // photo container css starts from here

  photoContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: responsiveHeight(1),
  },
  photoCard: {
    height: responsiveHeight(25),
    width: responsiveHeight(25),
    borderRadius: responsiveHeight(12.5),
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.4,
    elevation: 5,
  },
  overlay: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImage: {
    height: responsiveHeight(35),
    width: responsiveHeight(35),
    borderRadius: responsiveHeight(17.5),
    overflow: 'hidden',
  },
  congratulationMessage: {
    fontSize: responsiveFontSize(3.2),
    fontFamily: "myfont-bold",
    color: "black",
    marginTop: responsiveHeight(1.5),
    paddingHorizontal: responsiveHeight(1.4),
  },

  // score container css starts from here

  scoreContainer: {
    flex:0.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: responsiveHeight(1),
    padding: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '28%',
    height: responsiveHeight(15),
  },
  scoreTitle: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.5),
    textAlign: 'center',
  },
  scoreValue: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginVertical: responsiveHeight(0.5),
    color: 'gray',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingHorizontal: responsiveWidth(2),
  },

  // motivational container styles
  
  motivationContainer: {
    flex: 0.34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  motivationCard:{
    backgroundColor: '#fff',
    borderRadius: responsiveHeight(1),
    padding: responsiveHeight(2),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    width: '95%',
    height: '100%',
  },
  motivationalMessage:{
    fontSize: responsiveFontSize(2.5),
    fontFamily: "outfit-bold",
    color: "black",
    marginTop: responsiveHeight(1.5),
  },

  // button styles starts from here

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: responsiveHeight(1),
    paddingHorizontal: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
  },
  button: {
    flex: 1, 
    borderColor: 'black',
    borderWidth: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(1), 
    marginHorizontal: responsiveHeight(1), 
    maxWidth: responsiveWidth(30), 
    minWidth: responsiveWidth(20),
    fontFamily: 'myfont-bold',
     
  },
  buttonText: {
    fontSize: responsiveFontSize(3),
    fontFamily: 'myfont',
  },

});
