import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: colors.background,
  justifyContent:'center',
  alignItems:'center'
},
content:{
  flex:1,
  width:'100%',
  alignItems:'center',
  justifyContent:'flex-end',
  marginBottom:20,
},
image:{
  position:'absolute'
},
title:{
  fontFamily: fonts.heading,
  fontSize:30,
  fontWeight:'bold',
  color: colors.white
},
picker:{
  backgroundColor: colors.components,
  borderRadius:20,
  height:50,
  justifyContent:'center',
  alignItems:'center',
  width:'60%',
  marginBottom:30,
  marginTop:40
},
pickerText:{
  fontFamily: fonts.complement,
  fontSize:24,
  color: colors.white,
 

}
});