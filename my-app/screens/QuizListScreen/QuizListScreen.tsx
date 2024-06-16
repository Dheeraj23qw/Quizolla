import { View } from 'react-native'
import React from 'react'
import QuizListItem from '@/components/QuizListScreen/QuizListItem'
import QuizListContent from '@/components/QuizListScreen/QuizListContent'
import ScreenHeader from '@/components/_screenHeader'
import { globalstyles } from '@/styles/global'
import { SafeAreaView } from 'react-native-safe-area-context'

const QuizListScreen = () => {
  return (
    <SafeAreaView style={globalstyles.container}>
    <ScreenHeader name="Join Quiz"/>
    <View style={[globalstyles.Container2,{flex:10}]}>
     <QuizListItem/>
     <QuizListContent/>
     </View>
    </SafeAreaView>
  )
}

export default QuizListScreen

