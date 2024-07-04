import AsyncStorage from '@react-native-async-storage/async-storage';
import {Meal} from '../types';
import {isToday} from 'date-fns/isToday';

const MY_FOOD_KEY = '@MyFood:key';
const MY_TODAY_FOOD_KEY = '@MyTodayFood:key';

const useFoodStorage = () => {
  const saveInfoToStorage = async (storageKey: string, meal: Meal) => {
    try {
      const currentSavedFood = await AsyncStorage.getItem(storageKey);

      if (currentSavedFood !== null) {
        const currentSavedFoodParsed = JSON.parse(currentSavedFood);
        currentSavedFoodParsed.push(meal);

        await AsyncStorage.setItem(
          storageKey,
          JSON.stringify(currentSavedFoodParsed),
        );

        return Promise.resolve();
      }

      await AsyncStorage.setItem(storageKey, JSON.stringify([meal]));

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleSaveTodayCalories = async (totalCalories: number) => {
    try {
      console.log('Saving total calories:', totalCalories);
      await AsyncStorage.setItem('totalCalories', JSON.stringify(totalCalories));
      console.log('Total calories saved');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
  const handleGetTodayCalories = async () => {
    try {
      const totalCalories = await AsyncStorage.getItem('totalCalories');
      console.log('Retrieved total calories:', totalCalories);
      if (totalCalories !== null) {
        return Promise.resolve(JSON.parse(totalCalories));
      }
      return Promise.resolve(0);
    } catch (error) {
      return Promise.reject(error);
    }
  }  

  const handleSaveFood = async ({calories, name, portion}: Meal) => {
    try {
      const currentFood = await handleGetFoods();
      const isFoodExist = currentFood.some((food: Meal) => food.name === name);

      if (isFoodExist) {
        return Promise.reject('El alimento ya se encuentra registrado.');
      }

      const result = await saveInfoToStorage(MY_FOOD_KEY, {
        name,
        calories,
        portion,
      });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleGetFoods = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_FOOD_KEY);
  
      if (foods !== null) {
        const foodsParsed = JSON.parse(foods);
        return Promise.resolve(foodsParsed);
      }
  
      // Si no hay alimentos almacenados, devuelve un array vacío
      return Promise.resolve([]);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  

  const handleSaveDayFoods = async ({calories, name, portion}: Meal) => {
    try {
      const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
        calories,
        name,
        portion,
        date: new Date().toISOString(),
      });

      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleGetToDayFoods = async () => {
    try {
      const foods = await AsyncStorage.getItem(MY_TODAY_FOOD_KEY);

      if (foods !== null) {
        const foodsParsed = JSON.parse(foods) as Meal[];
        return Promise.resolve(
          foodsParsed.filter(meal => meal.date && isToday(new Date(meal.date))),
        );
      }
    } catch (err) {
      return Promise.reject(err);
    }
  };

  const handleRemoveFood = async (name:string) => {
    try {
      const foods = await handleGetFoods();
      const updatedFoods= foods.filter((food: Meal) => food.name !== name);
      await AsyncStorage.setItem(MY_FOOD_KEY, JSON.stringify(updatedFoods));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  const handleRemoveToDayFood = async (index: number) => {
    try {
      const todayFood = await handleGetToDayFoods();
      const filterItem = todayFood?.filter((item: Meal, itemIndex: number) => {
        return itemIndex !== index;
      });

      await AsyncStorage.setItem(MY_TODAY_FOOD_KEY, JSON.stringify(filterItem));
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return {
    onSaveFood: handleSaveFood,
    onGetFoods: handleGetFoods,
    onSaveToDayFood: handleSaveDayFoods,
    onGetToDayFood: handleGetToDayFoods,
    onRomoveTodayFood: handleRemoveToDayFood,
    onRemoveFood: handleRemoveFood,
    onSaveTotalCalories: handleSaveTodayCalories,
    onGetTotalCalories: handleGetTodayCalories,
  };
};

export default useFoodStorage;
