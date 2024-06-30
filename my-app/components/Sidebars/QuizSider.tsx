import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

type Lifeline = {
  icon: string;
  disabled: boolean;
};

export default function QuizSidebar() {
  const [selectedPointIndex, setSelectedPointIndex] = useState<number | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  const points: number[] = [1000000, 500000, 100000, 50000, 25000, 10000, 5000, 2500, 1000, 500, 100, 10];

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  if (!sidebarVisible) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} >
      <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
        <MaterialIcons name="close" size={32} color="black" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.pointsContainer}>
            {points.map((point, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.pointButton, { backgroundColor: selectedPointIndex === index ? '#FFD700' : '#FFFFFF' }]}
                onPress={() => setSelectedPointIndex(index)}
              >
                <Text style={[styles.pointText, { fontSize: responsiveFontSize(2) }]}>
                  {point}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "80%",
    backgroundColor: '#ffffff',
    zIndex: 1000,
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: responsiveHeight(3.2), // Adjust the top position to make the close button more visible
    right: responsiveWidth(2), // Adjust the right position to move it slightly to the left
    zIndex: 1001, // Ensure the close button is above other elements
    padding: 15, // Increase padding for better tapability
  },
  content: {
    justifyContent: 'space-between',
  },
  pointsContainer: {
    paddingBottom: responsiveHeight(1),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pointButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(2),
    marginBottom: responsiveHeight(1),
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pointText: {
    color: '#333',
    fontWeight: 'bold',
  },
});
