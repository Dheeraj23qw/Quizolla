import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalstyles } from "@/styles/global";

const badges = [
  require("../../assets/images/homeImages/1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
  require("../../assets/images/badge1.png"),
];

const Badges: React.FC = () => {
  return (
    <View
      style={[globalstyles.container,{backgroundColor:"white"}]}>
      <Text style={[globalstyles.headerText, { fontSize: responsiveFontSize(3) }]}>My Badges</Text>
      <View style={styles.elevatedContainer}>
        <FlatList
          data={badges}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image source={item} style={styles.badgeIcon} />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  elevatedContainer: {
    flex: 1,
    minHeight: responsiveHeight(20),
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: responsiveWidth(5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  listContent: {
    alignItems: "center",
  },
  badgeIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12,
    ),
    margin: responsiveWidth(2.5),
  },
});
