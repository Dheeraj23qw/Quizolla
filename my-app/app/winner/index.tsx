import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Winner from '@/screens/WinnerScreen/Winner'
export default function WinnerScreen() {
    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
<>
<Winner/>
</>
  )
}