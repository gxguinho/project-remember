import React from 'react';
import { View,Text,FlatList } from 'react-native';

import { styles } from './styles';

import {MiniButton} from '../../components/MiniButton';
import {ButtonTask} from '../../components/ButtonTask';

const MorningTasks: React.FC = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >Qual sua atividade{'\n'}padrão pela{'\n'}manhã?</Text>
      <View style={styles.TaskList} >
        <ButtonTask/>
        <ButtonTask/>
        <ButtonTask/>
      </View>
     
      <MiniButton nextScreen='NightTasks' />
    </View>
  );
};

export default MorningTasks;