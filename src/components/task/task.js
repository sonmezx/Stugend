import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from '../icon/Icon';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task = ({task, onLongPress, id, check}) => {
    const ch = check == 1 ? false : true;
    const [isCheck, setIsCheck] = useState(!ch);
    
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

    const checked = () => {
        setIsCheck(!isCheck);
        console.log(isCheck);

        getData().then(values => {
          collect = values
          //console.log(collect)
          axios.post(`${apiURL}?todo=checkTodo`, {
            id: id,
            isCheck: !isCheck,
            user_id: collect
          })
          .then((resp) =>{
            console.log(resp.data)
            setInfo(resp.data)
          })
          .catch((err) => {
            console.log(err)
          })
        })
    }

  return (
    <Pressable onPress={checked} onLongPress={onLongPress} style={styles.container}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}>
                {isCheck && 
                    <Icon iconName={'check'} />
                }
                
            </View>
        </View>
        <View style={styles.itemRight}>
            <View>
              {isCheck ? 
                <Text style={styles.titleDec}>{task}</Text>
                :
                <Text style={styles.title}>{task}</Text>
              }
            </View>
        </View>
        
      </View>
    </Pressable>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  item: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.64,
      elevation: 2,
    },
  itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center'
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
  square: {
      width: 20,
      height: 20,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      marginRight: 15,
  },
  titleDec: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: 'black',
    textDecorationLine: 'line-through',
    fontWeight: 'bold'
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  trash: {
      transform: [{
          translateX: 100
      }]
  },
  
});
  
export default Task;
