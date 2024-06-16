import { View, TouchableOpacity, Image } from "react-native";
import { globalstyles } from "@/styles/global";
import { cardstyles } from "@/styles/card";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

const Homecard = () => {
    return (
        <View style={[globalstyles.Container3, { justifyContent: "space-between" }]}>
            <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(20), width: responsiveWidth(30) }]}>
                <Image
                    source={require("../../assets/images/homeImages/1.png")}
                    style={cardstyles.cardImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(20), width: responsiveWidth(30) }]}>
                <Image
                   source={require("../../assets/images/homeImages/2.png")}
                    style={cardstyles.cardImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(20), width: responsiveWidth(30) }]}>
                <Image
                   source={require("../../assets/images/homeImages/3.png")}
                    style={cardstyles.cardImage}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Homecard;
