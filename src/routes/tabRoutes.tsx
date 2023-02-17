import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import New from '../pages/new';
import Top from '../pages/top';
import Hot from '../pages/hot';
import Popular from '../pages/popular';
const Tab = createMaterialTopTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#BEBEBE',
        tabBarStyle: {
          backgroundColor: '#5296dd',
        },
        tabBarLabelStyle: {
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          borderBottomColor: '#FFF',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="Hot" component={Hot} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
