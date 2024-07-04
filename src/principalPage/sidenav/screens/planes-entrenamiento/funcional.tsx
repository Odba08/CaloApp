import React from 'react';
import Accordion from '../../../login/components/accordion/AccordionPush';
import AccordionPush from '../../../login/components/accordion/AccordionPush';
import AccordionQuads from '../../../login/components/accordion/AccordionQuads';
import AccordionHombro from '../../../login/components/accordion/AccordionHombros';
import AccordionFems from '../../../login/components/accordion/AccordionFems';
import Secondlegs from '../../../login/components/accordion/funcional/secondlegs';
import { ScrollView } from 'react-native-virtualized-view'
import {Text, Image, View, useWindowDimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import Firstlegs from '../../../login/components/accordion/funcional/LegsFem';
import FirstTorso from '../../../login/components/accordion/funcional/torsoFem';
import Complement from '../../../login/components/accordion/funcional/exercisefem';

const Funcional = () => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView>
          <Image
            source={require('../../../../assets/img/Group.jpg')}
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
            Plan de entrenamiento de 5 días
          </Text> */}
          <Text
            style={{
              justifyContent: 'center',
              textAlign: 'justify',
              marginTop: 10,
              padding: 10,
            }}>
           Este plan de entrenamiento se divide en diferentes grupos musculares 
           para asegurar un entrenamiento completo y equilibrado, teniendo en cuenta 
           las necesidades y objetivos específicos de las mujeres. Cada día se enfoca 
           en grupos musculares específicos para maximizar el desarrollo muscular y 
           evitar el agotamiento excesivo de ciertas áreas del cuerpo.
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
          
          <Secondlegs />
          <FirstTorso />
          <Firstlegs />
          <Complement />
         
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default Funcional;