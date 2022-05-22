import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';
import Icon from '../icon/Icon';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Menu = () => {
  const navigation = useNavigation();

  const onPressedHome = () => {
    console.log('Pressed Home Button.');
    navigation.navigate('Home');
  }
  
  const onPressedProfile = () => {
    console.log('Pressed Profile Button.');
    navigation.navigate('Profile');
  }
  
  const onPressedLessons = () => {
    console.log('Pressed Lessons Button.');
    navigation.navigate('Lessons');
  }
  const onPressedTimer = () => {
    console.log('Pressed Timer Button.');
    navigation.navigate('Timer');
  }
  const onPressedAgenda = () => {
    console.log('Pressed Agenda Button.');
    navigation.navigate('Agenda');
  }

  return (
      <View style={styles.container}>
        
        <Pressable hitSlop={{left: 20, top: 20}} onPress={onPressedAgenda} style={styles.indicator}>
          <View style={styles.menuBefore}/>
          <View style={styles.menuAfter}/>
          <Icon iconName={'calendar'} />
        </Pressable>
        <View style={styles.menuContainer}>

          <View style={styles.iconContainer}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={onPressedHome} style={styles.icon}>
              <Icon iconName={'home'} />
            </Pressable>

            <Pressable hitSlop={{left: 20, top: 20}} onPress={onPressedTimer} style={[styles.icon, styles.timerContainer]}>
              <Icon iconName={'timer'} />
            </Pressable>

            <Pressable hitSlop={{left: 20, top: 20}} onPress={onPressedLessons} style={styles.examContainer}>
              <Icon iconName={'openbook'} />
            </Pressable>

            <Pressable hitSlop={{left: 20, top: 20}} onPress={onPressedProfile} style={styles.icon}>
              <Icon iconName={'user'} />
            </Pressable>
          </View>

        </View>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column',
  },
  menuContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0, 
    width: '100%', 
    height: 80, 
    zIndex: 1,
    borderRadius: 10,
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingHorizontal: 15, 
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
  },
  menuBefore:{
    content: '',
    position: 'absolute',
    width: 20,
    height: 20,
    top: '50%',
    left: -22,
    backgroundColor: 'transparent',
    borderTopRightRadius: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#f3f3f3',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    transform: [
      {rotateX: '15deg'}
    ]
    
  },
  menuAfter:{
    content: '',
    position: 'absolute',
    width: 20,
    height: 20,
    top: '50%',
    left: 68,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 20,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#f3f3f3',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    transform: [
      {rotateX: '25deg'}
    ]
  },
  indicator: {
    position: 'absolute', 
    padding: 5, 
    alignSelf: 'center', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#583175', 
    width: 85, 
    height: 85, 
    borderRadius: 50, 
    borderWidth: 10,
    borderStyle: 'solid',
    borderColor: '#f3f3f3',
    bottom: 40, 
    zIndex: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    flexDirection: 'row',
    flex: 1,
  },
  icon: {
    marginLeft: 20,
    flexDirection: 'column',
    flex: 1,
  },
  timerContainer: {
    marginLeft: 25,
  },
  examContainer: {
    marginLeft: 90,
    marginRight: 20,
    flexDirection: 'column',
    flex: 0.7,
  },

});

export default Menu;
