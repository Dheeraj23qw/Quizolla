import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalstyles } from '@/styles/global';
import ScreenHeader from '@/components/_screenHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ChorPoliceResultProps {
  player: { name: string; playerId: string; scores: number[] }; // Replace `any` with the actual type if known
  score: string | undefined;
}

const ChorPoliceResult: React.FC<ChorPoliceResultProps> = ({ player, score }) => {

console.log(player)
console.log(score)

  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Game Result" showBackButton = {false}/>
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <View style={styles.content}>
          <Text>Selected Player: {player.name}</Text>
          <Text>Player ID: {player.playerId}</Text>
          <Text>Player Scores: {player.scores.join(', ')}</Text>
          <Text>Selected Score: {score}</Text>
          {/* Additional content based on selectedPlayer and selectedScore */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ChorPoliceResult;
