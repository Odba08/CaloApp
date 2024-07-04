import React from 'react';
import {Text, Image, View, useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import AccordionFems from '../../../login/components/accordion/AccordionFems';
import AccordionQuads from '../../../login/components/accordion/AccordionQuads';
import AccordionDayOne from '../../../login/components/accordion/Torso/TorsoDayone';
import AccordionDaytwo from '../../../login/components/accordion/Torso/TorsoDayTwo';

const CuatroDias = () => {
    const {width} = useWindowDimensions();
    return (
      <>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <ScrollView>
            <Image
              source={require('../../../../assets/img/Persecusion.png')}
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
            Plan de entrenamiento de 4 días
          </Text> */}
            <Text
              style={{
                justifyContent: 'center',
                textAlign: 'justify',
                marginTop: 10,
                padding: 10,
              }}>
            El plan de entrenamiento de 4 días de torso-pierna se divide en dos días para trabajar el torso (parte superior del cuerpo) y dos días para trabajar las piernas (parte inferior del cuerpo). Esta división permite entrenar de manera equilibrada todos los grupos musculares principales.
            </Text>

            <Text
            style={{
                justifyContent: 'center',
                textAlign: 'justify',
                padding: 10,
              }}>
            Esta división del entrenamiento en torso y pierna permite trabajar de manera más específica cada grupo muscular, evitando el agotamiento excesivo de una sola área del cuerpo y promoviendo un desarrollo muscular equilibrado. Además, al trabajar grupos musculares diferentes en días separados, se permite que los músculos descansen y se recuperen adecuadamente entre sesiones de entrenamiento.
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
              
            <AccordionDayOne/>
           <AccordionQuads />
           <AccordionDaytwo />
           <AccordionFems/>
          </ScrollView>
        </View>
      </>
    );
  };
  

export default CuatroDias;