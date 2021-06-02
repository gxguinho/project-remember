import React from 'react';
import {NavigationContainer} from '@react-navigation/native';



import Routes from './routes/index.routes';
import {AuthProvider} from './contexts/auth';

const App: React.FC = () => (
    <NavigationContainer>
      <AuthProvider>
       <Routes/>
      </AuthProvider>
    </NavigationContainer>
)

export default App;