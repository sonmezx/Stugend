import React from 'react';

import PasswordResetScreen from '../screens/passwordResetScreen';
import RegisterScreen from '../screens/registerScreen';
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profileScreens/profileScreen';
import LessonsScreen from '../screens/lessonsScreen/lessonsScreen';
import LessonPropScreen from '../screens/lessonPropScreen/lessonPropScreen';
import EditProfileScreen from '../screens/profileScreens/editProfileScreen';
import RosetteScreen from '../screens/rosetteScreen/rosetteScreen';
import AboutUsScreen from '../screens/aboutUsScreen/aboutUsScreen';
import TimerScreen from '../screens/timerScreen/timerScreen';
import AgendaScreen from '../screens/agendaScreens/agendaScreen';
import PreloaderScreen from '../screens/preloaderScreen/preloaderScreen';
import ToDoScreen from '../screens/toDoScreen/toDoScreen';
import AddActivityScreen from '../screens/agendaScreens/addActivityScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Preloader' component={PreloaderScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Login' component={LoginScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Register' component={RegisterScreen} options={{animation: 'none'}} />
        <Stack.Screen name='PasswordReset' component={PasswordResetScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Home' component={HomeScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Profile' component={ProfileScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Lessons' component={LessonsScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Timer' component={TimerScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Agenda' component={AgendaScreen} options={{animation: 'none'}} />
        <Stack.Screen name='AddActivity' component={AddActivityScreen} options={{animation: 'none'}} />
        <Stack.Screen name='EditProfile' component={EditProfileScreen} options={{animation: 'none'}} />
        <Stack.Screen name='AboutUs' component={AboutUsScreen} options={{animation: 'none'}} />
        <Stack.Screen name='LessonProp' component={LessonPropScreen} options={{animation: 'none'}} />
        <Stack.Screen name='AllViewRosette' component={RosetteScreen} options={{animation: 'none'}} />
        <Stack.Screen name='Todo' component={ToDoScreen} options={{animation: 'none'}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};


export default Navigation;
