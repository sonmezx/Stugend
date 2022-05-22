import React from 'react';

import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const LessonCard = ({lessonName}) => {

  return (
    <View style={styles.container}>
      <View style={styles.item}>
          <View style={styles.itemLeft}>
              <View style={styles.square}></View>
            <Text style={styles.textStyle}>{lessonName}</Text>
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
      padding: 25,
      borderRadius: 10,
      flexDirection: 'row',
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
      elevation: 2,
    },
  itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
  },
  square: {
      width: 24,
      height: 24,
      backgroundColor: '#5e72e4',
      borderRadius: 5,
      opacity: 0.4,
      marginRight: 15,
  },
  textStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    
  }
});
  
export default LessonCard;
