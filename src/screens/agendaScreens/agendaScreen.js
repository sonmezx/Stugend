import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Tooltip from '../../components/tooltip/tooltip';
import { useNavigation } from '@react-navigation/native';

LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
  ],
  monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  dayNamesShort: ['PAZ', 'PZT', 'SAL', 'ÇRŞ', 'PER', 'CUM', 'CMT'],
  today: "Bugün",
};
LocaleConfig.defaultLocale = 'tr';

const AgendaScreen = () => {
  const day = new Date();
  const navigation = useNavigation();

  const onPressedActivity = () => {
    console.log('Pressed Activity Button');
    navigation.navigate('AddActivity', {
      day: day.getDate(),
      month: day.getMonth()+1,
      year: day.getFullYear(),
      dateString: day.toISOString().slice(0, 10)
    });
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header />

        <View style={styles.wrapper}>
          <Text style={styles.title}>Etkinlik Ekle</Text>

          <Calendar firstDay={1}
          onDayPress={(day) => {
            console.log(day);
            navigation.navigate('AddActivity', {
              day: day.day,
              month: day.month,
              year: day.year,
              datestring: day.dateString
            });
          }}
            theme={{
              textDayFontFamily: 'Roboto',
              textDayHeaderFontFamily: 'Roboto',
              todayBackgroundColor: '#583175',
              todayTextColor: 'white',
              arrowColor: '#583175',
              todayButtonPosition: 'center',
            }}
            style={styles.calendarContainer}
            hideExtraDays={true}
            displayLoadingIndicator = {false}
            
          />
        </View>
            <Tooltip onPress={onPressedActivity} iconName={'plus'}/>
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
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#B39DC5'
  },
  calendarContainer:{
    borderRadius: 6,
    shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.84,
      elevation: 2,
  }
});

export default AgendaScreen;
