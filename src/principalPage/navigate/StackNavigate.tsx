import React from 'react';
import Principal from '../home/Principal';
import Calories from '../calories/Calories';
import UserData from '../login/Userdata';
import {createStackNavigator} from '@react-navigation/stack';
import AddFood from '../../views/AddFood/AddFood';
import Home from '../../views/Home/Home';
import LoginScreen from '../login/screens/auth/LoginScreen';
import RegisterScreen from '../login/screens/auth/RegisterScreen';
import LoadingScreen from '../login/screens/loading/LoadingScreen';
import Routes from '../routes/Routes';
import { AuthProvider } from '../login/providers/AuthProvider';
import CaloriesCalculadora from '../sidenav/Calculadora';
import Alimentos from '../sidenav/screens/Alimentos';
import Ejercicios from '../sidenav/screens/Ejercicios';
import DetailsScreen from '../login/screens/details/details';
import CincoDias from '../sidenav/screens/planes-entrenamiento/cinco-dias';
import CuatroDias from '../sidenav/screens/planes-entrenamiento/cuatro-dias';
import TresDias from '../sidenav/screens/planes-entrenamiento/tres-dias';
import Funcional from '../sidenav/screens/planes-entrenamiento/funcional';
import ExerciseDetailsScreen from '../login/screens/details/exercisedetail';
import CaloriesCal from '../sidenav/CaloriesCal';
import SecondRegisterScreen from '../login/screens/auth/SecondRegister';
import { DataModification } from '../login/screens/User/DataModification';
import  ChangePasswordScreen  from '../login/screens/auth/ChangePasswordScreen';
import { EmailById } from '../login/screens/auth/EmailById';
import { RecoverIdData } from '../login/screens/auth/RecoverIdData';
import { User } from '../login/domain/entities/user';
import { Keyword } from '../login/screens/auth/keyword';
import { InicialScreen } from '../login/screens/auth/InicialScreen';
import Chest from '../login/components/rutines/chest';
import Back from '../login/components/rutines/back';
import Triceps from '../login/components/rutines/triceps';
import Biceps from '../login/components/rutines/biceps';
import Quads from '../login/components/rutines/cuadriceps';
import Femoral from '../login/components/rutines/femoral';
import Abdominales from '../login/components/rutines/abdominales';
import Shoulder from '../login/components/rutines/shoulder';


export type RootStackParams = {
  Inicial: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  Principal: undefined;
  ProductScreen: {productId: string};
  LoadingScreen: undefined;
  Calories: undefined;
  AddFood: undefined;
  Login: undefined;
  Calculadora: undefined;
  Alimentos: undefined;
  Ejercicios: undefined;
  DataModification: {id : string};
  RecoverIdData: undefined;
  Userdata: { user: string };
  details: { foods: string };
  exercisedetail: { exercises: string };
  CincoDias: undefined;
  CuatroDias: undefined;
  TresDias: undefined;
  Funcional: undefined;
  CalculadoraCalorias: undefined;
  SecondRegisterScreen: { form: { email: string; password: string; fullName: string; }};
  ChangePasswordScreen: { id: string };
  EmailById: undefined;
  Keyword: {id: string};
  Chest: undefined;
  back: undefined;
  triceps: undefined;
  biceps: undefined;
  quads: undefined;
  femoral: undefined;
  abdominales: undefined;
  shoulder: undefined;
  

};
const Stack = createStackNavigator<RootStackParams>();

const LoginAndRegisterNavigator = () => {
  return (
  
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen name="Principal" component={Routes} />
      <Stack.Screen name='Inicial' component = {InicialScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="SecondRegisterScreen" component ={SecondRegisterScreen} />
      <Stack.Screen name="DataModification" component={DataModification} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
      <Stack.Screen name='EmailById' component= {EmailById} />
      <Stack.Screen name='Keyword' component= {Keyword} />
      <Stack.Screen name='RecoverIdData' component= {RecoverIdData} />
      
    </Stack.Navigator>
        
  );
};

const StackNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Calories" component={Calories} />
      <Stack.Screen name="Calculadora" component={CaloriesCalculadora} />
      <Stack.Screen name="CalculadoraCalorias" component={CaloriesCal} />
      <Stack.Screen name="Alimentos" component={Alimentos} options={{
        headerTitle: 'Lista de alimentos',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }
        }}/>
      <Stack.Screen name="Ejercicios" component={Ejercicios} options={{
        headerTitle: 'Lista de ejercicios',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', 
          }}}/>
      <Stack.Screen name="details" component={DetailsScreen} options={{headerTitle: 'Detalles del producto',
      headerTintColor: 'midnightblue',
      headerTitleAlign: 'center',
      headerTitleStyle: {
      fontWeight: 'bold', }

      }}/>
      <Stack.Screen name="exercisedetail" component={ExerciseDetailsScreen} options={{
         headerTitle: 'Detalles del ejercicio',
         headerTintColor: 'midnightblue',
         headerTitleAlign: 'center',
         headerTitleStyle: {
         fontWeight: 'bold', }
      }}/>
      <Stack.Screen name="CincoDias" component={CincoDias} options={{
        headerTitle: 'Plan de entrenamiento 5 días',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }
      }}/>
      <Stack.Screen name="CuatroDias" component={CuatroDias} options={{
        headerTitle: 'Plan de entrenamiento 4 días',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="TresDias" component={TresDias} options={{
         headerTitle: 'Plan de entrenamiento 3 días',
         headerTintColor: 'midnightblue',
         headerTitleAlign: 'center',
         headerTitleStyle: {
         fontWeight: 'bold', }
      }} />
      <Stack.Screen name="Funcional" component={Funcional} options={{
        headerTitle: 'Plan de entrenamiento',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }
      }}/>
      <Stack.Screen name="DataModification" component={DataModification} />
      <Stack.Screen name="Chest" component={Chest} options={{
        headerTitle: 'Ejercicios para Pectoral',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="back" component={Back} 
      options={{
        headerTitle: 'Ejercicios para espalda',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="triceps" component={Triceps} 
      options={{
        headerTitle: 'Ejercicios para triceps',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="biceps" component={Biceps} 
      options={{
        headerTitle: 'Ejercicios para biceps',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="quads" component={Quads} 
      options={{
        headerTitle: 'Ejercicios para cuadriceps',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="femoral" component={Femoral} 
      options={{
        headerTitle: 'Ejercicios para femoral',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="abdominales" component={Abdominales} 
      options={{
        headerTitle: 'Ejercicios para abdominales',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>
      <Stack.Screen name="shoulder" component={Shoulder} 
      options={{
        headerTitle: 'Ejercicios para hombros',
        headerTintColor: 'midnightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
        fontWeight: 'bold', }}}/>

    </Stack.Navigator>
  );
};

const CaloriesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Calories"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddFood" component={AddFood} options={{headerTitle: ''}}/>
      <Stack.Screen name="DataModification" component={DataModification} />
    </Stack.Navigator>
  );
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Userdata" component={UserData} />
      <Stack.Screen name="DataModification" component={DataModification} />
    </Stack.Navigator>
  );
};

export {
  StackNavigate,
  CaloriesNavigator,
  LoginNavigator,
  LoginAndRegisterNavigator,
};
