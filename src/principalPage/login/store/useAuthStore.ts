import {create} from 'zustand';
import {User} from '../domain/entities/user';
import {AuthStatus} from '../infrastructure/interfaces/auth.status';
import {authCheckStatus, authIdByEmail, authLogin, authUpdate, authregister} from '../actions/auth/auth';
import {StorageAdapter} from '../configs/adapters/storage-adapter';


export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, fullName: string, Edad: number, Peso: number, Altura: number, Objetivo: string, Actividad:string, Nivel:string, keyword: string) => Promise<boolean>;
  getIdByEmail: (email:string) => Promise<string | undefined>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  getIdByEmail: async (email:string) =>{
    const resp = await authIdByEmail(email);
    if (!resp) {
      return undefined;
    } else {
      return resp.user.id;
    }
  },

  login: async (email: string, password: string) => {
    const resp = await authLogin(email, password);
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return false;
    }
/*     console.log({resp})
    console.log(JSON.stringify(resp, null, 2)); */

    await StorageAdapter.setItem('token', resp.token);

    set({status: 'authenticated', token: resp.token, user: resp.user});

    return true;
  },

  register: async(email:string, password:string, fullName:string, Edad: number, Peso:number, Altura:number, Objetivo:string, Actividad:string,Nivel:string, keyword: string) => {
    const resp = await authregister(email, password, fullName, Edad, Peso, Altura, Objetivo, Actividad, Nivel, keyword);
    if (resp) {
        await StorageAdapter.setItem('token', resp.token);
        set({status: 'authenticated', token: resp.token, user: resp.user});
        return true;
    } else {
        set({status: 'unauthenticated', token: undefined, user: undefined});
        return false;
    }
  },
  
  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return;
    }
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'authenticated', token: resp.token, user: resp.user});
  },

  logout: async () => {
    StorageAdapter.removeItem('token');
    set({status: 'unauthenticated', token: undefined, user: undefined});
  },

}));
