import React from 'react';

import {
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

const CustomButton = ({onPress, text, type = "primary", text_type = "primary"}) => {

  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${text_type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
    },
    container_primary: {
        backgroundColor: '#412058',
    },
    container_secondary: {
        backgroundColor: 'white',
    },
    container_transparent: {
        backgroundColor: 'transparent',
    },
    text: {
        fontWeight: 'bold'
    },
    text_primary: {
        color: 'white',
        fontFamily: 'Roboto'
    },
    text_secondary: {
        color: '#000',
        fontFamily: 'Roboto',
    }
});

export default CustomButton;
