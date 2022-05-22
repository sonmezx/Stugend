import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Pressable,
  Text,
  BackHandler
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from '../../components/icon/Icon';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import CustomButton from '../../components/customButton/CustomButton';
import {Agenda} from 'react-native-calendars';
import ActivityCard from '../../components/activityCard/activityCard';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
BackHandler.addEventListener('hardwareBackPress', function() {return true})

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

const [activitys, setActivitys] = useState();
const [isModalVisible, setModalVisible] = useState(false);
const [deletedId, setDeletedId] = useState();
const agendObj = new Object();

activitys && (
  //agendObj[activitys[0].date] = [{name: activitys[0].title}];
  activitys.map(activity => {
    agendObj[activity.date] ? 
    (
      agendObj[activity.date].push({name: activity.title, id: activity.id})
    ) 
    : 
    (
      agendObj[activity.date] = [{name: activity.title, id: activity.id}]
    )
    
  })
)

console.log(agendObj)
const navigation = useNavigation();

const toggleModal = (deleteId) => {
  setModalVisible(!isModalVisible);
  setDeletedId(deleteId)
};

const onPressedActivity = (activityID, activityName) => {
  //liste içinde liste olacak
  console.log('Pressed Activity.' + activityID + " " + activityName);
  navigation.navigate('Todo', {
    activity: activityID,
    activityName: activityName
  });
}

const apiURL = 'http://sonmez.tech/';

getData().then(values => {
  collect = values
  //console.log(collect)
  axios.post(`${apiURL}?activity=getActivity`, {
    user_id: collect,
  })
  .then((resp) =>{
    if(resp.data != null){
      console.log(resp.data)
      setActivitys(resp.data)
    }
  })
})

const deleteActivity = (dID) => {
  axios.post(`${apiURL}?activity=deleteActivity`, {
    id: dID,
    user_id: 1
  })
  .then((resp) =>{
    if(resp.data != null){
      console.log(resp.data)
      setActivitys(resp.data)
      toggleModal()
    }
  })
}

  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header />
        <View style={styles.agendaContainer}>
        <Agenda firstDay={1}
          hideKnob={true}
            theme={{
                calendarBackground: '#583175',
                dayTextColor: 'white',
                textSectionTitleColor: 'white',
                todayTextColor: 'white',
                selectedDayTextColor: '#583175',
                selectedDayBackgroundColor: 'white',
                dotColor: 'white',
                selectedDotColor: '#583175',
                agendaTodayColor: 'black',
                monthTextColor: 'white'
              }}

              renderDay={() => {return <View />}}

              showOnlySelectedDayItems={true}
              
              items={agendObj}

              renderItem={(item) => {
                return(
                  <Pressable onLongPress={() => toggleModal(item.id)} 
                    onPress={() => onPressedActivity(item.id, item.name)} 
                    style={styles.activityContainer}>
                    <ActivityCard activity={item.name} />
                  </Pressable>
                );
              }}

              renderEmptyData={() => {
                return (
                  <View style={styles.wrapper}>
                      <ActivityCard activity={'Bugün için bir planın yok.'} />
                  </View>
                )
              }}
          />
        </View>
        
      </View>
        
      <Modal isVisible={isModalVisible}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.formContainer}>
          <Text style={styles.deleteText}>Bu etkinliği silmek istiyor musunuz?</Text>
          <CustomButton onPress={() => deleteActivity(deletedId)} text={'Sil'}/>
        </View>
        
        </View>
      </Modal>

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
  agendaContainer: {
    width: '100%',
    height: '67%',
  },
  wrapper: {
    margin: 20,
    width: '100%',
    height: '18%'
  },
  menu: {
    bottom: 0,
    zIndex: 1,
  },
  activityContainer:{
    marginTop: 10,
    marginLeft: 20,
    width: '100%',
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

export default HomeScreen;
