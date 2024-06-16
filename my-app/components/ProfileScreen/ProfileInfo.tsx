import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useUser } from "@clerk/clerk-react";
import { globalstyles } from "@/styles/global";
import { cardstyles } from "@/styles/card";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";

const ProfileInfo = () => {
  const { user } = useUser();
  return (
    <View style={[globalstyles.container,{backgroundColor:"white"}]}>
      <TouchableOpacity>
          <Image style={styles.profileImg} source={{ uri: user?.imageUrl }} />
      </TouchableOpacity>
      <Text style={[globalstyles.headerText, { fontSize: 18 }]}>
        {user?.fullName}
      </Text>

      <View style={globalstyles.Container3}>
        <TouchableOpacity style={[cardstyles.Card, styles.card]}>
          <Image
            source={require("../../assets/images/9.png")}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[cardstyles.Card, styles.card]}>
          <Image
            source={require("../../assets/images/10.png")}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[cardstyles.Card, styles.card]}>
          <Image
            source={require("../../assets/images/11.png")}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileImg: {
    height: responsiveHeight(15),
    width: responsiveHeight(15),
    borderRadius: responsiveHeight(7.5),
    borderWidth: 2,
    borderColor: "grey",
    marginTop: 1,
  },
  card: {
    height: responsiveHeight(13),
    width: responsiveHeight(13),

  },
  cardImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
