import { View, Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import Classes from '@/screens/Classes/classes'
import { useNavigation } from 'expo-router';

export default function ClassRoom() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
<>
<Classes/>
</>
  )
}