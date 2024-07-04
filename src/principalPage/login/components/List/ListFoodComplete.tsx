import { SectionList, Text } from 'react-native';
import { FoodsApi } from '../../domain/entities/foods';
import { FlatList } from 'react-native-gesture-handler';
import { FoodCard } from '../products/FoodCard';
import { FoodCardComplete } from './ListCard/ListCompleteFoodCard';



interface Props {
    foods : FoodsApi[]
}



export const ListComplete = ({foods}:Props) => {

    return (
        <FlatList
            data={foods}
            renderItem={({item}) => (
                <FoodCardComplete foods={item}/>
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />
    )
}

