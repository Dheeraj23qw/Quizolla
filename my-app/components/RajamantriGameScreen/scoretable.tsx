// ScoreTable.tsx
import React from "react";
import { Text, View } from "react-native";
import { styles } from "@/screens/RajaMantriGameScreen/styles";

interface ScoreTableProps {
  playerNames: string[];
  playerScores: Array<{ playerName: string; scores: number[] }>;
}

const ScoreTable: React.FC<ScoreTableProps> = React.memo(({ playerNames, playerScores }) => {
  return (
    <View style={styles.table}>
      {/* Header row */}
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text style={styles.cellText}>Rounds</Text>
        </View>
        {playerNames.map((name, index) => (
          <View key={index} style={styles.tableCell}>
            <Text style={styles.cellText}>{name}</Text>
          </View>
        ))}
      </View>

      {/* Data rows for rounds and scores */}
      {Array.from({ length: 10 }, (_, rowIndex) => (
        <View key={rowIndex} style={styles.tableRow}>
          <View style={styles.tableCell}>
            <Text style={styles.cellText}>Round {rowIndex + 1}</Text>
          </View>
          {playerScores.map((player, index) => (
            <View key={index} style={styles.tableCell}>
              <Text style={styles.cellText}>{player.scores[rowIndex]}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
});

export default ScoreTable;
