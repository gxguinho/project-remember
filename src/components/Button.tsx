import React from 'react';
import {TouchableOpacity,StyleSheet,TouchableOpacityProps,Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
  title:string;
  
}

export function Button({title,...rest}:ButtonProps){
  
  return(
    <TouchableOpacity style={styles.container} {...rest}  >
      <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  );
;}
const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.components,
    height:50,
    width:"60%",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    marginBottom:20
  },
  text:{
    fontFamily: fonts.complement,
    fontSize:24,
    color: colors.white
  }
})