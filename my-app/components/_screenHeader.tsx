import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';

interface ScreenHeaderProps {
  name: string;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ name }) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <AntDesign name="arrowleft" size={29} color="white" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{name}</Text>
    </View>
  )
}

export default ScreenHeader;


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
        fontSize: responsiveFontSize(3),
        color: 'white',
        fontFamily:'outfit-bold',
    }
})
