import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const NoteCard = ({title, description}) => {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <View style={styles.circle}></View>
          </View>
          <View style={styles.itemRight}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.textStyle}>{description}</Text>
          </View>
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
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 25,
      borderRadius: 10,
      flexDirection: 'row',
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
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
  },
  itemRight: {
    flexDirection: 'column',
    marginRight: 15,
    marginTop: 5
},
  circle: {
      width: 20,
      height: 20,
      backgroundColor: '#5e72e4',
      borderRadius: 60,
      opacity: 0.4,
      marginRight: 15,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 14,
    
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 16,
  }
});
  
export default NoteCard;
