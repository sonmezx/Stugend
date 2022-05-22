import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import { useNavigation } from '@react-navigation/native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import axios from 'axios';
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {

  const [token, setToken] = useState(null);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value !== null) {
        setToken(value)
      }
    } catch(e) {
      // error reading value
    }
  }
const apiURL = 'http://sonmez.tech/';

const [username, setUsername] = useState();
const [password, setPassword] = useState();
const [err, setErr] = useState();

const navigation = useNavigation();

const onPressedRegister = () => {
  console.log('Pressed Register.');
  navigation.navigate('Register');
}

const storeData = async (value, id) => {
  try {
    await AsyncStorage.setItem('@token', value)
    await AsyncStorage.setItem('@user_id', id)
  } catch (e) {
    console.log(e)
  }
}

const onPressedLogin = () => {
  console.log('Pressed Login.');
  axios.post(`${apiURL}?user=login`, {
    username: username,
    password: password
  })
  .then((resp) =>{
    console.log(resp.data)
    if(resp.data.username == username && resp.data.password == password){
      console.log('Login successfully')
      storeData(md5(username), resp.data.id)
      navigation.navigate('Home')
    }
    else{
      setErr(resp.data)
    }
  })
  .catch((err) => {
    console.log(err)
  })
  //navigation.navigate('Home');
}

const onPressedForgotPassword = () => {
  console.log('Pressed Forgot Password.');
  navigation.navigate('PasswordReset');
}
  return (
    <View>
        <ImageBackground 
          source={require('../../../assets/images/bg.png')}
          style={styles.bg}
        >

        <StatusBar 
          barStyle='light-content'
          animated={true}
          backgroundColor="#3E1E54"
      />

    <View style={styles.logoAlign}>
        <Image 
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
        />

        <Text style={styles.textStyle}>GİRİŞ YAP</Text>
        <Text style={styles.errTextStyle}>{err && err}</Text>
      <KeyboardAvoidingView style={styles.formContainer}>
        <CustomInput placeholder={'Kullanıcı adı'} value={username} setValue={setUsername} iconName={'user-sm'} opacity={'opacity'} textColor={'white'} />
        <CustomInput placeholder={'Şifre'} value={password} setValue={setPassword} secureTextEntry iconName={'lock'} opacity={'opacity'} textColor={'white'} />

        <View style={styles.buttonContainer}>
          <CustomButton onPress={onPressedLogin} text={'Giriş Yap'}/>
          <CustomButton onPress={onPressedForgotPassword} text={'Şifremi Unuttum'}/>
          <Text style={styles.textQuestion}>Hesabın Yok Mu?</Text>
          <CustomButton onPress={onPressedRegister} text={'Kayıt Ol'} type={'transparent'} />
        </View>
        
      </KeyboardAvoidingView>
        
    </View>
      
    </ImageBackground>

    </View>
    
  );
};

const styles = StyleSheet.create({
  bg: {
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  logo: {
    width: '60%',
    height: '30%',
  },
  logoAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  errTextStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  formContainer: {
    marginLeft: 65,
    marginRight: 65,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  textQuestion: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
