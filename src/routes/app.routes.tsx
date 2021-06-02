import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator>
    <StackRoutes.Screen name='Home' component={Home} />
  </StackRoutes.Navigator>
)

export default AppRoutes;