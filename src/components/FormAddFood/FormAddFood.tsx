import {Button, Input} from '@rneui/themed';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useState, FC, useEffect} from 'react';
import {AddFoodModalProps} from '../../types';
import useFoodStorage from '../../hooks/useFoodStorage';

const FormAddFood: FC<AddFoodModalProps> = ({isOpen, onClose}) => {
  const {onSaveFood} = useFoodStorage();
  const [calories, setCalories] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [portion, setPortion] = useState<string>('');
  const handlePortionChange = (text: string) => {
    let filteredText = text.replace(/[^0-9]/g, '');
    if (filteredText.length > 1) {
      filteredText = filteredText.replace(/^0+/, '');
    }
    setPortion(filteredText);
  };
  const handleCaloriesChange = (text: string) => {
    let filteredText = text.replace(/[^0-9]/g, '');

    if (filteredText.length > 1) {
      filteredText = filteredText.replace(/^0+/, '');
    }
    setCalories(filteredText);
  };
  const handleNameChange = (text: string) => {
    const filteredText = text.replace(/[^a-zA-Z]/g, '');

    setName(filteredText);
  }

  const handleSubmit = async () => {
    try {
      await onSaveFood({calories, name, portion});

      onClose(true);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setCalories('');
    setName('');
    setPortion('');
  }, [isOpen]);

  return (
    <View>
      <View style={styles.fromItem}>
        <View style={styles.inputContainer}>
          <Input value={name} onChangeText={handleNameChange} />
        </View>
        <View style={styles.legendContainer}>
          <Text style={styles.legend}>Nombre</Text>
        </View>
      </View>
      <View style={styles.fromItem}>
        <View style={styles.inputContainer}>
          <Input
            value={calories}
            onChangeText={handleCaloriesChange}
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.legendContainer}>
          <Text style={styles.legend}>Calorias</Text>
        </View>
      </View>
      <View style={styles.fromItem}>
        <View style={styles.inputContainer}>
          <Input
            value={portion}
            onChangeText={handlePortionChange}
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.legendContainer}>
          <Text style={styles.legend}>Gramos</Text>
        </View>
      </View>
      <View style={styles.buttonAddContainer}>
        <Button
          radius="lg"
          color="#4ecb71"
          disabled={!calories.trim() || !name.trim() || !portion.trim()}
          onPress={handleSubmit}>
          <Image
            tintColor="white"
            source={require('../../assets/icons/add.png')}
            style={styles.iconAdd}
          />
          Agregar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fromItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: '500',
  },
  buttonAddContainer: {
    alignItems: 'flex-end',
  },
  iconAdd: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default FormAddFood;
