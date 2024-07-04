import { FoodApi } from "../../configs/api/FoodApi";
import type { Foods } from "../../infrastructure/interfaces/food.response";
import { FoodMapper } from "../../infrastructure/interfaces/mappers/foods.mappers";


export const getFoodByPage = async (page: number, limit =100) => {

    /* console.log({page, limit}); */


    try {
        const {data} = await FoodApi.get<Foods[]>(`/foods?offset=0&limit=1000`);

        const foods = data.map(FoodMapper.foodToEntity);
        /* console.log(foods); */
        return foods;
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los alimentos");
        
    }
}