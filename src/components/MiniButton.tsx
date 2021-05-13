import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import colors from '../styles/colors';

export function MiniButton(){
  return(
    <TouchableOpacity style={styles.container} >
      <MaterialIcons name='arrow-forward-ios' size={30} color='black' />
    </TouchableOpacity>
  );
;}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.components,
    height:60,
    width:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  }
})