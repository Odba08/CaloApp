import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StackNavigate,CaloriesNavigator,LoginNavigator,} from "./StackNavigate";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Inicio") {
              iconName = "home";
            } else if (route.name === "Calorias") {
              iconName = "flame";
            } else if (route.name === "Usuario") {
              iconName = "person-circle";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "midnightblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Inicio" component={StackNavigate} />
        <Tab.Screen name="Calorias" component={CaloriesNavigator} />
        <Tab.Screen name="Usuario" component={LoginNavigator} />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
