import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'MÓDULOS',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="car-wrench" size={24} color="black" />,
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: 'MOTORES',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="engine" size={24} color="black" />,
        }}
      />
            <Tabs.Screen
        name="explore2"
        options={{
          title: 'BRUSTO',
          tabBarIcon: ({ color }) => <Ionicons name="car-sport-sharp" size={24} color="black" />,
        }}
      />
    </Tabs>
    
    
  );
}
