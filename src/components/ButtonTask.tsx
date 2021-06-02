import React from 'react';
import {TouchableOpacity,Text,StyleSheet,Image,View} from 'react-native';

import logo from '../assets/tasks/beber-agua.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
 
export function ButtonTask(){
  return(
    <TouchableOpacity style={styles.container} >
      <View style={styles.CircleButton} > 
        <Image source={logo} width={100} height={100} />
      </View>
      <Text style={styles.text} >Escovar os dentes</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    
  },
  CircleButton:{
    backgroundColor: colors.components,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:70,
    paddingVertical:10,
    height:140,
    width:140

  },
  text:{
    fontFamily: fonts.text,
    textAlign:'center',
    fontSize:18,
  }
})