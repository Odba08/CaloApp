import { API_URL } from "../../../../../config";
import { tesloApi } from "../../configs/api/tesloApi";
import { User } from "../../domain/entities/user";
import type { AuthResponse } from "../../infrastructure/interfaces/auth.responses";



const returnUserToken = ( data: AuthResponse & {images : {url:string;}; }[] ) => {

const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    Edad: data.Edad,
    Peso: data.Peso,
    Altura: data.Altura,
    Actividad: data.Actividad,
    Objetivo: data.Objetivo,
    Nivel: data.Nivel,
    keyword: data.keyword,
    images: data.images.map(image => {
        console.log(image);
        return `${API_URL}/files/user/${image.url}`;
    } )



}

return {
    user: user,
    token: data.token
}
};

export const authLogin = async (email: string, password: string) => {
    email = email.toLocaleLowerCase();
    try {
        const {data} = await tesloApi.post<AuthResponse>('/auth/login', {
            email,
            password,
          
        });

        return returnUserToken(data);

    } catch (error) {
        console.log({error});
        return null;
    }
};

export const authCheckStatus =async ( ) => {

    try {
        const {data} = await tesloApi.get<AuthResponse>('/auth/check-status');
        return returnUserToken(data);
    } catch (error) {
        console.log({error});
        return null;
    }
}

export const authIdByEmail = async (email: string) => {
    try {
        const {data} = await tesloApi.get<AuthResponse>(`/auth/${encodeURIComponent(email)}`);
        return returnUserToken(data);
    } catch (error) {
        console.log({error});
        return null;
    }
}


export const authUpdate = async (id:string, newPassword: string) => {
    try {
        const {data} = await tesloApi.patch<AuthResponse>(`/auth/${id}`,{
            newPassword
        });

        return returnUserToken(data);

    } catch (error) {
        console.log({error});
        return null;
        
    }
}

export const authregister = async (email: string, password: string,fullName:string, Edad: number, Peso: number, Altura: number, Objetivo: string, Actividad:string, Nivel:string, keyword: string) => {
    try {
        const {data} = await tesloApi.post<AuthResponse>('/auth/register', {
            email,
            password,
            fullName,
            Edad,
            Peso,
            Altura,
            Objetivo,
            Actividad,
            Nivel,
            keyword,
          
        });

        return returnUserToken(data);

    } catch (error) {
        console.log({error});
        return null;
    }
};