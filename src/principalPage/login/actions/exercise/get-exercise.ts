import { FoodApi } from "../../configs/api/FoodApi";
import { Exercise } from "../../infrastructure/interfaces/exercise.response";
import { ExerciseMapper } from "../../infrastructure/interfaces/mappers/exercise.mapper";



export const getExerciseByPage = async (page: number, limit =100) => {


    try {
        const {data} = await FoodApi.get<Exercise[]>(`/exercises?offset=0&limit=1000`);
        const exercises = data.map(ExerciseMapper.exercisetoEntity);
        console.log(exercises);
        return exercises;
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener los ejercicios");
        
    }
}