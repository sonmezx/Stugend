import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import Task from '../../components/task/task';
import Tooltip from '../../components/tooltip/tooltip';
import Modal from 'react-native-modal';
import Icon from '../../components/icon/Icon';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoScreen = () => {
  const [todos, setTodos] = useState();
  const [todoAdd, setTodoAdd] = useState();
  const [deletedId, setDeletedId] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  
  const route = useRoute();

  const activity = route.params.activity;
  const activityName = route.params.activityName;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTodoAdd();
  };

  const toggleModal2 = (deleteId) => {
    setModalVisible2(!isModalVisible2);
    setDeletedId(deleteId)
  };

  const apiURL = 'http://sonmez.tech/';

useEffect(() => {
  axios.post(`${apiURL}?todo=getTodo`, {
    activity_id: activity,
  })
  .then((resp) =>{
    if(resp.data != null){
      console.log(resp.data)
      setTodos(resp.data)
    }
  })
}, [])

const addTodo = () => {
  axios.post(`${apiURL}?todo=addTodo`, {
    activity_id: activity,
    todoTitle: todoAdd,
  })
  .then((resp) =>{
    if(resp.data != null){
      console.log(resp.data)
      setTodos(resp.data)
      toggleModal()
    }
  })
}

const deleteTodo = (dId) => {
  axios.post(`${apiURL}?todo=deleteTodo`, {
    id: dId,
    activity_id: activity
  })
  .then((resp) =>{
    if(resp.data != null){
      console.log(resp.data)
      setTodos(resp.data)
      toggleModal2()
    }
  })
  console.log(dId)
}

  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header back={true} />

        <View style={styles.wrapper}>
          <Text style={styles.title}>{activityName}</Text>
          <View style={styles.tasksContainer}>
            <ScrollView>
              
                {todos &&
                  (
                    todos.map(todo => {
                      return <Task onLongPress={() => toggleModal2(todo.id)} key={todo.id} task={todo.todoTitle} id={todo.id} check={todo.isCheck} />
                    })
                  )
                }
            </ScrollView>
          </View>
            
            <Tooltip onPress={toggleModal} iconName={'plus'}/>
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
          <CustomInput value={todoAdd} setValue={setTodoAdd} placeholder={'Yapılacak işi giriniz'} iconName={'book'} multilineCount={4} />
          <CustomButton onPress={addTodo} text={'Ekle'}/>
        </View>
        
        </View>
      </Modal>

      <Modal isVisible={isModalVisible2}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal2} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.formContainer}>
          <Text style={styles.deleteText}>Bu görevi silmek istiyor musunuz?</Text>
          <CustomButton onPress={() => deleteTodo(deletedId)} text={'Sil'}/>
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
  title: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
    alignSelf: 'center',
    color: 'black'
  },
  tasksContainer: {
      width: '100%',
      height: '74%',
      transform: [{
        translateX: 15,
    }]
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
  deleteText: {
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto',
    fontSize: 16
  }
});

export default ToDoScreen;
