import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./screens/DrawerContent";

import MainTabScreen from "./screens/MainTabScreen";
//import SupportScreen from './screens/SupportScreen';
//import SettingsScreen from './screens/SettingsScreen';
//import BookmarkScreen from './screens/BookmarkScreen';

import { AuthContext } from "./components/context";

import RootStackScreen from "./screens/RootStackScreen";

//import AsyncStorage from "@react-native-community/async-storage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

    /*<NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeDrawer"
          component={MainTabScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>*/
  );
}
