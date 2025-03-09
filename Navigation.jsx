import React from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Image, Pressable, useColorScheme, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Marketplace from './screens/tabScreens/Marketplace'
import Communities from './screens/tabScreens/Communities'
import Notifications from './screens/tabScreens/Notifications'
import Cart from './screens/tabScreens/Cart'
import Feed from './screens/tabScreens/Feed'
import TweetDetailsScreen from './screens/homeStack/TweetDetailsScreen'
import Following from './screens/tabScreens/Following'
import 'react-native-gesture-handler'
import CustomDrawerContent from './components/CustomDrawerContent'
import Tweets from './screens/profile/Tweets'
import Medias from './screens/profile/Medias'
import Likes from './screens/profile/Likes'
import ProfileTabNavigation from './screens/profile/ProfileTabNavigation'
import Profile from './screens/profile/Profile'
import TwitterProfile from './screens/profile/TwitterProfile'
import ProfileScreen from './screens/tabScreens/ProfileScreen'
import MyProfile from './screens/profile/MyProfile'

export default function Navigation() {
  const colorScheme = useColorScheme()

  // Stack, Tab, Drawer, and Top Tab Navigators
  const Stack = createNativeStackNavigator()
  const BottomTab = createBottomTabNavigator()
  const Drawer = createDrawerNavigator()
  const TopTab = createMaterialTopTabNavigator()

  // HomeStackNavigator - Contains Bottom Tabs
  const HomeStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  )

  // BottomTabNavigator - Contains Home (with Top Tabs), Search, Communities, Notifications, Chatbox
  const BottomTabNavigator = ({ navigation }) => (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Marketplace':
              iconName = focused ? 'storefront' : 'storefront-outline'
              break
            case 'Communities':
              iconName = focused ? 'people' : 'people-outline'
              break
            case 'Notifications':
              iconName = focused ? 'notifications' : 'notifications-outline'
              break
            case 'Cart':
              iconName = focused ? 'cart' : 'cart-outline'
              break
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerShown: true,
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={TopTabNavigation}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require('./assets/profile-pic.png')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen name="Marketplace" component={Marketplace} />
      <BottomTab.Screen name="Communities" component={Communities} />
      <BottomTab.Screen name="Notifications" component={Notifications} />
      <BottomTab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 3 }} />
    </BottomTab.Navigator>
  )

  // DrawerNavigator - Contains the Home Stack and additional screens
  const DrawerNavigator = () => (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
      <Drawer.Screen name="My profile" component={MyProfile} />
    </Drawer.Navigator>
  )

  // TopTabNavigation - Contains "For You" and "Following" tabs
  const TopTabNavigation = () => (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'none',
          textAlign: 'center',
        },
        tabBarStyle: {
          justifyContent: 'center', // Centers the tab items horizontally
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarIndicatorStyle: { backgroundColor: '#1DA1F2' },
        headerShown: false,
      }}
    >
      <TopTab.Screen name="For You" component={Feed} />
      <TopTab.Screen name="Following" component={Following} />
    </TopTab.Navigator>
  )

  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
