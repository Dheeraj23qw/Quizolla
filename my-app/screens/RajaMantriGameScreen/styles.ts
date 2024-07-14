import { StyleSheet } from "react-native";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(4),
    backgroundColor: '#f0f0f0',
  },
  playButton: {
    padding: responsiveWidth(8),
    backgroundColor: '#FF6347', 
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
    borderRadius: responsiveWidth(10),
    borderWidth: 2,
    borderColor: '#FF4500', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playButtonText: {
    color: '#fff', 
    fontSize: responsiveFontSize(4), 
    fontFamily: "outfit-bold", 
    letterSpacing: 1,
  },
  
  playButtonDisabled: {
    backgroundColor: '#ccc',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: responsiveHeight(4),
  },
  card: {
    width: responsiveWidth(40),
    height: responsiveWidth(46),
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#1E90FF',
    borderRadius: responsiveWidth(20),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
    borderLeftWidth: 10,
    borderLeftColor: '#000',
  },
  cardText: {
    color: '#fff',
    fontSize: responsiveFontSize(3),
    fontFamily: "outfit-bold",
   
  },
  cardImage: {
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: responsiveWidth(17.5),
  },
  tableContainer: {
    flex: 1,
    marginVertical: responsiveHeight(2),
  },
  table: {
    flexDirection: 'column',
    borderWidth: 4,
    borderColor: '#FF1493',
    borderRadius: responsiveWidth(3),
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: responsiveWidth(1),
    backgroundColor: '#FFB6C1',
    
  },
  tableCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FF69B4',
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
  },
  cellText: {
    fontSize: responsiveFontSize(2),
    fontFamily: "outfit-bold",
    color: '#FF1493',
  },
  scrollView: {
    flex: 1,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullScreenVideo: {
    flex: 1,
  },
});

export default styles;
