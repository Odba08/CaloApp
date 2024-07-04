export interface userApi {
    id: string;
    email: string;
    fullName: string;
    password?: string;
    Edad:      number;
    Peso:      number;
    Altura:    number;
    Actividad: string;
    Objetivo:  string;
    Nivel:     string;
    images: string[];
    keyword: string;
}