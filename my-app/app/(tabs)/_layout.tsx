import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        headerShown: false,
      }}
    >
     <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="games"
      options={{
        title: 'Games',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'game-controller-sharp' : 'game-controller-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="rewards"
      options={{
        title: 'Rewards',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
        ),
      }}
    />
    </Tabs>
  );
}
