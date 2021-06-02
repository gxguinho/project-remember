import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import {useAuth} from '../../contexts/auth';
// import { Container } from './styles';

const Home: React.FC = () => {
  const {singIn} = useAuth();
  function Sair(){
    singIn
  }
  return (
    <View>
      <Button title='teste' onPress={Sair}  />
    </View>
  )
}

export default Home;