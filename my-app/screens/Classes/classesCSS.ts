import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const Classstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginVertical: responsiveHeight(2),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2.5),
     fontFamily: 'outfit-bold',
    color: '#333',
    marginLeft: responsiveWidth(2),
    marginBottom: responsiveHeight(2),

  },
  scrollViewContent: {
    paddingHorizontal: responsiveWidth(2),
  },
  classItem: {
    marginRight: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 8,
    height: responsiveHeight(18),
    width: responsiveWidth(35),
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  classItemText: {
    fontSize: responsiveFontSize(1.8),
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase', 
    fontFamily: 'outfit-medium'
  },

});
