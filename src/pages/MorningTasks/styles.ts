import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.background,
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  },
  TaskList:{
    paddingBottom:15,
  },
  text:{
    paddingTop:40,
    fontFamily: fonts.heading,
    textAlign:'center',
    fontSize:26,
  }
})