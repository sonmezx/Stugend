import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const ActivityCard = ({activity}) => {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textStyle}>{activity}</Text>
      </View>
    </View>
    
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
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 15,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.64,
      elevation: 1,
    },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 15,
    justifyContent: 'center',
    color: 'black',
    fontWeight: 'bold'
  }
});
  
export default ActivityCard;
