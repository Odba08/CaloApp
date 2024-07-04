import AccordionFems from '../../../login/components/accordion/AccordionFems';
import AccordionHombro from '../../../login/components/accordion/AccordionHombros';
import AccordionPush from '../../../login/components/accordion/AccordionPush';
import AccordionQuads from '../../../login/components/accordion/AccordionQuads';
import Accordion from '../../../login/components/accordion/accordionEspalda';
import {Text, Image, View, useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'


const CincoDias = () => {
  const {width} = useWindowDimensions();
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView>
          <Image
            source={require('../../../../assets/img/Cardio.jpg')}
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
            Este plan de entrenamiento de 5 días se divide en diferentes grupos
            musculares para asegurar un entrenamiento completo y equilibrado.
            Cada día se enfoca en grupos musculares específicos para maximizar
            el desarrollo muscular y evitar el agotamiento excesivo de ciertas
            áreas del cuerpo.
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

          <Accordion />
          <AccordionPush />
          <AccordionQuads />
          <AccordionHombro />
          <AccordionFems/>
        </ScrollView>
      </View>
    </>
  );
};

export default CincoDias;
