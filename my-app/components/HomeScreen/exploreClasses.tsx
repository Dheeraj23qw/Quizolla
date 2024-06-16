import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { globalstyles } from "@/styles/global";
import { cardstyles } from "@/styles/card";



const ExploreClasses = () => {
  return (
    <View style={[globalstyles.container,{backgroundColor:"white"}]}>
      <View style={[globalstyles.Container3, { paddingRight: responsiveHeight(3)}]}>
        <Text style={[globalstyles.headerText]}>Explore Classes</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View style={[globalstyles.container, { flex: 3, gap: responsiveWidth(2) ,backgroundColor:"white"}]}>
        <View style={[globalstyles.Container3, { justifyContent: "space-around" }]}>
          <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(8), width: responsiveWidth(40) }]}>
            <Image
             source={require("../../assets/images/homeImages/5.png")}
              style={[cardstyles.cardImage, { resizeMode: 'cover' }]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(8), width: responsiveWidth(40) }]}>
            <Image
              source={require("../../assets/images/homeImages/6.png")}
              style={[cardstyles.cardImage, { resizeMode: 'cover'}]}
            />
          </TouchableOpacity>
        </View>
        <View style={[globalstyles.Container3, { justifyContent: "space-around" }]}>
          <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(8), width: responsiveWidth(40) }]}>
            <Image
              source={require("../../assets/images/homeImages/7.png")}
              style={[cardstyles.cardImage, { resizeMode: 'cover'}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[cardstyles.Card, { height: responsiveHeight(8), width: responsiveWidth(40) }]}>
            <Image
              source={require("../../assets/images/homeImages/8.png")}
              style={[cardstyles.cardImage, { resizeMode: 'cover'}]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExploreClasses;
