import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface GameCardProps {
  title: string;
  imageSource: any;
}

const GameCard: React.FC<GameCardProps> = React.memo(({ title, imageSource }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        source={imageSource}
        style={styles.cardImage}
        resizeMode="cover"
      >
        <View style={styles.cardOverlay} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
    borderWidth: 3,
    borderColor: '#ddd', // Border color
    backgroundColor: '#f0f0f0', // Card background color
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Text shadow for better readability
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default GameCard;
