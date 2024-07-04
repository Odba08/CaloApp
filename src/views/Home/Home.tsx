import {View, StyleSheet, TextInput, Text} from 'react-native';
import SubHeader from '../../components/SubHeader';
import useFoodStorage from '../../hooks/useFoodStorage';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {Meal, TodayCaloriesProps} from '../../types';
import TodayCalories from '../../components/TodayCalories';
import TodayMeals from '../../components/TodayMeals';
import {Button, Image, Input} from '@rneui/themed';

/* const totalCaloriesPerDay = 2000; */

const Home = () => {
  const {onGetToDayFood,onSaveTotalCalories,onGetTotalCalories} = useFoodStorage();
  const [toDayFoods, setToDayFoods] = useState<Meal[]>([]);
  const [totalCaloriesPerDay, setTotalCaloriesPerDay] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const [todayStatistics, setTodayStatistics] = useState<TodayCaloriesProps>({
    consumed: 0,
    remaining: 0,
    percentage: 0,
    total: 0,
  });


 /*  useEffect(() => {
    onGetTotalCalories()
      .then(calories => {
        setTotalCaloriesPerDay(calories);
        calculateTodayStatistics(toDayFoods);
      })
      .catch(console.error);
  }, [toDayFoods]); */
  useEffect(() => {
    onGetTotalCalories()
      .then(calories => {
        setTotalCaloriesPerDay(calories);
        calculateTodayStatistics(toDayFoods);
      })
      .catch(console.error);
  }, [totalCaloriesPerDay, toDayFoods]);

  useFocusEffect(
  useCallback(() => {
    onGetTotalCalories()
      .then(calories => {
        setTotalCaloriesPerDay(calories);
        // Mueve cualquier lógica que dependa del valor actualizado de totalCaloriesPerDay aquí.
      })
      .catch(console.error);
  }, [])
);

  const handleInputChange = (text: string) => {
    let filteredText = text.replace(/[^0-9]/g, '');
    if (filteredText.length > 1) {
      filteredText = filteredText.replace(/^0+/, '');
    }
    setInputValue(filteredText);
  };

  const handleInputSubmit = () => {
    const newTotalCalories = Number(inputValue);
    if (!isNaN(newTotalCalories)) {
      onSaveTotalCalories(newTotalCalories)
        .then(() => {
          console.log('Setting total calories per day:', newTotalCalories);
          setTotalCaloriesPerDay(newTotalCalories);
        })
        .catch(console.error);
    }
    setInputValue('');
  };


  const loadToDayFoods = useCallback(async () => {
    try {
      const toDayFoodsResponse = (await onGetToDayFood()) as Meal[];
      calculateTodayStatistics(toDayFoodsResponse);
      setToDayFoods(toDayFoodsResponse);
      return Promise.resolve(toDayFoodsResponse);
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  }, []);

  const calculateTodayStatistics = (meals: Meal[]) => {
    try {
      const caloriesConsumed = meals?.reduce(
        (acum, curr) => acum + Number(curr.calories),
        0,
      );

      const remeainingCalories = totalCaloriesPerDay - caloriesConsumed;

      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100;

      setTodayStatistics({
        consumed: caloriesConsumed,
        remaining: remeainingCalories,
        percentage,
        total: totalCaloriesPerDay,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadToDayFoods().catch(null);
    }, [loadToDayFoods]),
  );

 
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <SubHeader />
    
      <TodayCalories {...todayStatistics} />

      <Text style={{marginTop:30, fontWeight: 'bold', fontSize: 20}}>
        Ingresa Tus calorias
      </Text>
      <View style= {{flexDirection: 'row'}}>

      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue}
        placeholder="Introduce las calorías totales por día"
        keyboardType="numeric"
      />

      <View style={styles.addFoodButtonContainer}>
      {/* <Button onPress={handleInputSubmit} title="Guardar" /> */}
 
          <Button radius='lg' color="midnightblue">
            <Image
            tintColor="white"
              source={require('../../assets/icons/add.png')}
              style={styles.iconAdd}
              onPress={handleInputSubmit}
            />
          </Button>
        </View>

      </View>
      <TodayMeals
        foods={toDayFoods}
        onCompleteAddRemove={() => loadToDayFoods()}
      />


    </View>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  input: {
    height: 60,
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius:100,
    marginTop: 10
  },
  addFoodButtonContainer: {
    alignItems: 'flex-end', 
    justifyContent: 'center',
    flex: 1,
    marginTop:10
  },
  iconAdd: {
    width: 35,
    height: 35,

  },
});

export default Home;
