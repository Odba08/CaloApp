import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';

const ExerciseGroup = ({navigation}) => {
  return (
    <ScrollView
      
      showsHorizontalScrollIndicator={false}
      style={{flex: 0.5}}>
      <TouchableOpacity onPress={() => navigation.navigate('Chest')}>
        <Image
          source={require('../../../assets/img/exercisegroup/pecho.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Pectoral</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('back')}>
        <Image
          source={require('../../../assets/img/exercisegroup/espalda.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Espalda</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('quads')}>
        <Image
          source={require('../../../assets/img/exercisegroup/quads2.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Cuadriceps</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('femoral')}>
        <Image
          source={require('../../../assets/img/exercisegroup/femoral.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Femorales</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('shoulder')}>
        <Image
          source={require('../../../assets/img/exercisegroup/hombro.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Hombro</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('biceps')}>
        <Image
          source={require('../../../assets/img/exercisegroup/biceps.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Biceps</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('triceps')}>
        <Image
          source={require('../../../assets/img/exercisegroup/triceps.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Triceps</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('abdominales')}>
        <Image
          source={require('../../../assets/img/exercisegroup/abs.jpg')}
          style={styles.Image}
        />
        <View style={styles.overlay}>
        <Text style={styles.overlayText}>Abdominales</Text>
      </View>
      </TouchableOpacity>

      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: 160,
    width: 340,
    flex: 0.2,
    marginStart: 8,
    borderRadius: 10,
    marginBottom:15
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // Ajusta la opacidad aquí (0.5 en este ejemplo)
    justifyContent: 'flex-end',
    
    marginHorizontal:11,
    marginBottom:15,
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

export default ExerciseGroup;
