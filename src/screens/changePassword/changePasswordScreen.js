import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Text,
} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInput/CustomInput';


const ChangePasswordScreen = () => {

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
        <Text style={styles.textStyle}>Yeni Şifre</Text>
        <Text style={styles.textQuestion}>E-Posta adresine gönderdiğimiz 6 haneli kodu gir.</Text>
      </View>
        
      <View style={styles.formContainer}>

        <CustomInput placeholder={'Yeni Şifre'} secureTextEntry iconName={'lock'} opacity={'opacity'} textColor={'white'} />
        <CustomInput placeholder={'Şifreyi Onayla'} secureTextEntry iconName={'lock'} opacity={'opacity'} textColor={'white'} />

        <View style={styles.buttonContainer}>
          <CustomButton text={'Şifreyi Sıfırla'}/>
        </View>
        
        
      </View>
        
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
    width: '65%',
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
  }
});

export default ChangePasswordScreen;
