import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true,
        headerTitleContainerStyle: {
          paddingTop: 25,
        },
        headerRightContainerStyle: {
          paddingTop: 25,
        },
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          paddingBottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link href="/search" asChild>
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
            </View>
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link href="/search" asChild>
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
            </View>
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link href="/search" asChild>
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
            </View>
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Link href="../search" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <AntDesign name="search1" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
              <Link href="../settings" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Feather name="settings" size={24} color="black" style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}/>
                  )}
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="details/[id]"
        options={{
          title: 'Detail zápasu',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome name="soccer-ball-o" size={24} color={color} />,
          lazy: true,
          tabBarButton: () => null,
        }}
      />
    </Tabs>
    </SafeAreaProvider>
  );
}