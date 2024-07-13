import React, { useMemo } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/_screenHeader';
import { globalstyles } from '@/styles/global';
import GameCard from '../GameScreen/gameCard';

const GamesScreen = () => {
  const games = useMemo(() => [
    { title: "70000", imageSource: require('../../assets/images/price/pizza.jpg'), secondIcon: "ok" },
    { title: "150000", imageSource: require('../../assets/images/price/badminton.jpg'),secondIcon:"ok" }, // No secondIcon provided
    { title: "300000", imageSource: require('../../assets/images/price/bat.webp'), secondIcon: "ok" }
  ], []);

  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Rewards" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <ImageBackground
          source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
            {games.map((game, index) => (
              <GameCard key={index} title={game.title} imageSource={game.imageSource} secondIcon={game.secondIcon} />
            ))}
          </ScrollView>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollViewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default GamesScreen;
