import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Text,
  ScrollView
} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';
import axios from 'axios';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const RegisterScreen = () => {
  const apiURL = 'http://sonmez.tech/';

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const onPressedRegister = () => {
    console.log('Pressed Register.');
    axios.post(`${apiURL}?user=register`, {
      username: username,
      password: password,
      phone: phone,
      email: email
    })
    .then((resp) =>{
      console.log(resp.data)
      if(resp.data.username == username && resp.data.password == password){
        console.log('Login successfully')
        navigation.navigate('Home');
      }
    })
    .catch((err) => {
      console.log(err)
    })
    //navigation.navigate('Home');
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

        <Text style={styles.textStyle}>KAYIT OL</Text>
      <KeyboardAvoidingView style={styles.formContainer} enable behavior="padding" keyboardVerticalOffset={50}>
        <CustomInput placeholder={'E-Posta'} value={email} setValue={setEmail} iconName={'mail'} opacity={'opacity'} textColor={'white'} />
        <CustomInput placeholder={'Telefon'} value={phone} setValue={setPhone} iconName={'call'} opacity={'opacity'} textColor={'white'} />
        <CustomInput placeholder={'Kullanıcı adı'} value={username} setValue={setUsername} iconName={'user-sm'} opacity={'opacity'} textColor={'white'} />
        <CustomInput placeholder={'Şifre'} value={password} setValue={setPassword} secureTextEntry iconName={'lock'} opacity={'opacity'} textColor={'white'} />

        <View style={styles.buttonContainer}>
          <CustomButton onPress={onPressedRegister} text={'Kayıt Ol'}/>
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

export default RegisterScreen;
