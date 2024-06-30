import React from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { styles } from './classesCSS';
import { useRouter } from 'expo-router';

const classesData = {
  kindergarten: ['KG 1', 'KG 2'],
  primary: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
  secondary: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
  higher: ['Class 11', 'Class 12'],
  competitive: ['JEE', 'NEET', 'UPSC', 'CAT', 'GATE']
};

type RenderClassItemProps = {
  item: string; 
};

const renderClassItem = ({ item }: RenderClassItemProps) => (
  <TouchableOpacity style={styles.classItem} onPress={() => console.log(`${item} pressed`)}>
    <Text>{item}</Text>
  </TouchableOpacity>
);

export default function Classes() {
  const router =useRouter()
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar */}
      <StatusBar
        backgroundColor="#BEA1FE"
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back arrow */}
        <TouchableOpacity  onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* Kindergarten Classes */}
        <Text style={styles.sectionTitle}>Kindergarten Classes</Text>
        <FlatList
          horizontal
          data={classesData.kindergarten}
          renderItem={renderClassItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />

        {/* Primary School Classes */}
        <Text style={styles.sectionTitle}>Primary School Classes</Text>
        <FlatList
          horizontal
          data={classesData.primary}
          renderItem={renderClassItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />

        {/* Secondary School Classes */}
        <Text style={styles.sectionTitle}>Secondary School Classes</Text>
        <FlatList
          horizontal
          data={classesData.secondary}
          renderItem={renderClassItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />

        {/* Higher School Classes */}
        <Text style={styles.sectionTitle}>Higher School Classes</Text>
        <FlatList
          horizontal
          data={classesData.higher}
          renderItem={renderClassItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />

        {/* Competitive Exams */}
        <Text style={styles.sectionTitle}>Competitive Exams</Text>
        <FlatList
          horizontal
          data={classesData.competitive}
          renderItem={renderClassItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
