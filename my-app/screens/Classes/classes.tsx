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
  <TouchableOpacity style={styles.classItem}>
    <Text>{item}</Text>
  </TouchableOpacity>
);

const Classes = React.memo(() => {
  const router = useRouter();

  // Array of sections to render
  const sections = [
    { title: 'Kindergarten Classes', data: classesData.kindergarten },
    { title: 'Primary School Classes', data: classesData.primary },
    { title: 'Secondary School Classes', data: classesData.secondary },
    { title: 'Higher School Classes', data: classesData.higher },
    { title: 'Competitive Exams', data: classesData.competitive },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar */}
      <StatusBar
        backgroundColor="#BEA1FE"
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back arrow */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        {/* Render each section */}
        {sections.map(({ title, data }) => (
          <View key={title}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <FlatList
              horizontal
              data={data}
              renderItem={renderClassItem}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              style={styles.flatList}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
});

export default Classes;
