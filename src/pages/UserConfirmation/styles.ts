import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.background,
    alignItems:'center',
    justifyContent:'center'
  },
  emoji:{
    fontSize:50,
    marginBottom:10
  },
  title:{
    fontFamily: fonts.heading,
    fontSize:28,
    fontWeight:'bold',
    marginBottom:10
  },
  text:{
    fontFamily: fonts.complement,
    fontSize:22,
    lineHeight:30,
    textAlign:'center',
    marginBottom:20
  }
})