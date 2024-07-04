import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import {MealItemsProps} from '../../types';
import {FC, useState} from 'react';
import {Button} from '@rneui/themed';
import useFoodStorage from '../../hooks/useFoodStorage';
import { useNavigation } from '@react-navigation/native';

const MealItem: FC<MealItemsProps> = ({
  name,
  calories,
  portion,
  isAbleToAdd,
  itemPosition,
  onCompleteAddRemove,
  isAbleToRemove,


}) => {
  const {onSaveToDayFood, onRomoveTodayFood, onRemoveFood} = useFoodStorage();
 const navigator = useNavigation();
  const handleAddPress = async () => {
    try {
      if (isAbleToAdd) {
        await onSaveToDayFood({calories, name, portion});
        Alert.alert('Comida agregada al dia.');
        onCompleteAddRemove?.();
      }
    } catch (err) {
      console.error(err);
      return Alert.alert('Comida no agregada.');
    }
  };

  const handleRemovePress = async () => {
    try {
      if (isAbleToRemove) {
        await onRemoveFood(name);
        Alert.alert('Comida eliminada.');
        navigator.goBack();
        onCompleteAddRemove?.();
        
      } else {
        await onRomoveTodayFood(itemPosition ?? -1);
        Alert.alert('Comida eliminada del dia.');
    
        onCompleteAddRemove?.();
      }
    } catch (err) {
      console.error(err);
      return Alert.alert('Comida no eliminada.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '500',
            color: '#FFFFFF',
            marginTop: 10,
          }}>
          Gramos
        </Text>
        <Text style={styles.portion}>{portion}</Text>
      </View>
      <View style={styles.rightContainer}>
        {isAbleToAdd && (
          <Button type="clear" onPress={handleAddPress}>
            <Image
              tintColor="white"
              source={require('../../assets/icons/add.png')}
              style={styles.iconAdd}
            />
          </Button>
        )}
        <Button type="clear" onPress={handleRemovePress}>
          <Image
            tintColor="white"
            source={
              isAbleToRemove
                ? require('../../assets/icons/delete.png')
                : require('../../assets/icons/delete.png')
            }
            style={styles.iconAdd}
          />
        </Button>

        <Text style={styles.calories}>{calories} cal.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'midnightblue',
    flexDirection: 'row',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 22,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  portion: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 13,
  },
  calories: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconAdd: {
    width: 20,
    height: 20,
  },
});

export default MealItem;
