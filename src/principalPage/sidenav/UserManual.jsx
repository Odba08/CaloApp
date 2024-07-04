import React from 'react';
import {Text, Image, ScrollView, View, StyleSheet, Button} from 'react-native';

export const UserManual = () => {
  const scrollRef = React.useRef();
  const imageHeight = 520;

  const handlePress = index => {
    const offset = index * imageHeight;
    scrollRef.current.scrollTo({x: 0, y: offset, animated: true});
  };

  return (
    <ScrollView ref={scrollRef} style={style.container}>
      <View style={{padding: 15}}>
        <Text style={style.title}>Manual de Usuario</Text>
        <Text style={style.parrafo}>
        {' '}
          Este manual de usuario tiene como objetivo guiarlo a través del uso de
          nuestra aplicacion. Le proporcionará información detallada sobre las
          características, funciones y cómo sacarle el máximo provecho.
        </Text>

        <Text style={style.title}>¿Qué encontrará en este manual?</Text>

        <Text style={style.parrafo}>
          En este manual encontrará:
          {'\n'}
          {'\n'}
          - Una descripción general de nuestra aplicacion y sus funcionalidades.
          {'\n'}
          - Instrucciones paso a paso para realizar tareas comunes.{'\n'}
          - Explicaciones detalladas de las características y funciones.{'\n'}
          - Una sección de solución de problemas para ayudarlo a resolver
          problemas comunes.{'\n'}
        </Text>

        <Text style={style.title}>Ayuda</Text>

        <Text style={style.parrafo}>
         
          Podra navegar a cada seccion seleccionando el titulo deseado en la
          lista de contenido.
          {'\n'}
          {'\n'}
          Asimismo, una vez que haya seleccionado el titulo deseado, podra
          desplazarse hacia arriba o hacia abajo para ver la informacion
          deseada, o podra seleccionar el titulo de la seccion donde se
          encuentra para volver a la seccion de contenido.
        </Text>
        <Text style={style.title}>Contenido</Text>

        <Text style={style.list} onPress={() => handlePress(1)}>
          1. Pantalla de inicio
        </Text>
        <Text style={style.list} onPress={() => handlePress(4)}>
          2. Pantalla principal
        </Text>
        <Text style={style.list} onPress={() => handlePress(9.5)}>
          3. Menú lateral          
        </Text>
        <Text style={style.list} onPress={() => handlePress(10.5)}>
          4. Calculadora de IMC
        </Text>
        <Text style={style.list} onPress={() => handlePress(12)}>
          5.Calculadora de Calorías          
        </Text>
        <Text style={style.list} onPress={() => handlePress(14)}>
          6.Guia para aumentar masa muscular
        </Text>
        <Text style={style.list} onPress={() => handlePress(15.5)}>
          7.Guia para bajar de peso
        </Text>
        <Text style={style.list} onPress={() => handlePress(17)}>
          8.Lista de ejercicios
        </Text>
        <Text style={style.list} onPress={() => handlePress(18.5)}>
          9.Lista de alimentos
        </Text>
        <Text style={style.list} onPress={() => handlePress(20)}>
          10.Contador de calorias
        </Text>
        <Text style={style.list} onPress={() => handlePress(21)}>
          11.Añadir Alimentos
        </Text>
        <Text style={style.list} onPress={() => handlePress(25.5)}>
          12.Perfil de usuario
        </Text>
        <Text style={style.list} onPress={() => handlePress(26.7)}>
          13. Modificación de datos
        </Text>
        <Text style={style.list} onPress={() => handlePress(28)}>
          14. Editar datos
        </Text>
        <Text style={style.list} onPress={() => handlePress(29)}>
          15. Crea tu cuenta
          {'\n'}
          {'\n'}

        </Text>

        <Text style={style.title} onPress={() => handlePress(0.5)}>
          1. Pantalla de inicio
        </Text>

        <Text style={style.parrafo}>
          {' '}
          En nuestra aplicación móvil se encontrará con la pantalla principal
          donde podrá elegir entre dos opciones, EMPECEMOS para registrarse si
          aun no lo ha hecho e iniciar sesión si ya posee cuenta.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/1.jpg')}
          style={style.image}
        />
        <Text style={style.parrafo}>
          {' '}
          En la siguiente pantalla podra ingresar sus datos de usuario y
          contraseña para iniciar sesion.
        </Text>

        <Image
          source={require('../../assets/img/ManualDeUsuario/2.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          {' '}
          2.Pantalla principal
        </Text>
        <Text style={style.parrafo}>
          {' '}
          Una vez iniciada la sesión se mostrará la pantalla principal donde
          podrá elegir entre las diferentes opciones tales como planes de
          entrenamientos semanales, alimentos saludables y grupos musculares.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/3.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/3.1.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/3.2.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/4.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/4.1.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          3.Menú lateral          
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En el menú lateral podrá encontrar las diferentes opciones de la
          aplicación, tales como calculadora de grasa corporal, Calculadora de
          calorías, guía para aumentar masa muscular, guía para déficit
          calórico, lista de ejercicios y lista de alimentos.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/5.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          4.Calculadora de IMC
        </Text>
        <Text style={style.parrafo}>
          {' '}
          Una vez ingresado en la calculadora de grasa corporal podrá ingresar
          sus datos para obtener su porcentaje de grasa corporal.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/6.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          5.Calculadora de Calorías          
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la calculadora de calorías podrá ingresar sus datos (Peso en
          kilogramos, Altura en Centímetros y la edad en Años) además de
          seleccionar su nivel de actividad para obtener su cantidad de calorías
          diarias recomendadas.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/7.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/8.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          6. Guia para aumentar masa muscular
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la guía para aumentar masa muscular podrá encontrar una guía donde
          se le indicara recomendaciones para aumentar masa muscular. Además, al
          final de la guía podrá encontrar tres botones que lo re direccionarán
          según lo que desee consultar, tales como Calcular tus calorías, Lista
          de alimentos y Lista de ejercicios.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/9.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          7.Guia para bajar de peso
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la guía para déficit calórico podrá encontrar una guía donde se le
          indicara recomendaciones para poder bajar de peso. Además, al final de
          la guía podrá encontrar dos botones que lo re direccionarán según lo
          que desee consultar, tales como, Lista de alimentos y Ejercicios
          recomendados.

        </Text>

        <Image
          source={require('../../assets/img/ManualDeUsuario/10.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          8.Lista de ejercicios
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la lista de ejercicios podrá encontrar una lista de ejercicios
          recomendados para realizar según sus gustos. Además, podrá seleccionar
          la imagen que desee y esta lo re direccionará a una breve descripción
          del grupo muscular que trabaja, así como una indicación de
          repeticiones y series recomendadas.

        </Text>

        <Image
          source={require('../../assets/img/ManualDeUsuario/11.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          9.Lista de alimentos
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la lista de alimentos podrá encontrar una lista de alimentos
          saludables recomendados para su dieta. Además, podrá seleccionar el
          alimento que desee y esta lo re direccionará a una breve descripción
          del alimento, así como una indicación de calorías y macronutrientes.

        </Text>

        <Image
          source={require('../../assets/img/ManualDeUsuario/12.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          10.Contador de calorias
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En el contador de calorías podrá llevar un control de las calorías que
          ha consumido durante el día. Podrá modificar las calorías consumidas
          ingresando sus calorías diarias y agregándolas. Además, podrá
          seleccionar el botón de añadir alimentos para agregar los alimentos
          que ha consumido.


        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/13.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          11. Añadir Alimentos
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la pantalla de añadir alimentos podrá añadir el alimento que desee
          agregando el Nombre las calorías y los gramos, pudiendo también
          agregarlo a su contador de calorías.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/14.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/14.1.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/15.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/img/ManualDeUsuario/16.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          12.Perfil de usuario
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En el perfil de usuario podrá ver sus datos personales, además de
          poder modificarlos si lo desea.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/17.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          13. Modificación de datos          
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la pantalla de Modificación deberá ingresar su correo electrónico
          para que su identidad sea validada y pueda modificar sus datos
          personales.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/18.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          14. Editar datos
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la pantalla de modificación de datos, podrá modificar sus datos
          personales, tales como su peso, altura, edad y nivel de actividad, así
          como podrá modificar su imagen de perfil.

        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/19.jpg')}
          style={style.image}
        />
        <Text style={style.title} onPress={() => handlePress(0.5)}>
          15. Crea tu cuenta
        </Text>
        <Text style={style.parrafo}>
          {' '}
          En la pantalla de registro deberá ingresar su correo electrónico y
          contraseña para poder registrarse en la aplicación. Teniendo en cuenta
          que una vez registrado no podrá realizar la modificación de su Nombre
          ni correo electrónico.
        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/20.jpg')}
          style={style.image}
        />
        <Text style={style.parrafo}>
          {' '}
          En la segunda pantalla de registro debera completar el resto de sus
          datos para culminar su registro en la aplicacion.
        </Text>
        <Image
          source={require('../../assets/img/ManualDeUsuario/21.jpg')}
          style={style.image}
        />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 500,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  parrafo: {
    fontSize: 15,
    marginTop: 20,
    textAlign: 'justify',
  },
  list: {
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'midnightblue',
  },
});
