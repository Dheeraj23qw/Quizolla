import { View, Image, Text, ImageBackground } from "react-native";
import { globalstyles } from "@/styles/global";
import { cardstyles } from "@/styles/card";
import { useUser } from "@clerk/clerk-react";
import { winnerstyles } from "./winnerScreenCSS";

export default function Photo() {
  const { user } = useUser();
  return (
    
      <View style={winnerstyles.photoContainer}>
        <View style={[cardstyles.Card, winnerstyles.photoCard]}>
          <ImageBackground
            source={require("../../assets/images/congratulation/paper.jpg")}
            style={winnerstyles.imageBackground}
            imageStyle={{ resizeMode: 'cover' }}
          >
            <View style={winnerstyles.overlay}>
              <Image 
                source={{ uri: user?.imageUrl }}
                style={winnerstyles.circularImage}
              />
              <Text style={winnerstyles.userNameText}>{user?.fullName}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>

  );
}
