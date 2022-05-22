import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from '../icon/Icon';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Header = ({back = false, logout = false}) => {
  const navigation = useNavigation();
  const onPressedBack = () => {
    console.log('Pressed Back Button.');
    navigation.goBack(-1);
  }
  const onPressedLogo = () => {
    console.log('Pressed Logo.');
    navigation.navigate('AboutUs');
  }

  const onPressedLogout = () => {
    console.log('Pressed Logout Button.');
    AsyncStorage.clear();
    navigation.navigate('Login')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#583175'} />
        
        <View style={styles.back}>
        {back &&
        <Pressable onPress={onPressedBack} >
          <Icon iconName={'back'} />
        </Pressable>
          
         }
        </View>

        <Pressable onPress={onPressedLogo} style={styles.logoContainer}>
          <Image 
                source={require('../../../assets/images/logo.png')} 
                style={styles.logo}
            />
        </Pressable>

        {
          logout && 
          <Pressable style={styles.notificationContainer} hitSlop={{left: 20, top: 20, bottom: 20, right: 20,}} onPress={onPressedLogout}>
            <Icon iconName={'blogout'} />
          </Pressable>
        }
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:'100%',
    backgroundColor: '#583175',
    paddingBottom: 5,
    paddingRight: 10,
  },
  logo: {
    marginTop: 5,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 145, 
    height: 100,
  },
  back: {
    width: '33%',
    height: 100,
    backgroundColor: '#583175',
    justifyContent: 'center'
  },
  notificationContainer: {
    justifyContent: 'center', 
    marginHorizontal: 90,
  },

});

export default Header;
