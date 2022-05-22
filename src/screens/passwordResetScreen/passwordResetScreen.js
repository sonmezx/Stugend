import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from '../../components/icon/Icon';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const PasswordResetScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const backLoginScreen = () => {
    navigation.navigate('Login');
  }

  const apiURL = 'http://sonmez.tech/';

  onPressedPasswordReset = () => {
    axios.post(`${apiURL}?reset=password`, {
      email: email
    })
    .then((resp) =>{
      console.log(resp.data)
      if(resp.data != null){
        console.log(resp.data)
        toggleModal()
      }
      else{
        toggleModal2()
      }
    })
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
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Giriş Yaparken Sorun mu Yaşıyorsun?</Text>
        <Text style={styles.textQuestion}>E-Posta adresini gir ve hesabına yeniden girebilmen için sana bir şifre gönderelim.</Text>
      </View>
        
      <View style={styles.formContainer}>
        <CustomInput value={email} setValue={setEmail} placeholder={'E-Posta'} iconName={'mail'} opacity={'opacity'} textColor={'white'} />
        
        <View style={styles.buttonContainer}>
          <CustomButton onPress={onPressedPasswordReset} text={'Şifremi Sıfırla'}/>
        </View>
        
      </View>
        
    </View>

    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.modalContainer}>
          <Text>Şifre sıfırlama başarılı! Yeni şifreni e-mail adresine gönderdik.</Text>
          <CustomButton onPress={backLoginScreen} text={'Giriş Yap'}/>
        </View>
        
        </View>
      </Modal>
    </View>

    <View style={{ flex: 1 }}>
      <Modal isVisible={isModalVisible2}>
        <View style={styles.lessonContainer}>
          <View style={styles.reverse}>
            <Pressable hitSlop={{left: 20, top: 20}} onPress={toggleModal2} >
              <Icon iconName={'close'} />
            </Pressable>
          </View>
        <View style={styles.modalContainer}>
          <Text>Böyle bir kullanıcı bulunamadı!</Text>
          <CustomButton onPress={toggleModal2} text={'Tekrar dene'}/>
        </View>
        
        </View>
      </Modal>
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
    height: '35%',
  },
  logoAlign: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  formContainer: {
    marginLeft: 65,
    marginRight: 65,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  textQuestion: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  lessonContainer: {
    backgroundColor: '#f3f3f3',
    width: '100%',
    padding: 20,
    borderRadius: 5,
  },
  modalContainer:{
    marginTop: 10,
  },
  reverse: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

export default PasswordResetScreen;
