import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export const dailyQuizStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: responsiveWidth(2),
    overflow: "hidden",
  },
  card: {
    height: responsiveHeight(25),
    width: responsiveWidth(90),
    borderRadius: 27,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ddd",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: responsiveWidth(0.6),
  },
});

export const exploreStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveHeight(2),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: responsiveHeight(3),
    marginBottom: responsiveHeight(2),
  },
  headerText: {
    fontSize: responsiveHeight(3),
    fontWeight: "bold",
    color: "black",
  },
  cardsContainer: {
    flex: 3,
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: responsiveHeight(2),
  },
  card: {
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 78,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  cardImage: {
    width: responsiveWidth(38),
    height: responsiveHeight(7),
    resizeMode: "cover",
  },
  iconStyle: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 2 },
    textShadowRadius: 5,
  },
});

export const homeCardstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:responsiveWidth(4),
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderRadius: 10,
        gap: responsiveWidth(0.3),
        paddingHorizontal:responsiveWidth(2)
    },
    card: {
        height: responsiveHeight(20),
        width: responsiveWidth(30),
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        marginBottom: responsiveHeight(2),

        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:3,
        borderColor:"#ddd",
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
