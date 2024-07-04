import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

const Poster = ({navigation}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{flex: 0.5}}>
      <TouchableOpacity onPress={() => navigation.navigate('CincoDias')}>
        <Image
          source={require('../../../assets/img/Cardio.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Cinco días</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CuatroDias')}>
        <Image
          source={require('../../../assets/img/Persecusion.png')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Cuatro días</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TresDias')}>
        <Image
          source={require('../../../assets/img/Alone.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Tres días</Text>
        </View>
        
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Funcional')}>
        <Image
          source={require('../../../assets/img/Group.jpg')}
          style={styles.Image}
        />

        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Entrenamiento para ellas</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 210,
    width: 330,
    flex: 0.2,
    marginStart: 8,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // Ajusta la opacidad aquí (0.5 en este ejemplo)
    justifyContent: 'flex-end',
    
    marginStart: 8,
    borderRadius: 10,
  },
  overlayText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 15,
   
  },
});

export default Poster;
