import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const AboutUsScreen = () => {
    
  return (
    <View style={styles.container}>
        <View style={styles.bgColor}>
        <Header back={true} />

        <View style={styles.wrapper}>
          <View style={styles.aboutUsContainer}>
            <Text style={styles.title}>Hakkımızda</Text>

            <ScrollView>
                <Text style={styles.textStyle}>
                    Bu uygulama BTE 402 Mobil Programlama 
                    Dersi kapsamında oluşturulmuştur.
                </Text>
                <Text style={styles.textStyle}>
                Amacımız siz kullanıcı öğrencilerin, dijital
                dünyayı sadece dersten kopmak için 
                değil, aksine dersi program düzenine 
                telefonunuz üzerinden koyabilmenizdir.
                </Text>
                <Text style={styles.textStyle}>
                    STUGEND Ekibi Olarak Keyifli ve Eğitim Dolu Kullanımlar Dileriz...
                </Text>
                <Text style={styles.textStyle}>
                    STUGEND EKİBİ:
                </Text> 
                <Text style={styles.textStyle}>İrem ARGUN</Text>
                <Text style={styles.textStyle}>Yusuf Safa SÖNMEZ</Text>
                <Text style={styles.textStyle}>İbrahim Berke DALGIÇ</Text>
                <Text style={styles.textStyle}>Emre AKKOR</Text>
                <Text style={styles.textStyle}>Kaan AYDIN</Text>

                <Text style={styles.textStyle}>Proje Danışmanı: Prof. Dr. Güldem Alev ÖZKÖK</Text>
            </ScrollView>
          </View>
          
          
        </View>
      </View>
      <View style={styles.menu}>
          <Menu />
        </View>
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
  aboutUsContainer: {
    height: '82%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.84,
    elevation: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontFamily: 'Roboto',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    fontWeight: '600',
  },
  textStyle: {
      fontFamily: 'Roboto',
      fontSize: 15,
      marginBottom: 10,
      textAlign: 'center'
  }
});

export default AboutUsScreen;
