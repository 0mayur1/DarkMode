import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {

  const scheme = useColorScheme();

  const dark = {
    backgroundColor: "#fff",
    font: "#fff"
  }

  const light = {
    backgroundColor: "#000",
    font: "#000"
  }
  return (
    <View style={[
      style.mainContainer,{
        background: scheme == 'light' ? light.backgroundColor : dark.backgroundColor
      }]}>
      <Text style={[
        style.normalText,{
          color: scheme == 'light' ? light.font : dark.font
        }
        ]}>App</Text>
    </View>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex:  1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalText: {
    fontSize: 20
  }
})

export default App