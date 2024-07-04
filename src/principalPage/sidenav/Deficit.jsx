import {React} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const horizontalPadding = 15;


const Deficit = ({ navigation }) => {

    return(
 
        <>
        <ScrollView>

            <Image
            source={require('../../assets/img/deficit.jpg')}
            style={{ flex: 1 , alignItems: 'center',  width: screenWidth, height: 200, margin: 0, borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}/>

        <View style = {{  justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
            <Text style={style.title}>¿Cómo puedo perder peso de forma saludable?</Text>
            <Text style = {style.parrafo}>Cuando se trata de perder peso de forma saludable a través del ejercicio, es importante considerar diferentes aspectos.</Text>

            <Text style = {style.parrafo}>Para perder peso de forma saludable, es importante combinar ejercicio regular con una alimentación equilibrada. Elige actividades deportivas que te gusten, como correr, nadar o hacer ejercicio en el gimnasio, para quemar calorías y mejorar tu condición física. Además, incluye ejercicios de fuerza para desarrollar músculo y acelerar tu metabolismo.
            
           </Text>
            <Text style = {style.parrafo}>En cuanto a la alimentación, opta por una dieta variada y nutritiva que incluya frutas, verduras, proteínas magras y granos integrales. Controla las porciones, come despacio y bebe suficiente agua. Evita dietas extremas y busca el asesoramiento de un profesional de la salud para obtener un plan personalizado.</Text>
            <Text style = {style.parrafo}>Recuerda que cada persona es única, por lo que es importante buscar orientación específica según tus necesidades y metas. Adoptar un enfoque equilibrado y sostenible te ayudará a perder peso de manera saludable y mantenerlo a largo plazo.</Text>
            
            <View style ={{flexDirection:'row'}}>

            
            <TouchableOpacity style={style.Button}>
                <Text style={style.Texto} onPress={() => navigation.navigate('Alimentos')}>Alimentos Saludables</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.Button}>
                <Text style={style.Texto}onPress={() => navigation.navigate('Ejercicios')}>Ejercicios recomendados</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ flex: 1 , alignItems: 'center', marginTop: 10, marginBottom:30}}
            onPress={() => navigation.navigate('Calorias')}>
            <Image
            source={require('../../assets/img/entrenamiento.jpg')}
            style={{ flex: 1 , alignItems: 'center',  width: 300, height: 300}}/>
            </TouchableOpacity>

        </View>
        
       
        </ScrollView>
        
        </>


   
    )
}


const style = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitle:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        marginTop: 10
    },
    parrafo:{
        textAlign: 'justify', 
        margin: 5,
        width: screenWidth - 2 * horizontalPadding
        
    },
    Button:{
        backgroundColor: 'darkgoldenrod',
        padding: 10,
        borderRadius: 4,
        margin: 10
    },
    Texto:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13
    }

});

export default Deficit;
