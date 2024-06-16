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
      name="history"
      options={{
        title: 'History',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="bookmark"
      options={{
        title: 'Bookmark',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'bookmark' : 'bookmark-outline'} color={color} />
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
