import React from 'react';
import { View,Text, Image,StyleSheet } from 'react-native';

import {SvgFromUri} from 'react-native-svg'

import Logo from '../../assets/logo.svg';
import {MiniButton} from '../../components/MiniButton';

import {styles} from './styles';

const Welcome: React.FC = () => {
  return(
    <View style={styles.container} >
      <View style={{alignItems:'flex-start'}}> 
        <Text style={styles.title}>Bem Vindo ao Remember</Text>
        <Text style={styles.caption}>Não esqueça mais das{'\n'}
              suas tarefas diáras.</Text>
      </View>
      <Image source={Logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.text}>Remember irá te auxiliar em{'\n'}
            suas tarefas diáras... Te lembrando delas. 😍</Text>
      <MiniButton/>
    </View>
  );
};

export default Welcome;