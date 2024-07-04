import { Text } from 'react-native';
import { FoodsApi } from '../../domain/entities/foods';
import { FlatList } from 'react-native-gesture-handler';
import { FoodCard } from './FoodCard';


interface Props {
    foods : FoodsApi[]
}



export const FoodList = ({foods}:Props) => {

    return (
        <FlatList 
        data={foods}
        renderItem={({item}) => (
            <FoodCard foods={item}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal = {true}
        showsHorizontalScrollIndicator={false}

       
      />

      

    )
}

