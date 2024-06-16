import { Image, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-react";
import { homeHeader } from "./HomeScreenCss/homeheaderCss";
const HomeHeader = () => {
  const { user } = useUser();

  return (
    <View style={homeHeader.header}>
      <View>
        <Image style={homeHeader.profileImg} source={{ uri: user?.imageUrl }} />
      </View>
      <View>
        <Text style={homeHeader.hello}>Hello!</Text>
        <Text style={homeHeader.profileName}>{user?.fullName}</Text>
      </View>
    </View>
  );
};

export default HomeHeader;
