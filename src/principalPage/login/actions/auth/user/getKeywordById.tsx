import { tesloApi } from "../../../configs/api/tesloApi";
import { userMapper } from "../../../infrastructure/interfaces/mappers/user.mapper";

export const getKeywordById = async (id: string, keyword:string) => {

    try {
        const {data} = await tesloApi.post(`/auth/${id}/${keyword}`);
        return userMapper.usertoEntity(data);
    } catch (error) {
        throw new Error('Error getting user');
    }
}