import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Image,
  
} from 'react-native';


import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Menu from '../../components/menu/Menu';
import NotificationCard from '../../components/notificationCard/notificationCard';

const NotificationScreen = () => {
    
  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header back={true} />

        <View style={styles.wrapper}>
            <ScrollView>
                <NotificationCard title={'sa'} description={'Matematik Sınavı Notu 50 Olarak Girildi. Geçmek için Alınması Gereken En Düşük Not: 60'} date={'04.04.2022 20:08'} />
                <NotificationCard title={'sa'} description={'Sunum Tarihi Yaklaşıyor. Her Şeyin Hazır Mı?'} date={'04.04.2022 20:08'} />
            </ScrollView>
        </View>
      </View>
      <View style={styles.menu}>
          <Menu />
        </View>
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%'
  },
  wrapper: {
    margin: 20,
    width: '100%'
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
});

export default NotificationScreen;
