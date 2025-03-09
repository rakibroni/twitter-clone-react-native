import 'react-native-gesture-handler'

import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import './global.css'
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
