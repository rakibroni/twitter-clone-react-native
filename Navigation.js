import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./screens/tabScreens/Home";
import { useColorScheme } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Search from "./screens/tabScreens/Search";
import Communities from "./screens/tabScreens/Communities";
import Notifications from "./screens/tabScreens/Notifications";
import Chatbox from "./screens/tabScreens/Chatbox";
function Navigation() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const TopTab = createMaterialTopTabNavigator();

  // Example Bottom Tab Navigator (can be replaced with Stack, Drawer, or Top Tabs)
  const BottomTabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Communities") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Chatbox") {
            iconName = focused ? "chatbox" : "chatbox-outline";
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Communities" component={Communities} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Chatbox" component={Chatbox} />
    </Tab.Navigator>
  );
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
