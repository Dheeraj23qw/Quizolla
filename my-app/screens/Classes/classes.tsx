import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, StatusBar, ImageBackground,StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useRouter } from 'expo-router';
import ScreenHeader from '@/components/_screenHeader';
import { globalstyles } from '@/styles/global';
import { Classstyles } from './classesCSS';

const classesData = {
  kindergarten: ['KG 1', 'KG 2'],
  primary: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
  secondary: ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'],
  higher: ['Class 11', 'Class 12'],
  competitive: ['JEE', 'NEET', 'UPSC', 'CAT', 'GATE']
};

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
    <SafeAreaView style={globalstyles.container}>
   
      <View style={{ flex:1 ,marginTop:40,paddingVertical:10}}>
      <ScreenHeader name="Classes"/>
      </View>
     

      <View style={[globalstyles.Container2, { flex: 10 }]}>
      
          <ScrollView showsVerticalScrollIndicator={false}>
            {sections.map(({ title, data }) => (
              <View key={title} style={Classstyles.sectionContainer}>
                <Text style={Classstyles.sectionTitle}>{title}</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={Classstyles.scrollViewContent}
                >
                  {data.map((item) => (
                    <TouchableOpacity key={item} style={Classstyles.classItem}>
                      <Text style={Classstyles.classItemText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            ))}
          </ScrollView>
   
      </View>
    </SafeAreaView>
  );
});

export default Classes;
