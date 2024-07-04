import { Foods } from '../food.response';
import { FoodsApi } from '../../../domain/entities/foods';
import { API_URL } from '../../../../../../config';


export class FoodMapper {

    static foodToEntity(foods: Foods):FoodsApi{
        return{
            id: foods.id,
            title: foods.title,
            Calorias: foods.Calorias,
            Description: foods.Description,
            Gramos: foods.Gramos,
            Proteina: foods.Proteina,
            images:foods.images.map(image => `${API_URL}/files/food/${image}` )
        }
    }
}