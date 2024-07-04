import { FoodApi } from "../../configs/api/FoodApi";
import { ExerciseApi } from "../../domain/entities/exercise";
import { Exercise } from "../../infrastructure/interfaces/exercise.response";
import { ExerciseMapper } from "../../infrastructure/interfaces/mappers/exercise.mapper";


export const getExerciseById = async (id: string): Promise<ExerciseApi> =>{

    try {
            const {data} =await FoodApi.get<Exercise>(`/exercises/${id}`);
            return ExerciseMapper.exercisetoEntity(data);
    } catch (error) {
        throw new Error("Error al obtener el ejercicio");
    }
}