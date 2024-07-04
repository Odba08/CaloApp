import { API_URL } from '../../../../../../config';
import { User } from '../../../domain/entities/user';
import { userApi } from '../user.response';
export class userMapper {

    static usertoEntity(user: User) : userApi {
        return {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
            Edad: user.Edad,
            Peso: user.Peso,
            Altura: user.Altura,
            Actividad: user.Actividad,
            Objetivo: user.Objetivo,
            Nivel: user.Nivel,
            password: user.password,
            keyword: user.keyword,
            images: user.images.map(image => `${API_URL}/files/user/${image}` )
        }
    
    }
}