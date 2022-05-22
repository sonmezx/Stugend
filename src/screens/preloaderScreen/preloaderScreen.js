import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PreloaderScreen = () => {
const navigation = useNavigation();
var value, collect;
  const getData = async () => {
    
    try {
      value = await AsyncStorage.getItem('@token')
      if(value !== null){
        return value
      }
    } catch(e) {
      //console.log(e);
    }
    //console.log(collect)
  }
useEffect(() => {
 getData().then( values => {
   collect = values
   setTimeout(() => {
    if(collect == null){
      navigation.navigate('Login');
    }
    else{
      navigation.navigate('Home')
    }
  }, 1500);
 })
  
}, [])

  return (
    <View>
        <ImageBackground 
            source={require('../../../assets/images/bg.png')}
            style={styles.bg}
        >

        <StatusBar 
          barStyle='light-content'
          animated={true}
          backgroundColor="#3E1E54"
        />

    <View style={styles.logoAlign}>
        <Image 
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
        />

        <Text style={styles.textStyle}>STUGEND</Text>
    </View>
      
    </ImageBackground>

    </View>
    
  );
};

const styles = StyleSheet.create({
  bg: {
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  logo: {
    marginTop: '15%',
    width: '90%',
    height: '55%',
  },
  logoAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
      color: 'white',
      fontSize: 32,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
  },
});

export default PreloaderScreen;
