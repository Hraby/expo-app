import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 50,
          backgroundColor: "#0053A1"
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Můj fotbal',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome name="soccer-ball-o" size={24} color={color} />,
          headerRight: () => (
            <div style={{display: "flex"}}>
              <Link href="/s?" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign name="search1" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Feather name="settings" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </div>
          ),
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Zápasy',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="clockcircleo" size={24} color={color} />,
          headerRight: () => (
            <div style={{display: "flex"}}>
              <Link href="/s?" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign name="search1" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Feather name="settings" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </div>
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'Oblíbené',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />,
          headerRight: () => (
            <div style={{display: "flex"}}>
              <Link href="/s?" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign name="search1" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Feather name="settings" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </div>
          ),
        }}
      />
      <Tabs.Screen
        name="competition"
        options={{
          title: 'Seznam soutěží',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="Trophy" size={24} color={color} />,
          headerRight: () => (
            <div style={{display: "flex"}}>
              <Link href="/s?" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign name="search1" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
              <Link href="/settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Feather name="settings" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </div>
          ),
        }}
      />
    </Tabs>
  );
}
