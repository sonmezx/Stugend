import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Menu from '../../components/menu/Menu';

import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import ImagePicker from 'react-native-image-crop-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const EditProfileScreen = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [school, setSchool] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();

  const navigation = useNavigation();
  const [keyboardStatus, setKeyboardStatus] = useState(true);

  const apiURL = 'http://sonmez.tech/';
  var value, collect;
  const getData = async () => {

    try {
      value = await AsyncStorage.getItem('@user_id')
      if (value !== null) {
        return value;
      }

    } catch (e) {
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
        .then((resp) => {
          console.log(resp.data)
          setName(resp.data.fullname)
          setUsername(resp.data.username)
          setEmail(resp.data.email)
          setPhone(resp.data.phone)
          setPassword(resp.data.password)
          setSchool(resp.data.school)
          setImage(resp.data.image)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }, [])


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardStatus(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(true);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onPressedUpdate = () => {
    getData().then(values => {
      collect = values
      //console.log(collect)
      axios.post(`${apiURL}?user=update`, {
        id: collect,
        username: username,
        email: email,
        password: password,
        fullname: name,
        phone: phone,
        school: school
      })
        .then((resp) => {
          console.log(resp.data)
          setName(resp.data.fullname)
          setUsername(resp.data.username)
          setEmail(resp.data.email)
          setPhone(resp.data.phone)
          setPassword(resp.data.password)
          setSchool(resp.data.school)
          navigation.navigate('Home');
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.bgColor}>
        <Header back={true} />

        <View style={styles.wrapper}>
          <View style={styles.profilePicContainer}>
            <Image style={styles.profilePic} source={{uri: image}}></Image>
            <View style={{ marginTop: -15, marginLeft: 50, }}>
              <Pressable onPress={ () => {
                ImagePicker.openPicker({
                  width: 400,
                  height: 400,
                  cropping: true
                }).then(image => {
                  //console.warn(image);
                  axios.post(`${apiURL}?user=updateProfilePic`, {
                    image: image.path,
                    username: username
                  })
                    .then((resp) => {
                      console.warn(resp)
                      navigation.navigate('Home')
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                });
              }} >
                <Icon iconName={'edit_purple'} />
              </Pressable>
            </View>
          </View>

          <View style={styles.formContainer}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }} behavior="padding" enabled keyboardVerticalOffset={200}>
              <ScrollView>
                <CustomInput value={name} setValue={setName} placeholder={'Adı Soyadı'} iconName={'badge'}></CustomInput>
                <CustomInput value={username} setValue={setUsername} placeholder={'Kullancı Adı'} iconName={'user-sm'}></CustomInput>
                <CustomInput value={email} setValue={setEmail} placeholder={'E-Posta Adresi'} iconName={'mail'}></CustomInput>
                <CustomInput value={phone} setValue={setPhone} placeholder={'Telefon Numarası'} iconName={'call'}></CustomInput>
                <CustomInput value={password} setValue={setPassword} placeholder={'Şifre'} secureTextEntry iconName={'lock'}></CustomInput>
                <CustomInput value={school} setValue={setSchool} placeholder={'Okul'} iconName={'school'}></CustomInput>
                <CustomButton onPress={onPressedUpdate} text={'Güncelle'}></CustomButton>
              </ScrollView>
            </KeyboardAvoidingView>

          </View>


        </View>
      </View>
      {keyboardStatus &&
        <View style={styles.menu}>
          <Menu />
        </View>
      }

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
  profilePicContainer: {
    alignItems: 'center'
  },
  formContainer: {
    margin: 20,
    height: '60%',
  },

});

export default EditProfileScreen;
