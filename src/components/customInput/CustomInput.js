import React from 'react';

import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import Icon from '../icon/Icon';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, iconName, opacity, textColor, multilineCount}) => {

  return (
    <View style={[styles.container, styles[`container_${opacity}`]]}>
      {
        iconName &&
          <View style={styles.iconStyle}>
            <Icon iconName={iconName} />
          </View>
          }
        
        
      {multilineCount ? 
      
      (<TextInput style={[styles.input, styles[`input_${textColor}`]]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry = {secureTextEntry}
          placeholderTextColor = {textColor}
          multiline
          numberOfLines={multilineCount}

        />) 
        :
        (
        <TextInput style={[styles.input, styles[`input_${textColor}`]]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry = {secureTextEntry}
          placeholderTextColor = {textColor}

        />
        )}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'rgba(50, 151, 211, .25)',
    borderWidth: .2,
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_opacity: {
    opacity: 0.4,
  },
  input: {
    flex: 1,
    paddingLeft: 15,
  },
  input_white: {
    color: 'white',
  },
  iconStyle: {
    paddingLeft: 5,
  },
  
});

export default CustomInput;
