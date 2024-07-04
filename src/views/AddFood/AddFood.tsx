import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Image, Input} from '@rneui/themed';
import AddFoodModal from '../../components/AddFoodModal';
import {useEffect, useState} from 'react';
import useFoodStorage from '../../hooks/useFoodStorage';
import {Meal} from '../../types';
import MealItem from '../../components/MealItem';

const AddFood = () => {
  const [foods, setFoods] = useState<Meal[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const {onGetFoods} = useFoodStorage();

  const loadFoods = async () => {
    try {
      const foodsResponse = await onGetFoods();
      setFoods(foodsResponse);
    } catch (err) {
      console.error(err);
    }
  };

  const onClose = async (shouldUpdate?: boolean) => {
    shouldUpdate && (Alert.alert('Comida guardada exitosamente.'), loadFoods());
    setIsOpen(!isOpen);
  };


  const handleSearchPress = async () => {
    try {
      const result = await onGetFoods();
      setFoods(
        result.filter((item: Meal) =>
          item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        ),
      );
    } catch (err) {
      console.error(err);
      setFoods([]);
    }
  };

  useEffect(() => {
    loadFoods().catch(null);
  }, []);

  return (
    <View style={styles.container}>
     {/*  <Header /> */}
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}> Añade tus alimentos</Text>
        </View>
        <View style={styles.addFoodButtonContainer}>
 
          <Button radius="lg" color="midnightblue">
            <Image
            tintColor="white"
              source={require('../../assets/icons/add.png')}
              style={styles.iconAdd}
              onPress={() => setIsOpen(true)}
            />
          </Button>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Input
            inputContainerStyle={{borderBottomWidth:0}}
            style={styles.input}
            placeholder="Buscar Alimentos"
            value={search}
            onChangeText={(text: string) => setSearch(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Buscar"
            radius="lg"
            color="midnightblue"
            titleStyle={styles.searchButtonTitle}
            onPress={handleSearchPress}
          />
        </View>
      </View>
      <View>
        <AddFoodModal isOpen={isOpen} onClose={onClose} />
      </View>
      <View style={styles.containerFoods}>
        <ScrollView style={styles.content}>
          {foods?.map((meal: Meal) => (
            <MealItem key={`my-meal-item-${meal.name}`} {...meal} 
            isAbleToAdd={true}
            isAbleToRemove={true}
             />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'white',
    flex: 1,
  },
  content: {},
  addFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendContainer: {
    flex: 1,
  },
  addFoodButtonContainer: {
    alignItems: 'flex-end', 
  },
  iconAdd: {
    width: 30,
    height: 30,
    padding: 12,
  },
  addFoodLegend: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
    marginLeft: -12,
  },
  searchButtonTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    marginBottom: 12,
  },
  containerFoods: {
    flex: 1,
  },
  input: {
    height: 60,
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius:100,

  }
});

export default AddFood;
