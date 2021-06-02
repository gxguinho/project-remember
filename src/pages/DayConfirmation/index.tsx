import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,Platform } from 'react-native';
import DateTimePicker,{Event} from '@react-native-community/datetimepicker';
import {format} from 'date-fns'

import { styles } from './styles';
import {Button} from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

import backgroundDay from '../../assets/backgroundDay1.png';

const DayConfirmation: React.FC = () => {
  const navigation  = useNavigation()
  const [selectedDateTime, setSelectedDateTime ] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')
  
  function handleDataPicker(){

  }
  function handleOpenDatePickForAndroid(){
    setShowDatePicker(oldState => !oldState)
  }
  return(
    <View style={styles.container} >
      <Image source={backgroundDay} style={styles.ballon}/>
      <View style={styles.content}>
        <Text style={styles.title} >Qual horário voce acorda?</Text>
        {
          showDatePicker && (
            <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display='spinner'
            onChange={()=>{}}
          />
          )}
          {
          Platform.OS === 'android' && (
            <TouchableOpacity style={styles.picker} onPress={handleOpenDatePickForAndroid} >
              <Text style={styles.pickerText} > {`Mudar ${format(selectedDateTime,'HH:mm')}`} </Text>
            </TouchableOpacity>
          )     
          }
          
    
        <Button title='Confirmar'  onPress={()=>navigation.navigate("NightConfirmation")}/>
      </View>
    </View>
  );
};
export default DayConfirmation;