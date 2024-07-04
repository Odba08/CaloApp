import {React} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Aumento = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <View style={{width: '100%'}}>
          <Image
            source={require('../../assets/img/aumento.jpg')}
            style={{height: 120, width: '100%'}}
          />
        </View>

        <View style={{flex: 1, marginTop: 15}}>
          <Text style={style.title}>
            ¿Cómo subir de peso y ganar masa muscular
          </Text>
          <Text style={{textAlign: 'justify', margin: 10}}>
            Para aumentar de peso de manera saludable, debes consumir más
            calorías de las que tu cuerpo gasta. Esto se logra mediante una
            dieta nutritiva y calórica, creando un balance energético positivo.
            Se recomienda agregar 300-500 calorías adicionales por día y
            observar la respuesta del cuerpo durante las primeras dos semanas.{' '}
            {'\n'}
            {'\n'}En caso necesario, se pueden agregar más calorías. También es
            importante incluir macronutrientes, vitaminas y minerales en la
            dieta. El ejercicio de fuerza y resistencia es beneficioso para
            ganar masa muscular y prevenir la pérdida muscular relacionada con
            la edad y la osteoporosis. Consulta a un entrenador certificado para
            obtener ayuda y evitar lesiones.
          </Text>

          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', marginLeft: 5, padding: 5}}>
              <Text style={style.subtitle}>
                ¿Cuántas calorías consumo diario?
              </Text>

              <TouchableOpacity style={style.Button}>
                <Text
                  style={style.Texto}
                  onPress={() => navigation.navigate('Calorias')}>
                  Calcula tus calorias
                </Text>
              </TouchableOpacity>

              <Text style={style.subtitle}>¿Cómo ganar peso saludable?</Text>
              <TouchableOpacity style={style.Button}>
                <Text
                  style={style.Texto}
                  onPress={() => navigation.navigate('Alimentos')}>
                  Alimentos saludables
                </Text>
              </TouchableOpacity>

              <Text style={style.subtitle}>Ejercicio de aumento de peso</Text>

              <TouchableOpacity style={style.Button}>
                <Text
                  style={style.Texto}
                  onPress={() => navigation.navigate('Ejercicios')}>
                  Ejercicios recomendados
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={{width: 190, height: 250, marginTop: 13}}
              source={require('../../assets/img/alimentos.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  parrafo: {
    textAlign: 'justify',
    margin: 5,
  },
  Texto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  Button: {
    backgroundColor: 'slateblue',
    padding: 10,
    borderRadius: 8,
    margin: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Aumento;
