import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Button() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Start  Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily:"outfit-bold"
  },
});
