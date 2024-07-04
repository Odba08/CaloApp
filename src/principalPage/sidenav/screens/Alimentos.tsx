import { useQuery } from '@tanstack/react-query';
import { getFoodByPage } from '../../login/actions/foods/get-food';
import { ListComplete } from '../../login/components/List/ListFoodComplete';
import LoadingScreen from '../../login/screens/loading/LoadingScreen';
import {View} from 'react-native';


const Alimentos = () => {
    const {isLoading, data: food = []} = useQuery({
        queryKey: ['food', 0],
        staleTime: 1000 * 60 * 5, // 5 minutes
        queryFn: () => getFoodByPage(0),
      });

return (
<View>

    {isLoading ? <LoadingScreen/> : <ListComplete foods={food} />}

</View>
)

}




export default Alimentos;