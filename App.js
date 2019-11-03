import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import VideoScreen from './screens/VideoScreen';

const MainNavigator = createStackNavigator({
  ListScreen: {screen: ListScreen},
  VideoScreen: {screen: VideoScreen},
   });
   
  const App = createAppContainer(createSwitchNavigator({
   // SplashScreen: {screen: SplashScreen},
   // LoginScreen: { screen: LoginScreen },
    Other: { screen: MainNavigator},
    
  }));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;