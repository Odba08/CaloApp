import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ScrollView} from 'react-native-gesture-handler';

const CaloriesCal = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [calories, setCalories] = useState(0);
  const [activityLevel, setActivityLevel] = useState('');

  const handeleAgeChange = (text: string) => {
    let filteredText = text.replace(/[^0-9]/g, '');
    if (filteredText.length > 1) {
      filteredText = filteredText.replace(/^0+/, '');
    }
    setAge(filteredText);
  }

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
  

  const calculateCalories = () => {
    const WeitghInKg = parseFloat(weight);
    const HeightInCm = parseFloat(height);
    const AgeinYears = parseFloat(age);

    let tmb = 0;

    if (WeitghInKg && HeightInCm && AgeinYears) {
      if (activityLevel === 'sedentario') {
        tmb = 66 + 13.75 * WeitghInKg + 5 * HeightInCm - 6.75 * AgeinYears;
      } else if (activityLevel === 'ligero') {
        tmb = 655 + 9.56 * WeitghInKg + 1.85 * HeightInCm - 4.68 * AgeinYears;
      } else if (activityLevel === 'moderado') {
        tmb = 66 + 13.75 * WeitghInKg + 5 * HeightInCm - 6.75 * AgeinYears;
      } else if (activityLevel === 'activo') {
        tmb = 66 + 13.75 * WeitghInKg + 5 * HeightInCm - 6.75 * AgeinYears;
      } else if (activityLevel === 'muyActivo') {
        tmb = 66 + 13.75 * WeitghInKg + 5 * HeightInCm - 6.75 * AgeinYears;
      } else if (activityLevel === 'extremadamenteActivo') {
        tmb = 66 + 13.75 * WeitghInKg + 5 * HeightInCm - 6.75 * AgeinYears;
      }

      const caloriesIntake = calculateCaloriesIntake(tmb);
      setCalories(parseInt(caloriesIntake.toFixed(0)));
    }
  };

  const calculateCaloriesIntake = (tmb: number) => {
    if (activityLevel === 'sedentario') {
      return tmb * 1.2;
    } else if (activityLevel === 'ligero') {
      return tmb * 1.375;
    } else if (activityLevel === 'moderado') {
      return tmb * 1.55;
    } else if (activityLevel === 'activo') {
      return tmb * 1.725;
    } else if (activityLevel === 'muyActivo') {
      return tmb * 1.9;
    }

    return tmb;
  };

  const data = [
    {key: '1', value: 'sedentario'},
    {key: '2', value: 'ligero'},
    {key: '3', value: 'moderado'},
    {key: '4', value: 'activo'},
    {key: '5', value: 'muyActivo'},
  ];

  return (
    <ScrollView style={{flex: 1, marginTop: 30}}>
        <View style={{alignItems:'center'}}>

      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Calculadora de Calorias
      </Text>
        </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Peso(kg):</Text>
        <TextInput
          style={{
            width: 200,
            padding: 8,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 100,
            backgroundColor: 'gainsboro',
          }}
          value={weight}
          onChangeText={handleCaloriesChange}
          keyboardType="numeric"
        />

        <Text>Altura (cm):</Text>
        <TextInput
          style={{
            backgroundColor: 'gainsboro',
            width: 200,
            padding: 8,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 100,
          }}
          value={height}
          onChangeText={handlePortionChange}
          keyboardType="numeric"
        />

        <Text>Edad(Años):</Text>
        <TextInput
          style={{
            backgroundColor: 'gainsboro',
            width: 200,
            padding: 8,
            marginBottom: 10,
            marginTop: 10,
            borderRadius: 100,
          }}
          value={age}
          onChangeText={handeleAgeChange}
          keyboardType="numeric"
        />

        <Picker
          selectedValue={activityLevel}
          onValueChange={itemValue => setActivityLevel(itemValue)}
          style={{height: 50, width: 200, marginBottom: 24}}>
          <Picker.Item label="Nivel de Actividad" value="" />
          <Picker.Item
            label="Sedentario (Poco o ningún ejercicio)"
            value="sedentario"
          />
          <Picker.Item
            label="Ligero (Ejercicio 1-3 días a la semana)"
            value="ligero"
          />
          <Picker.Item
            label="Moderado (Ejercicio 3-5 días a la semana)"
            value="moderado"
          />
          <Picker.Item
            label="Activo (Ejercicio 6-7 días a la semana)"
            value="activo"
          />
          <Picker.Item
            label="Muy Activo (Ejercicio 2 veces al dia )"
            value="muyActivo"
          />
        </Picker>

        {/* <Button title="Calcula tus calorias" onPress={calculateCalories} /> */}
        <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        onPress={calculateCalories}>
                        Calcula tus calorias
                    </Text>
          </TouchableOpacity>
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
            color: '#483d8b',
          }}>
          Calories: {calories}
        </Text>

        <Text
          style={{justifyContent: 'center', textAlign: 'justify', padding: 10}}>
          Segun las calorias que gasta, podra seguir las siguientes
          recomendaciones: Para perder peso, se necesita consumir entre 200 y
          500 calorías menos de la que gastas diariamente. siendo así, por el
          contrario, para ganar masa muscular, necesitas ingerir entre 200 y 500
          calorías mas de la que gastas diariamente.
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#483d8b',
            padding: 5,
            alignContent: 'center',
          }}>
          Ejemplo
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#483d8b',
            padding: 5,
            alignContent: 'center',
          }}>
          Perder Grasa: {calories} - 280 Cal
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: '#483d8b',
            padding: 5,
            justifyContent: 'center',
          }}>
          Aumentar musculo: {calories} + 350 Cal
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
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
    width:200

  },
   input: {
      width: '80%',
      height: 60,
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius:100,
    marginTop: 10
    }
})

export default CaloriesCal;
