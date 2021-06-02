import React,{useState} from 'react';
import { View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useRoute} from '@react-navigation/core'

import { styles } from './styles';
import {Button} from '../../components/Button';

import {useAuth} from '../../contexts/auth';


interface Name{
  name:string;
}

const UserConfirmation: React.FC = () => {
  const navigation  = useNavigation()
  const routes = useRoute();
  const { name } = routes.params as Name; 
 
  const {singIn} = useAuth();

  function Entrar(name:string){
    singIn(name)
  }
  return (
    <View style={styles.container} >
      <Text style={styles.emoji} >😁</Text>
      <Text style={styles.title} >Parabéns {name} </Text>
      <Text style={styles.text} >Agora vamos{'\n'}
       organizar suas tarefas diárias!</Text>
       <Button title='Continuar' onPress={()=>{Entrar(name)}} />
    </View>
  );
};

export default UserConfirmation;