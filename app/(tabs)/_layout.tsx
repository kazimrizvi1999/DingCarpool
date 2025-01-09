import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from './index';
// import ExploreScreen from './explore';
// 
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={IndexScreen} />
      {/* <Tab.Screen name="Explore" component={ExploreScreen} /> */}
    </Tab.Navigator>
  );
}
