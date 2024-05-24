//navigation/DrawerNatigation

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SummaryScreen from './screens/SummaryScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="Summary" component={SummaryScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;

