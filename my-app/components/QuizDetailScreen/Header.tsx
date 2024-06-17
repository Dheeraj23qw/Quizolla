import { Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {  responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { headerCSS } from './QuizDetailScreenCSS/headerCSS'
export default function Header() {
  return (
    <View style={headerCSS.container}>
      <View style={headerCSS.headerContainer}>
        <Ionicons name="school" size={responsiveScreenFontSize(5)} color="#BEA1FE" />
        <Text style={headerCSS.headerText}>General Knowledge Quiz</Text>
      </View>
      <View style={headerCSS.subTextContainer}>
        <Ionicons name="person" size={responsiveScreenFontSize(2.5)} color="black" />
        <Text style={headerCSS.subText}>created by Dheeraj@123</Text>
      </View>
      <View style={headerCSS.subTextContainer}>
        <Ionicons name="trophy" size={responsiveScreenFontSize(2.5)} color="black" />
        <Text style={headerCSS.subText}>maximum Prize amount - $10</Text>
      </View>
      <View style={headerCSS.subTextContainer}>
        <Ionicons name="timer" size={responsiveScreenFontSize(2.5)} color="black" />
        <Text style={headerCSS.subText}>maximum Time per question - 30 sec</Text>
      </View>
    </View>
  )
}

