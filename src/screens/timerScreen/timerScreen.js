import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import CustomButton from '../../components/customButton/CustomButton';
import BackgroundTimer from "react-native-background-timer"
import Icon from '../../components/icon/Icon';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const TimerScreen = () => {
  const [date, setDate] = useState(new Date(1650574800000))
  const [open, setOpen] = useState();

  const [secondsLeft, setSecondsLeft] = useState();
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    if (timerOn) startTimer();
    else BackgroundTimer.stopBackgroundTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1
        else return 0
      })
    }, 1000)
  }

  useEffect(() => {
    if (secondsLeft === 0){
      BackgroundTimer.stopBackgroundTimer();
      alert('bitti')
    }
    
  }, [secondsLeft])

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60)
    let mins = Math.floor((secondsLeft / 60) % 60)
    let seconds = Math.floor(secondsLeft % 60)
    let displayHours = hours < 10 ? `0${hours}` : hours
    let displayMins = mins < 10 ? `0${mins}` : mins
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds
    return {
      displayHours,
      displayMins,
      displaySecs,
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header />
        <View style={styles.wrapper}>
          <View>
              <DatePicker
                modal
                open={open}
                date={date}
                mode={'time'}
                onConfirm={(date) => {
                  setDate(date)
                  setSecondsLeft(date.getHours()*60*60+date.getMinutes()*60)
                  setOpen(false)
                  
                }}
                onCancel={() => {
                  setOpen(false)
                }}
                
                androidVariant={'nativeAndroid'}
              />

            <View style={styles.timer}>
              <View style={styles.circleHours}>
                <Text style={styles.timeText}>{clockify().displayHours >= 0 ? clockify().displayHours : '00'}</Text>
                <Text style={styles.timerName}>Saat</Text>
              </View>
              <View style={styles.circleMinutes}>
                <Text style={styles.timeText}>{clockify().displayMins >= 0 ? clockify().displayMins : '00'}</Text>
                <Text style={styles.timerName}>Dakika</Text>
              </View>
              <View style={styles.circleSeconds}>
                <Text style={styles.timeText}>{clockify().displaySecs >= 0 ? clockify().displaySecs : '00'}</Text>
                <Text style={styles.timerName}>Saniye</Text>
              </View>
            </View>
            <View style={styles.timer}>
              {timerOn ?
                <Pressable onPress={() => setTimerOn(timerOn => !timerOn)} >
                  <Icon iconName={'pause'} />
                </Pressable>
                :
                <Pressable onPress={() => setTimerOn(timerOn => !timerOn)} >
                <Icon iconName={'play'} />
              </Pressable>
              }
            </View>
            <CustomButton text={'Zamanlayıcıyı Ayarla'} onPress={() => setOpen(true)} />
          </View>
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
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
  circleHours: {
    backgroundColor: '#3E1E54',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 100,
    height: 100
  },
  circleMinutes: {
    backgroundColor: '#5A2B7A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 100,
    height: 100
  },
  circleSeconds: {
    backgroundColor: '#6C3493',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 100,
    height: 100
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 50,
  },
  timeText: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 40,
  },
  timerName: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 14,
  }
});

export default TimerScreen;
