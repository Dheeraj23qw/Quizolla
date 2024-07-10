import ScreenHeader from '@/components/_screenHeader';
import { globalstyles } from '@/styles/global';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RajaMantriQuizScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <ScreenHeader name="Quiz Time" />
      <View style={[globalstyles.Container2, { flex: 10 }]}>
        <ImageBackground
          source={require('../../assets/images/chorsipahi/chorpolicequiz.jpg')}
          style={styles.imageBackground}
          resizeMode="cover"
        >
         
         
          <View style={styles.quizContainer}>
           
            <View style={styles.questionBox}>
              <Text style={styles.question}>Lado, Can you Guess your Score?</Text>
            </View>
            <TouchableOpacity style={styles.option}>
             
              <Text style={styles.optionText}>3000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
         
              <Text style={styles.optionText}>4800</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
         
              <Text style={styles.optionText}>5980</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },

  quizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  questionBox: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#87CEEB',
    shadowColor: '#4682B4',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  question: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#B22222',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderColor: '#87CEEB',
    borderWidth: 3,
  },
 
  optionText: {
    fontSize: 28,
    color: '#333',
    fontFamily:"myfont-bold"
  },
});
