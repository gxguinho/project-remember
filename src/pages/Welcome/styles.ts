import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.background,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color: colors.black,
    fontFamily:fonts.heading,
    fontSize:30,
    fontWeight:'bold',
    marginBottom:10,
  },
  caption:{
    color: colors.black,
    fontFamily:fonts.complement,
    fontSize:24,
    lineHeight:30
  },
  text:{
    color: colors.black,
    fontFamily:fonts.text,
    fontSize:20,
    textAlign:'center',
    lineHeight:24,
    marginTop:10,
    marginBottom:45
  },
  image:{
    width:300,
    height:350,
  }
})