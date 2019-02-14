import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SalesScreen from '../screens/SalesScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import LocationScreen from '../screens/LocationScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const SalesStack = createStackNavigator({
  Sales: SalesScreen,
});

SalesStack.navigationOptions = {
  tabBarLabel: 'Sales',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'}
    />
  ),
};

const LocationStack = createStackNavigator({
  Sales: LocationScreen,
});

LocationStack.navigationOptions = {
  tabBarLabel: 'Location',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};


const EmergencyStack = createStackNavigator({
  Emergency: EmergencyScreen,
});

EmergencyStack.navigationOptions = {
  tabBarLabel: 'Emergency',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-thunderstorm' : 'md-thunderstorm'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SalesStack,
  EmergencyStack,
  LocationStack,
});
