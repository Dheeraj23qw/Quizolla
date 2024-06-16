import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useRouter } from 'expo-router';

interface ScreenHeaderProps {
  name: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ name }) => {
  const router =useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()} >
        <AntDesign name="arrowleft" size={29} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{name}</Text>
    </View>
  )
}

export default ScreenHeader

const styles = StyleSheet.create({
  header: {
    flex:1,
    backgroundColor: '#BEA1FE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(6),
    justifyContent:'flex-start',
    gap:responsiveWidth(6),
  
},
    headerTitle: {
        fontSize: responsiveFontSize(2.95),
        fontWeight: 'bold',
        color: 'white',
        fontFamily:'outfit-bold',
    }
})
