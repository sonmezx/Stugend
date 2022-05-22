import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';

import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import LessonCard from '../../components/lessonCard/lessonCard';
import Menu from '../../components/menu/Menu';
import Tooltip from '../../components/tooltip/tooltip';

import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LessonsScreen = () => {
  const apiURL = 'http://sonmez.tech/';
  const [lessonName, setLessonName] = useState();
  const [lessons, setLessons] = useState();

  var value, collect;
  const getData = async () => {
    
    try {
      value = await AsyncStorage.getItem('@user_id')
      if(value !== null){
        return value;
      }
      
    } catch(e) {
      console.log(e);
    }
    return collect;
  }
  
  getData().then(values => {
    collect = values
    //console.log(collect)
    axios.post(`${apiURL}?lesson=getLessons`, {
      user_id: collect
    })
    .then((resp) =>{
      console.log(resp.data)
      setLessons(resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
  })


  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setLessonName();
  };

  const onPressedLesson = (lessonId) => {
    console.log('Pressed Lesson');
    navigation.navigate('LessonProp', {
      lessonId: lessonId
    });
  }

  const onPressedAddLesson = () => {
    getData().then(values => {
      collect = values
      //console.log(collect)
      axios.post(`${apiURL}?lesson=addLesson`, {
        user_id: collect,
        lessonName: lessonName
      })
      .then((resp) =>{
        console.log(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    toggleModal()
  }

  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header />

        <View style={styles.wrapper}>
          <Text style={styles.title}>Dersler</Text>

          <View style={styles.lessonsContainer}>
            <ScrollView>
              
              {
                lessons != null ? (
                  lessons.map(lesson => {
                    return <Pressable key={lesson.id} onPress={() => onPressedLesson(lesson.id)}>
                            <LessonCard lessonName={lesson.lessonName} />
                          </Pressable>
                  })
                ) : (
                  <></>
                )
              }

            </ScrollView>
          </View>
          <Tooltip onPress={toggleModal} iconName={'plus'} />
          
        </View>
      </View>
      <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.formContainer}>
          <CustomInput value={lessonName} setValue={setLessonName} placeholder={'Ders adını giriniz'} iconName={'book'} />
          <CustomButton onPress={onPressedAddLesson} text={'Ekle'} />
        </View>
        
        </View>
      </Modal>
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
  lessonsContainer:{
    width: '100%',
    height: '75%',
  },
  title:{
    marginBottom: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },
  lessonContainer: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    padding: 20,
    borderRadius: 5,
  },
  reverse: {
    flex: 1,
    flexDirection: 'row-reverse',
    
  },
  formContainer:{
    marginTop: 10,
  }

});

export default LessonsScreen;
