import ScreenHeader from '@/components/_screenHeader';
import { globalstyles } from '@/styles/global';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GamesScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Games" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
      <ImageBackground
          source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}

          resizeMode="cover"
        >
      <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
      
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/images/chorsipahi/cover.png')}
            style={styles.cardImage}
            resizeMode="cover"
          >
            <View style={styles.cardOverlay} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Game 1</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <ImageBackground
             source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          >
            <View style={styles.cardOverlay} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Game 2</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.card}>
          <ImageBackground
             source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}
            style={styles.cardImage}
            resizeMode="cover"
          >
            <View style={styles.cardOverlay} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Game 3</Text>
            </View>
          </ImageBackground>
        </View>
        
      </ScrollView>
      </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 8,
  },
  cardImage: {
    flex: 1,
    justifyContent: 'center',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  },
});
