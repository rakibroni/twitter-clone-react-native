import 'react-native-gesture-handler'

import { StyleSheet, Text, View, StatusBar } from 'react-native'

import Navigation from './Navigation'
import './global.css'
export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
