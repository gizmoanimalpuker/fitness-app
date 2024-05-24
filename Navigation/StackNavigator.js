import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Fitness App' }} />
    <Stack.Screen name="Workout" component={WorkoutScreen} options={{ title: 'Start Workout' }} />
  </Stack.Navigator>
);

export default StackNavigator;
