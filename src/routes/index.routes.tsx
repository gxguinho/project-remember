import React from 'react';
import { View } from 'react-native';

import AppRoutes from '../routes/app.routes';
import AuthRoutes from '../routes/auth.routes';

import {useAuth} from '../contexts/auth';

const Routes: React.FC = () => {
  const {signed} = useAuth();
  return(
    signed? <AppRoutes/> : <AuthRoutes/>
  )
}

export default Routes;