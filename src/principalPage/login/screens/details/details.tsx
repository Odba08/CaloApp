import React from 'react';
import { Text, Image, View, useWindowDimensions } from 'react-native';
import { RootStackParams } from '../../../navigate/StackNavigate';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { getFoodById } from '../../actions/foods/get-food-by-id';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RootStackParams, 'details'> {};


const DetailsScreen = ({ route }: Props) => {
    const { foods } = route.params;
    const {width} = useWindowDimensions();
    
    const {data: food } = useQuery({
        queryKey: ['food', foods],
        queryFn: () => getFoodById(foods)
    });

  return (

    <>
    <ScrollView>

    <View>
    <Image
        source={{uri: food?.images[0]}}
        style={{width, height: 350, borderBottomRightRadius: 25, borderBottomLeftRadius: 25}}
        />
    </View>
  
    <View>
    
{/*     <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 10,}}>Detalles del producto</Text>
 */}
    <Text style={{fontSize: 22, fontWeight:'bold', color: 'midnightblue', textAlign: 'center', padding: 5}}> {food?.title}</Text>
    <Text style={{textAlign: 'justify', padding: 7, fontSize: 18}}> {food?.Description}</Text>

    <Text style={{fontSize: 22, fontWeight:'bold', color: 'midnightblue', textAlign: 'center', padding: 5}}> Nutrientes del alimento.</Text>

    <Text style={{fontSize: 20, fontWeight: 'bold', padding: 8}}>Proteina: {food?.Proteina}</Text>
    <Text style={{fontSize: 20, fontWeight: 'bold', padding: 8}}>Gramos: {food?.Gramos}</Text>
    <Text style={{fontSize: 20, fontWeight: 'bold', padding: 8}}>Calorias: {food?.Calorias}</Text>

   </View>
        </ScrollView>
        </>

  );
};

export default DetailsScreen;