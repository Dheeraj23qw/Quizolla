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
        <AntDesign name="arrowleft" size={32} color="white" style={styles.iconStyle} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{name}</Text>
    </View>
  )
}

export default ScreenHeader;


const styles = StyleSheet.create({
  header: {
    flex:1,
    backgroundColor: '#8E5DE9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: responsiveWidth(6),
    justifyContent:'flex-start',
    gap:responsiveWidth(6),
    marginTop: responsiveWidth(2)
  
},
    headerTitle: {
      color: '#fff',
      fontSize: responsiveFontSize(4),
      fontFamily: "outfit-bold",
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    iconStyle: {
      textShadowColor: 'rgba(0, 0, 0, 0.75)', 
      textShadowOffset: { width: -1, height: 2 },
      textShadowRadius: 5,
    },
})
