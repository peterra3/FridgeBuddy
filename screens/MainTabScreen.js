import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import FridgeScreen from "./FridgeScreen";
import MealsScreen from "./MealScreen";
import ItemSearchBarScreen from "./ItemSearchBarScreen";
//import ExploreScreen from "./ExploreScreen";
//import ProfileScreen from "./ProfileScreen";

const FridgeStack = createStackNavigator();
const MealsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: "#DC143C" }}
  >
    <Tab.Screen
      name="Home"
      component={FridgeStackScreen}
      options={{
        tabBarLabel: "Fridge",
        tabBarColor: "#DC143C",
        tabBarIcon: ({ color }) => (
          <Icon2 name="fridge-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Meals"
      component={MealsStackScreen}
      options={{
        tabBarLabel: "Meals",
        tabBarColor: "#DC143C",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-fast-food-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeScreen;

const FridgeStackScreen = ({ navigation }) => (
  <FridgeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#DC143C",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <FridgeStack.Screen
      name="Fridge"
      component={FridgeScreen}
      options={{
        title: "Fridge Items",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#DC143C"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button
            name="add"
            size={30}
            backgroundColor="#DC143C"
            onPress={() => {
              navigation.navigate("Search For Food Items");
            }}
          ></Icon.Button>
        ),
      }}
    />
    <FridgeStack.Screen
      name="Search For Food Items"
      component={ItemSearchBarScreen}
    />
  </FridgeStack.Navigator>
);

const MealsStackScreen = ({ navigation }) => (
  <MealsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#DC143C",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MealsStack.Screen
      name="Meals"
      component={MealsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#DC143C"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </MealsStack.Navigator>
);
