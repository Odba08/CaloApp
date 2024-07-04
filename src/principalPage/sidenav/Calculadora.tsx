import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const horizontalPadding = 15;
const screenWidth = Dimensions.get('window').width;

const CaloriesCalculadora = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');

    const handlePortionChange = (text: string) => {
      let filteredText = text.replace(/[^0-9]/g, '');
      if (filteredText.length > 1) {
        filteredText = filteredText.replace(/^0+/, '');
      }
      setHeight(filteredText);
    };
    const handleCaloriesChange = (text: string) => {
      let filteredText = text.replace(/[^0-9]/g, '');
      if (filteredText.length > 1) {
        filteredText = filteredText.replace(/^0+/, '');
      }
  
      setWeight(filteredText);
    };
    
    const calculateBMI = () => {
      if (weight && height) {
        const weightInKg = parseFloat(weight);
        const heightInMeters = parseFloat(height) / 100;
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        setResult(bmi.toFixed(2));
      }
    };
  
    return (
        <>
        <ScrollView style={{marginTop: 50}}>


      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        
        <TextInput
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={handleCaloriesChange}
          style={styles.input}
          />
        <TextInput
          placeholder="Altura (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={handlePortionChange}
          style={styles.input}
        />
        {/* <Button title="Calcular" onPress={calculateBMI} /> */}

        <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        onPress={calculateBMI}>
                        Calcular
                    </Text>
          </TouchableOpacity>
        {result ? (
            <Text style={styles.result}>Tu IMC es: {result}</Text>
          ) : null}

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Composición corporal	</Text>
          <Text style ={styles.value}>Peso inferior al normal</Text>
          <Text style ={styles.value} >Normal</Text>
          <Text style ={styles.value}>Peso superior al normal</Text>
          <Text style ={styles.value}> Obesidad</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>	Índice de masa corporal (IMC)</Text>
          <Text style ={styles.value2}>Menos de 18.5</Text>
          <Text style ={styles.value2}>18.5 – 24.9</Text>
          <Text style ={styles.value2}>25.0 – 29.9</Text>
          <Text style ={styles.value2}>Más de 30.0</Text>
        </View>
        
      </View>
          <View style ={{ padding: 10, }}>
      <Text style ={{ textAlign: 'justify'}} >
        Una calculadora de índice de masa corporal (IMC) es una herramienta que se utiliza para evaluar la 
        relación entre el peso y la altura de una persona y proporcionar una estimación general de su composición 
        corporal y si se encuentra en un rango de peso saludable.
        </Text>

          </View>
      </View>
  </ScrollView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 60,
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius:100,
    marginTop: 10
    },
    result: {
      fontSize: 20,
      marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        flex: 0.50,
        marginTop: 20,
      },
      column: {
        flex: 1,
        justifyContent: 'center',
        margin: 8,
        padding: 16,
      },
      label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'midnightblue',
        textAlign: 'center',
      },
      value: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,  
      },
      value2: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 19,  
      },
      Texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
      },
      Button: {
        backgroundColor: 'midnightblue',
        padding: 15,
        borderRadius: 100,
        marginHorizontal: 0,
        marginVertical: 0,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        marginTop:10

      },
  });
  

export default CaloriesCalculadora;