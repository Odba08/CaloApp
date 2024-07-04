import { FoodApi } from "../../configs/api/FoodApi";
import { FoodsApi } from "../../domain/entities/foods";
import { Foods } from "../../infrastructure/interfaces/food.response";
import { FoodMapper } from "../../infrastructure/interfaces/mappers/foods.mappers";

export const getFoodById = async (id: string):Promise<FoodsApi> => {

    try {
            const {data} = await FoodApi.get<Foods>(`/foods/${id}`);

            return FoodMapper.foodToEntity(data);

    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener el alimento");
    }

}
