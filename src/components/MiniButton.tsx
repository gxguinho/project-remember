import React from 'react';
import {TouchableOpacity,StyleSheet,TouchableOpacityProps} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';

interface buttonProps extends TouchableOpacityProps{
 nextScreen:string;
}

export function MiniButton({nextScreen}:buttonProps){
  const navigation  = useNavigation()
  return(
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate(nextScreen)}  >
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