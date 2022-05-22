import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Menu from '../../components/menu/Menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ProfileScreen = () => {
  const [info, setInfo] = useState();
  const [agendCounter, setAgendCounter] = useState();
  const [todoCounter, setTodoCounter] = useState();
  const apiURL = 'http://sonmez.tech/';
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

  }

  useEffect(() => {
    getData().then(values => {
      collect = values
      //console.log(collect)
      axios.post(`${apiURL}?user=getUser`, {
        id: collect
      })
      .then((resp) =>{
        console.log(resp.data)
        setInfo(resp.data)
        setAgendCounter(resp.data.agendCounter)
        setTodoCounter(resp.data.todoCounter)
      })
      .catch((err) => {
        console.log(err)
      })
    })
  }, [])

  const navigation = useNavigation();
  const onPressedEditProfile = () => {
    console.log('Pressed Edit Profile Button.');
    navigation.navigate('EditProfile');
  }
  const onPressedAllViewRosette = () => {
    console.log('Pressed Rosette All View.');
    navigation.navigate('AllViewRosette');
  }
  

  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header logout={true} />

        <View style={styles.wrapper}>
          <View style={styles.profileContainer}>
            <Image style={styles.profilePic} source={{uri: info && info.image}} />
            <View style={styles.userInfo}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{info && info.fullname}</Text>
                <View style={styles.iconContainer}>
                  <Pressable hitSlop={{left: 20, top: 20, bottom: 20, right: 20,}} onPress={onPressedEditProfile}>
                    <Icon iconName={'edit'} />
                  </Pressable>
                </View>
              </View>
              <Text style={styles.userName}>@{info && info.username}</Text>
            </View>
          </View>
          
        </View>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Icon iconName={'call'} />
            <Text style={styles.infoText}>{info && info.phone}</Text>
          </View>

          <View style={styles.info}>
            <Icon iconName={'mail'} />
            <Text style={styles.infoText}>{info && info.email}</Text>
          </View>

          <View style={styles.info}>
            <Icon iconName={'school'} />
            <Text style={styles.infoText}>{info && info.school}</Text>
          </View>
          
        </View>
        <View style={styles.rosetteCard}>
          <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', margin: 15,}}>
              <Text>Rozetler</Text>
              <Pressable onPress={onPressedAllViewRosette}>
                  <Text>Tamamını Gör</Text>
              </Pressable>
          </View>
          <View style={styles.rosettes}>
          <Icon iconName={'new'} />
            {todoCounter &&
              todoCounter >= 1 ?
              (
                <Icon iconName={'taskOne'} />
              )
              :
              (
                <Icon rosetteStyle={0} iconName={'taskOne'} />
              )
            }

            {todoCounter &&
              todoCounter >= 10 ?
              (
                <Icon iconName={'taskTen'} />
              )
              :
              (
                <Icon rosetteStyle={0} iconName={'taskTen'} />
              )
            }

            {agendCounter &&
              agendCounter >= 1 ? 
              (
                <Icon iconName={'activityOne'} />
              )
              :
              (
                <Icon rosetteStyle={0} iconName={'activityOne'} />
              )
            }
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
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    alignSelf: 'flex-start'
  },
  userName: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginTop: 10,
  },
  name: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignItems: 'center',
    marginLeft: 20,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  info: {
    marginBottom: 14,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  infoText: {
    marginLeft: 20,
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'black'
  },
  rosetteCard: {
    width: '100%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
  },
  rosettes: {
    marginRight: 30,
    marginLeft: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

});

export default ProfileScreen;
