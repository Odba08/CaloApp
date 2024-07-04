import { tesloApi } from "../../../configs/api/tesloApi";
import { userMapper } from "../../../infrastructure/interfaces/mappers/user.mapper";

export const getUserById = async (id: string) => {

    try {
        const {data} = await tesloApi.get(`/auth/${id}`);
        return userMapper.usertoEntity(data);
    } catch (error) {
        throw new Error('Error getting user');
    }
}