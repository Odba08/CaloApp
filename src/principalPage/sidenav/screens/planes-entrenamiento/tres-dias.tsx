import React from 'react';
import {View, Text, Button, useWindowDimensions, Image} from 'react-native';

import {ScrollView} from 'react-native-virtualized-view';
import AccordionFullBody from '../../../login/components/accordion/Fullbody/FullBody';
const TresDias = () => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView>
          <Image
            source={require('../../../../assets/img/Alone.jpg')}
            style={{
              height: 400,
              width,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
            }}
          />
          {/* <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
         
            }}>
            Plan de entrenamiento de 3 días
          </Text> */}
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'justify',
              marginTop: 10,
              padding: 10,
            }}>
            El plan de entrenamiento de cuerpo completo es ideal cuando tienes
            disponibilidad limitada de días para ejercitarte. En este caso,
            adaptaremos el plan para que puedas realizar la rutina de ejercicios
            en los días que tengas disponibles, como lunes, martes y viernes.
          </Text>

          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'justify',
              padding: 10,
            }}>
            El entrenamiento de cuerpo completo se enfoca en trabajar todos los
            grupos musculares principales en una sola sesión de entrenamiento.
            Esto significa que cada día trabajarás diferentes áreas del cuerpo
            para asegurar un entrenamiento completo y equilibrado.
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 10,
              color: 'midnightblue',
            }}>
            Plan de entrenamiento
          </Text>

          <AccordionFullBody />
          <Text>{'\n'}</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default TresDias;
