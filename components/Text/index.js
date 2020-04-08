/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const TextComponent = ({ name, type, style, size, color, children }) => {

  let textStyle;
  if (type === 'light') {
    textStyle = {
      opacity: 0.5,
    };
  } else if (type === 'dark') {
    textStyle = {
      fontWeight: 'bold',
    };
  }

  return (

    <Text
      style={{
        ...styles.text,
        ...textStyle,
        ...style,
        fontSize: size,
        color: color,
      }}>
      {name} {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {

  },
});

export default TextComponent;