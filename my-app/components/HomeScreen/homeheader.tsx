import React, { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-react";
import { homeHeader } from "./HomeScreenCss/homeheaderCss";

const HomeHeader = () => {
  const { user } = useUser();

  // Memoize the JSX returned by the component
  const memoizedHeader = useMemo(
    () => (
      <View style={homeHeader.header}>
        <View>
          <Image style={homeHeader.profileImg} source={{ uri: user?.imageUrl }} />
        </View>
        <View>
          <Text style={homeHeader.hello}>Hello!</Text>
          <Text style={homeHeader.profileName}>{user?.fullName}</Text>
        </View>
      </View>
    ),
    [user?.imageUrl, user?.fullName] // Dependency array for useMemo
  );

  return memoizedHeader;
};

export default React.memo(HomeHeader); // Memoize the entire component

