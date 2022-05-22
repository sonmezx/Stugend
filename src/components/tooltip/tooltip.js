import React from 'react';

import {
  View,
  StyleSheet,
  Pressable
} from 'react-native';
import Icon from '../icon/Icon';

const Tooltip = ({onPress, iconName}) => {

  return (
      <Pressable hitSlop={{left: 20, bottom: 20}} onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.circle}>
                <Icon iconName={iconName}/>
            </View>
        </View>
      </Pressable>
    
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row-reverse',
    width: '90%',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 60,
    backgroundColor: '#783DA5',
    alignItems: 'center',
    justifyContent: 'center'
},

});
  
export default Tooltip;
