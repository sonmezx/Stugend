import React, {useState, useEffect} from 'react';

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
import Menu from '../../components/menu/Menu';
import Tooltip from '../../components/tooltip/tooltip';
import { useRoute } from '@react-navigation/native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import NoteCard from '../../components/noteCard/noteCard';
import axios from 'axios';

function lessonName(lesson){
    return (
        <View style={styles.headerTextContainer}>
            <Text style={styles.headingText}>{lesson}</Text>
        </View>
    );
}

const LessonPropScreen = () => {
  const route = useRoute();
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isExamNoteAvailable, setIsExamNoteAvailable] = useState(false);
  const [lesson, setLesson] = useState();
  const [notes, setNotes] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [targetPoint, setTargetPoint] = useState();
  const [firstPoint, setFirstPoint] = useState();
  const [secondPoint, setSecondPoint] = useState();

  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
    setDescription();
    setTitle();
  };

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const apiURL = 'http://sonmez.tech/';

  const lessonId = route.params.lessonId;

  useEffect(() => {
    axios.post(`${apiURL}?lesson=getLesson`, {
      id: lessonId
    })
    .then((resp) =>{
      //console.log(resp.data.lessonName)
      setLesson(resp.data.lessonName)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  //Get lectures notes
  useEffect(() => {
    axios.post(`${apiURL}?note=getNotes`, {
      lesson_id: lessonId
    })
    .then((resp) =>{
      //console.log(resp.data)
      setNotes(resp.data)
    })
  }, [])

  //Get exam notes
  useEffect(() => {
    axios.post(`${apiURL}?note=examNote`, {
      lesson_id: lessonId
    })
    .then((resp) =>{
      //console.log(resp.data)
      if(resp.data != null){
        setTargetPoint(resp.data[0].targetPoint)
        setFirstPoint(resp.data[0].firstPoint)
        setSecondPoint(resp.data[0].secondPoint)
        setIsExamNoteAvailable(true)
      }
      
    })
  }, [])

  const onPressedAddNote = () => {
    axios.post(`${apiURL}?note=addNotes`, {
      lesson_id: lessonId,
      title: title,
      description: description
    })
    .then((resp) =>{
      console.log(resp.data)
      setNotes(resp.data)
    })
    toggleModal1()
  }

  const onPressedAddExamNote = () => {
    if(isExamNoteAvailable){
      axios.post(`${apiURL}?note=updateExamNote`, {
        lesson_id: lessonId,
        targetPoint: targetPoint,
        firstPoint: firstPoint,
        secondPoint: secondPoint
      })
      .then((resp) =>{
        //console.log(resp.data)
        if(resp.data != null){
          setTargetPoint(resp.data[0].targetPoint)
          setFirstPoint(resp.data[0].firstPoint)
          setSecondPoint(resp.data[0].secondPoint)
        }
      })
    }
    else{
      axios.post(`${apiURL}?note=addExamNote`, {
        lesson_id: lessonId,
        targetPoint: targetPoint,
        firstPoint: firstPoint,
        secondPoint: secondPoint
      })
      .then((resp) =>{
        //console.log(resp.data)
        if(resp.data != null){
          setTargetPoint(resp.data[0].targetPoint)
          setFirstPoint(resp.data[0].firstPoint)
          setSecondPoint(resp.data[0].secondPoint)
        }
      })
    }
    
    toggleModal2()
  }

  return (
      <View style={styles.container}>
          <View style={styles.bgColor}>
          <Header back={true} />
  
          <View style={styles.wrapper}>
            <View style={styles.lessonInfoContainer}>
              {lessonName(lesson)}
            </View>

            <View style={styles.toolTipContainer}>
              <View style={styles.buttonContainer}>
                  <Tooltip onPress={toggleModal1} iconName={'plus'} />
                  <Text style={styles.toolTipText}>Ders Notu Ekle</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Tooltip onPress={toggleModal2} iconName={'addexam'} />
                <Text style={styles.toolTipText}>Sınav Notu Ekle</Text>
              </View>
            </View>
          </View>
          <View style={styles.hr} />
          
          <View style={styles.noteContainer}>
            <ScrollView >
              {
                notes != null ? (
                  notes.map(note => {
                    //console.log(note.title);
                    return <NoteCard key={note.id} title={note.title} description={note.description} />
                  })
                )
                :
                (
                  <></>
                )
              }
            </ScrollView>
            
          </View>

        </View>

    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible1}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal1} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.formContainer}>
          <CustomInput value={title} setValue={setTitle} placeholder={'Başlık'} iconName={'book'} />
          <CustomInput value={description} setValue={setDescription} placeholder={'Ders notu giriniz'} iconName={'book'} multilineCount={4} />
          <CustomButton onPress={onPressedAddNote} text={'Ekle'}/>
        </View>
        
        </View>
      </Modal>
    </View>

    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible2}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal2} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.formContainer}>
          <CustomInput value={targetPoint} setValue={setTargetPoint} placeholder={'Hedeflenen Başarı Puanı'} iconName={'book'} />
          <CustomInput value={firstPoint} setValue={setFirstPoint} placeholder={'1. Sınav notunu giriniz'} iconName={'book'} />
          <CustomInput value={secondPoint} setValue={setSecondPoint} placeholder={'2. Sınav notunu giriniz'} iconName={'book'} />
          <CustomButton onPress={onPressedAddExamNote} text={'Ekle'}/>
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
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
  headingText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  headerTextContainer:{
    width: '45%', 
    height: '45%', 
    backgroundColor:'#583175',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  toolTipContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -70,
  },
  buttonContainer: {
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center'
  },
  toolTipText:{
    marginTop: -140,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#583175',
    opacity: .2,
    marginTop: -50,
  },
  noteContainer: {
    margin: 20,
    width: '100%',
    height: '32%'
  },
  lessonContainer: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    padding: 20,
    borderRadius: 5,
  },
  formContainer:{
    marginTop: 10,
  },
  reverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

export default LessonPropScreen;
