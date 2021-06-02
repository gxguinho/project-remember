import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import DayConfirmation from '../pages/DayConfirmation';
import Name from '../pages/Nome';
import NightConfirmation from '../pages/NightConfirmation';
import UserConfirmation from '../pages/UserConfirmation';
import MorningTasks from '../pages/MorningTasks';
import NightTasks from '../pages/NightTasks';


const StackRoutes = createStackNavigator();
const appStack: React.FC = () => (
  <StackRoutes.Navigator headerMode='none' >
    <StackRoutes.Screen name='Welcome' component={Welcome} />
    <StackRoutes.Screen name='DayConfirmation' component={DayConfirmation} />
    <StackRoutes.Screen name='NightConfirmation' component={NightConfirmation} />
    <StackRoutes.Screen name='Name' component={Name} />
    <StackRoutes.Screen name='MorningTasks' component={MorningTasks} />
    <StackRoutes.Screen name='NightTasks' component={NightTasks} />
    <StackRoutes.Screen name='UserConfirmation' component={UserConfirmation} />
  </StackRoutes.Navigator>
)

export default appStack;