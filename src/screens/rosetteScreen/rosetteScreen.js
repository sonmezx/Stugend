import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Menu from '../../components/menu/Menu';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RosetteScreen = () => {
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
        setAgendCounter(resp.data.agendCounter)
        setTodoCounter(resp.data.todoCounter)
      })
      .catch((err) => {
        console.log(err)
      })
    })
  }, [])
  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header back={true} />

        <View style={styles.wrapper}>
          <View style={styles.rosetteContainer}>
            <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between', marginTop: 15, marginBottom: 15}}>
              <Text>Rozetler</Text>
            </View>

            <ScrollView>

              <View style={styles.rozette}>
                  <Icon iconName={'new'} />
                  <View style={styles.rozetteDescContainer}>
                      <Text style={styles.rozetteDesc}>Stugend Ekibine Katıldın</Text>
                      <View style={styles.rozetteDateContainer}>
                          <Text style={styles.rozetteDate}>Tamamlandı</Text>
                      </View>
                  </View>
              </View>

              <View style={styles.rozette}>
                <View style={{transform: [{translateX: 10}]}}>
                  <Icon iconName={'taskOne'} />
                </View>
                  
                  <View style={styles.rozetteDescContainer}>
                      <Text style={[styles.rozetteDesc, {transform: [{translateX: 15}]}]}>1 adet görev tamamla.</Text>
                      {todoCounter && todoCounter >= 1 ? (
                        <View style={styles.rozetteDateContainer}>
                          <Text style={styles.rozetteDate}>Tamamlandı</Text>
                        </View>
                      ) 
                      : 
                      (
                        <></>
                      )
                      }
                  </View>
              </View>

              <View style={styles.rozette}>
                  <Icon iconName={'taskTen'} />
                  <View style={styles.rozetteDescContainer}>
                      <Text style={styles.rozetteDesc}>10 adet görev tamamla.</Text>
                      {todoCounter && todoCounter >= 10 ? (
                        <View style={styles.rozetteDateContainer}>
                          <Text style={styles.rozetteDate}>Tamamlandı</Text>
                        </View>
                      ) 
                      : 
                      (
                        <></>
                      )
                      }
                  </View>
              </View>

              <View style={styles.rozette}>
                  <Icon iconName={'activityOne'} />
                  <View style={styles.rozetteDescContainer}>
                      <Text style={styles.rozetteDesc}>1 adet etkinliği ajandana kaydet.</Text>
                      {agendCounter && agendCounter >= 1 ? (
                        <View style={styles.rozetteDateContainer}>
                          <Text style={styles.rozetteDate}>Tamamlandı</Text>
                        </View>
                      ) 
                      : 
                      (
                        <></>
                      )
                      }
                  </View>
              </View>

              <View style={styles.rozette}>
                  <Icon iconName={'activityTen'} />
                  <View style={styles.rozetteDescContainer}>
                      <Text style={styles.rozetteDesc}>10 adet etkinliği ajandana kaydet.</Text>
                      {agendCounter && agendCounter >= 10 ? (
                        <View style={styles.rozetteDateContainer}>
                          <Text style={styles.rozetteDate}>Tamamlandı</Text>
                        </View>
                      ) 
                      : 
                      (
                        <></>
                      )
                      }
                  </View>
              </View>

            </ScrollView>
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
  rosetteContainer: {
    height: '82%',
    paddingLeft:20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
    borderRadius: 10,
  },
  rozette: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row'
},
rozetteDescContainer: {
    flex: 1,
    paddingLeft: 20,
},
rozetteDesc: {
  fontFamily: 'Roboto',
  fontSize: 15,
  fontWeight: '500'
},
rozetteDate: {
  fontFamily: 'Roboto',
  fontSize: 13,
  fontWeight: '700',
},
rozetteDateContainer: {
  flexDirection: 'row-reverse',
  marginLeft: 20,
},
closeContainer: {
  flexDirection: 'row-reverse',
  marginLeft: 20,
  marginTop: 20,
  marginBottom: 10,
}
});

export default RosetteScreen;
