import React, { useEffect, useState } from "react";
import { Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";

import calendar from '../../assets/calendar.png';
import clock from '../../assets/clock.png';

const DateTimePickerAndroid = ({mode, dateTime, val}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [when, setWhen] = useState();
  const [time, setTime] = useState();

  const datab = when && format(new Date(when), mode === "date" ? 'dd-MM-yyyy' : 'HH:mm');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date, time) => {
    setWhen(date);
    dateTime(format(new Date(date), mode === "date" ? 'yyyy-MM-dd' : 'HH:mm'));
    hideDatePicker();
  };


  return (
    <TouchableOpacity onPress={showDatePicker} style={styles.container} >
      <TextInput 
        style={styles.text} 
        defaultValue={when ? datab : val} 
        editable={false} 
        placeholder={mode === "date" ? "Selecionar data" : "Selecionar hora"}>
      <DateTimePickerModal
        minimumDate={new Date()}
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour={true}
      />
      </TextInput>
      <Image style={styles.icon} source={mode === "date" ? calendar : clock}/>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({ 
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12
  },

  icon: {
    width: 20,
    height: 20,
    position: 'relative',
    right: 20
  },

  text: {
    borderBottomWidth: 1,
    borderColor: '#00AE0B',
    height: 30,
    width: "100%",
    color: 'black'
  }
})

export default DateTimePickerAndroid;