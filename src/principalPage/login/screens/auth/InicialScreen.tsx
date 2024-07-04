import React, { useEffect, useRef } from 'react';
import {
  Animated,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const InicialScreen = ({navigation}: {navigation: any}) => {
  const image = require('../../../../assets/img/secondpic.jpg');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeInButtons();
  }, []);

  const fadeInButtons = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000, 
      useNativeDriver: true,
    }).start();
  };
  return (
    
      <View style={styles.container}>     
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay} />
        <View style={{flex: 0.8, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>WORKOUT</Animated.Text>
        <Animated.Text style={[styles.subtitle, {opacity:fadeAnim}]}>Un cuerpo sano es un cuerpo feliz</Animated.Text>
        </View>

        <Text style={styles.text2}>¡Hoy empiezas a cambiar!</Text>

        <Animated.View style={[ { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.Button}>
          <Text
            style={styles.Texto}
            onPress={() => navigation.navigate('RegisterScreen')}>
            EMPECEMOS
          </Text>
        </TouchableOpacity>
        
        <View style={styles.iniciarsesion}>
          <Text style={styles.text2}>¿Ya tienes cuenta? </Text>

          <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.textoparainiciar}>
            Inicia Sesion
          </Text>
        </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
 
  },
  text2: {
    color: 'white',
    fontSize: 18,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:0
  },
  textoparainiciar:{
    color: 'lightskyblue',
    fontSize: 18,
    lineHeight: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:0
  },
  Texto: {
    color: 'royalblue',
    fontWeight: 'bold',
    fontSize: 22,
  },
  Button: {
    backgroundColor: 'whitesmoke',
    padding: 20,
    borderRadius: 100,
    marginHorizontal: 25,
    marginVertical: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iniciarsesion: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin:0
  },
  subtitle: {
    color: 'lightskyblue',
    fontWeight: 'bold',
    fontSize: 22
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
