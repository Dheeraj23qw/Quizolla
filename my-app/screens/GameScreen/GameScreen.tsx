import React, { useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '@/components/_screenHeader';
import { globalstyles } from '@/styles/global';
import GameCard from './gameCard';
import { useRouter } from 'expo-router';
const GamesScreen = () => {
  const games = useMemo(() => [
    { title: "Game 1", imageSource: require('../../assets/images/chorsipahi/cover.png') },
    { title: "Game 2", imageSource: require('../../assets/images/chorsipahi/chorpolicequiz.jpg') },
    { title: "Game 3", imageSource: require('../../assets/images/chorsipahi/chorpolicequiz.jpg') }
  ], []);
  
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Games" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <ImageBackground
          source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
            {games.map((game, index) => (
              <GameCard key={index} title={game.title} imageSource={game.imageSource}  />
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
