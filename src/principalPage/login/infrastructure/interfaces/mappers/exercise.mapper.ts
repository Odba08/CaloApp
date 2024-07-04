import { API_URL } from '../../../../../../config';
import { ExerciseApi } from '../../../domain/entities/exercise';
import { Exercise } from '../exercise.response';



export class ExerciseMapper {
    static exercisetoEntity(exercise: Exercise): ExerciseApi {
        return {
            id:            exercise.id,
            title:         exercise.title,
            Explain:       exercise.Explain,
            GrupoMuscular: exercise.GrupoMuscular,
            Series:        exercise.Series,
            Repeticiones:  exercise.Repeticiones,
            images:        exercise.images.map(image => `${API_URL}/files/exercise/${image}`)
        }
    }
}