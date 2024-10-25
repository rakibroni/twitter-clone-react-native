import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Tweets from "./Tweets";
import Medias from "./Medias";
import Likes from "./Likes";

const TopTab = createMaterialTopTabNavigator();

const ProfileTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "none",
        },
        tabBarIndicatorStyle: { backgroundColor: "#1DA1F2" },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#657786",
        swipeEnabled: true,
        pressOpacity: 0.5,
      }}
    >
      <TopTab.Screen name="Tweets" component={Tweets} />
      <TopTab.Screen name="Medias" component={Medias} />
      <TopTab.Screen name="Likes" component={Likes} />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1, // This ensures the tabs take up the remaining space after the ProfileDesign
  },
});

export default ProfileTabNavigation;
