export interface AuthResponse {
    id: string;
    email: string;
    fullName: string;
    isActivated: boolean;
    roles: string[];
    token: string;
    images: string[];
    Edad:      number;
    Peso:      number;
    Altura:    number;
    Actividad: string;
    Objetivo:  string;
    Nivel:     string;
    keyword:   string;
}