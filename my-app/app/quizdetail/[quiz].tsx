import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import { globalstyles } from "../../styles/global";
import ScreenHeader from "@/components/_screenHeader";

export default function QuizDetail() {
    const navigation = useNavigation();
    const params = useLocalSearchParams(); 
    const name: string = params.name as string;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView style={globalstyles.container}>
            <ScreenHeader name = {name}  />
            <View style={[globalstyles.Container2, { flex: 10 }]}>
            </View>
        </SafeAreaView>
    );
}
