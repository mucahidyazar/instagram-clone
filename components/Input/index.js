/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = ({ placeholder, color, style, icon, iconStyle }) => {

  let inputFormStyle;
  let inputTextStyle;
  let inputIconStyle;
  if (icon) {
    inputFormStyle = {
      flexDirection: 'row',
      alignItems: 'center',
    };
    inputTextStyle = {
      width: '90%',
    };
    inputIconStyle = {
      width: '10%',
    };
  }

  return (
    <View style={{ ...styles.formGroup, ...inputFormStyle }}>
      <TextInput placeholder={placeholder} style={{ ...styles.textInput, ...style, ...inputTextStyle }} />
      {icon ? <Icon name={icon} style={{ ...iconStyle, ...inputIconStyle }} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  formGroup: {
    padding: 10,
    width: '100%',
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Input;