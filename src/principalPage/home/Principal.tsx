import React from 'react';
import {View, Text, Button} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {getFoodByPage} from '../login/actions/foods/get-food';
import {useQuery} from '@tanstack/react-query';
import LoadingScreen from '../login/screens/loading/LoadingScreen';
import {FoodList} from '../login/components/products/FoodList';
import Poster from './Poster/Poster';
import Ejercicios from '../sidenav/screens/Ejercicios';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ExerciseGroup from './Poster/ExerciseGroups';

const Principal = () => {
  const navigation = useNavigation();
  const {isLoading, data: food = []} = useQuery({
    queryKey: ['food', 0],
    staleTime: 1000 * 60 * 5, // 5 minutes
    queryFn: () => getFoodByPage(0),
  });

  return (
    <>
      <StatusBar style="light" />
      <ScrollView>

      <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            padding: 10,
            color: 'midnightblue'
          }}>
          Planes de entrenamiento semanales
        </Text>

        <Poster navigation={navigation} />

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 10,
            padding: 10,
            color: 'midnightblue'
          }}>
          Alimentos saludables
        </Text>

        {isLoading ? <LoadingScreen /> : <FoodList foods={food} />}
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 10,
            padding: 10,
            color: 'midnightblue'
          }}>
          Grupos musculares
        </Text>

        <ExerciseGroup navigation={navigation}/>
      </ScrollView>
    </>
  );
};

export default Principal;
