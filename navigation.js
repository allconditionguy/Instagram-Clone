import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewPostScreen from './screens/NewPostScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}
export const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
      <Stack.Screen
        name='NewPostScreen'
        component={NewPostScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export const SignOutStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={screenOptions}
    >      
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        name='SignupScreen'
        component={SignupScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
)