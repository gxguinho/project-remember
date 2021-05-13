import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background,
    justifyContent:'center', 
    alignItems:'center'
  },
  emoji:{
    fontSize:50,
    marginBottom:10,
  },
  title:{
    fontFamily:fonts.heading,
    fontSize:28,
    fontWeight:'bold',
    marginBottom:10,
    color: colors.white

  },
  input:{
    borderBottomWidth:2.5,
    fontFamily: fonts.complement,
    borderColor: colors.white,
    width:'65%',
    fontSize:18,
    marginTop:5,
    marginBottom:30,
    textAlign:'center',
    color: colors.white,
    borderRadius:20
  }
})