import { StyleSheet } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

export const QListstyles = StyleSheet.create({
    QuizContentContainer: {
        padding: responsiveHeight(1),
        height: 'auto',
        minHeight: '100%',   
        display: 'flex',
        backgroundColor: 'white',
        gap: responsiveHeight(2),
    },
    
    cardcontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(0.5),
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    
    iconContainer: {
        height: responsiveHeight(5), 
        width: responsiveHeight(9),
        borderRadius: responsiveHeight(2.1),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
    name: {
        fontSize: responsiveFontSize(1.8), 
        fontWeight: "bold",
        color: "black",
        marginBottom: responsiveHeight(0.2),
    },
    price: {
        fontSize: responsiveFontSize(1.5),
        color: "gray",
    },
    time: {
        fontSize: responsiveFontSize(1.5),
        color: "gray",
    },
    quiz_maker_name: {
        fontSize: responsiveFontSize(1.5),
        color: "gray",
        fontWeight: 'bold',
        marginBottom: responsiveHeight(0.5),
    },
});
