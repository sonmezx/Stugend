import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Keyboard
} from 'react-native';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import DatePicker from 'react-native-date-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomInput from '../../components/customInput/CustomInput';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/customButton/CustomButton';
import axios from 'axios';

const AddActivityScreen = () => {
  const route = useRoute();
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [selectedRepeat, setSelectedRepeat] = useState();
  const [title, setTitle] = useState();

  const navigation = useNavigation();
  const [keyboardStatus, setKeyboardStatus] = useState(true);
  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardStatus(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  
  const day = route.params.day;
  const month = route.params.month;
  const year = route.params.year;
  const datestring = route.params.datestring;

  const apiURL = 'http://sonmez.tech/';

  const onPressedAddActivity = () => {
    axios.post(`${apiURL}?activity=addActivity`, {
      user_id: 1,
      title: title,
      date: datestring,
      repeats: selectedRepeat != null ? selectedRepeat : 'n',
      alarm: `${hours}:${minutes}`,
    })
    .then((resp) =>{
      console.log(resp.data)
      if(resp.data != null){
        console.log(resp.data)
      }
    })
    navigation.goBack(-1)
  }

  return (
      <View style={styles.container}>
        <View style={styles.bgColor}>
          <Header back={true} />
          <View style={styles.wrapper}>

            <CustomInput value={title} setValue={setTitle} placeholder={'Başlık'} />
            <View style={styles.dayContainer}>
              <View style={styles.selectDaysContainer}>
                <Text style={styles.activityDay}>Etkinlik Günü</Text>
                <View style={styles.selectedDay}>
                  <Text style={styles.selectedDayText}>{`${day}.${month}.${year}`}</Text>
                </View>
              </View>
            </View>

            <View style={styles.dayContainer}>
              <View style={styles.selectDaysContainer}>
                <Text style={styles.activityDay}>Alarm</Text>
                <Pressable onPress={() => setOpen(true)} style={styles.selectedDay}>
                  <Text style={styles.selectedDayText}>{hours ? hours: '00'}:{minutes ? (minutes < 10 ? `0${minutes}` : minutes) : '00'}</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.dayContainer}>
              <View style={styles.selectDaysContainer}>
                <Text style={styles.activityDay}>Tekrarla</Text>
              </View>
                <Picker
                  selectedValue={selectedRepeat}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedRepeat(itemValue)
                  }>
                  <Picker.Item label="Hiçbir zaman" value="n" />
                  <Picker.Item label="Haftalık" value="h" />
                  <Picker.Item label="Aylık" value="a" />
                  <Picker.Item label="Yıllık" value="y" />
                </Picker>
            </View>

            <CustomButton onPress={onPressedAddActivity} text={'Kaydet'} />
          </View>
          <DatePicker
                modal
                open={open}
                date={date}
                mode={'time'}
                
                onConfirm={(date) => {
                  setDate(date)
                  setHours(date.getHours())
                  setMinutes(date.getMinutes())
                  setOpen(false)
                  
                }}
                onCancel={() => {
                  setOpen(false)
                }}
                
                androidVariant={'nativeAndroid'}
              />

        </View>
        {keyboardStatus && 
          <View style={styles.menu}>
            <Menu />
          </View>
        }
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
    margin: 0,
    marginHorizontal: 40,
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
  dayContainer:{
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
  },
  selectDaysContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#583175',
  },
  selectedDay: {
    width: '40%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedDayText:{
    color: 'black',
    fontFamily: 'Roboto',
    margin: 10
  },
  activityDay: {
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Roboto'
  }
});

export default AddActivityScreen;
