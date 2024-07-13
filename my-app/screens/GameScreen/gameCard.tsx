import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

interface GameCardProps {
  title: string;
  imageSource: any;
  secondIcon?: any;
}

const GameCard: React.FC<GameCardProps> = React.memo(
  ({ title, imageSource, secondIcon }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          source={imageSource}
          style={styles.cardImage}
          resizeMode="cover"
        >
          <View style={styles.cardOverlay} />
          <View style={styles.cardContent}>
            {secondIcon ? (
              <View style={styles.secondIconContainer}>
               <FontAwesome5 name="coins" size={24} color="black" style={styles.secondIcon} />
                <Text style={styles.cardTitle}>{title}</Text>
              </View>
            ) : (
              <Text style={styles.cardTitle}>{title}</Text>
            )}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    width: "99%",
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 8,
    borderWidth: 3,
    borderColor: "#ddd",
    backgroundColor: "#f0f0f0",
  },
  cardImage: {
    flex: 1,
    justifyContent: "center",
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  secondIconContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap:10
  },
  secondIcon: {
    color: "#FFD700", // Golden color
  },
});

export default GameCard;
