import React from 'react';

import {
    View,
    Image,
    StyleSheet
  } from 'react-native';

  const Icon = (iconName, rosetteStyle) => {
    if(iconName.iconName == 'notification'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/notification.png')}
                  style={styles.notificationButton}
                  
                />
            </View>
          );
    }
    else if(iconName.iconName == 'back'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/back.png')}
                  style={styles.backButton}
                  
                />
            </View>
          );
    }
    else if(iconName.iconName == 'call'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/call.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'check'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/check.png')}
                  style={styles.iconSizeSmall}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'close'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/close.png')}
                  style={styles.iconSizeSmall}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'edit'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/edit.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'plus'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/plus.png')}
                style={styles.iconSizeDefault}
              />
          </View>
        );
  }
  else if(iconName.iconName == 'addexam'){
    return (
        <View > 
            <Image 
              source={require('../../../assets/icons/addExam.png')}
              style={styles.iconSizePrimary}
            />
        </View>
      );
}
    else if(iconName.iconName == 'location'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/location.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'school'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/school.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'trash'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/trash.png')}
                  style={styles.iconSizeSmall}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'user'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/user.png')}
                  style={styles.iconSizePrimary}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'user-sm'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/user.png')}
                style={styles.iconSizeDefault}
              />
          </View>
        );
  }
    else if(iconName.iconName == 'book'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/book.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'openbook'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/open-book.png')}
                style={styles.iconSizePrimary}
              />
          </View>
        );
  }
    else if(iconName.iconName == 'badge'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/badge.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'mail'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/mail.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'home'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/home.png')}
                  style={styles.iconSizePrimary}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'lock'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/lock.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'timer'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/timer.png')}
                  style={styles.iconSizePrimary}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'logout'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/logout.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'blogout'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/blogout.png')}
                style={styles.iconSizeDefault}
              />
          </View>
        );
  }
    else if(iconName.iconName == 'key'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/key.png')}
                  style={styles.iconSizeDefault}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'exam'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/exam.png')}
                  style={styles.iconSizePrimary}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'calendar'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/calendar.png')}
                  style={styles.calendarSize}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'edit_purple'){
        return (
            <View > 
                <Image 
                  source={require('../../../assets/icons/edit_purple.png')}
                  style={styles.iconSizePrimary}
                />
            </View>
          );
    }
    else if(iconName.iconName == 'new'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/new.png')}
                style={styles.newSize}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'activityOne'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/activityOne.png')}
                style={iconName.rosetteStyle == 0 ? styles.activityOneAvailable : styles.activityOneSize}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'activityTen'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/activityTen.png')}
                style={iconName.rosetteStyle == 0 ? styles.activityTenAvailable : styles.activityTenSize}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'taskOne'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/taskOne.png')}
                style={iconName.rosetteStyle == 0 ? styles.taskOneAvailable : styles.taskOneSize}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'taskTen'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/taskTen.png')}
                style={iconName.rosetteStyle == 0 ? styles.taskTenAvailable : styles.taskTenSize}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'play'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/play.png')}
                style={styles.timerIcon}
              />
          </View>
        );
    }
    else if(iconName.iconName == 'pause'){
      return (
          <View > 
              <Image 
                source={require('../../../assets/icons/pause.png')}
                style={styles.timerIcon}
              />
          </View>
        );
    }
    else {
    
        return (
            <View ></View>
          );
    }
  }

const styles = StyleSheet.create({
  notificationButton:{
    height: 30, 
    width: 30,
  },
  backButton:{
    height: 35, 
    width: 35,
  },
  iconSizeDefault: {
    height: 20,
    width: 20,
  },
  iconSizePrimary: {
    height: 25,
    width: 25,
  },
  calendarSize:{
    height: 40,
    width: 40,
  },
  iconSizeSmall: {
    height: 15,
    width: 15,
  },
  iconSizeLarge:{
    width: 30,
    height: 30
  },
  newSize:{
    width: 70,
    height: 70
  },
  activityOneSize: {
    width: 60,
    height: 70
  },
  activityOneAvailable:{
    opacity: .3,
    width: 60,
    height: 70
  },
  activityTenSize: {
    width: 60,
    height: 70
  },
  activityTenAvailable: {
    opacity: .3,
    width: 60,
    height: 70
  },
  taskOneSize:{
    width: 50,
    height: 70,
  },
  taskOneAvailable: {
    width: 50,
    height: 70,
    opacity: .3
  },
  taskTenSize:{
    width: 70,
    height: 70
  },
  taskTenAvailable: {
    opacity: .3,
    width: 70,
    height: 70
  },
  timerIcon: {
    width: 70,
    height: 70
  },

});
export default Icon;
