import React from 'react';
import {useFonts,Jost_700Bold,Jost_500Medium,Jost_400Regular} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar'

import DayConfirmation from './src/pages/Nome';

export default function App(){
  const [fontsLoaded] = useFonts({Jost_700Bold,Jost_500Medium,Jost_400Regular})
  if(!fontsLoaded){
    return <AppLoading/>
  }
    
  return (
    <>
    <StatusBar backgroundColor='#43008A' style='light' translucent={true} />
    <DayConfirmation/>
    </>
  );
};