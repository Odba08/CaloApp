import React, {useRef, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Alert, ImageProps} from 'react-native';
import {useAuthStore} from '../../store/useAuthStore';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Input} from '@rneui/themed';
import {Formik} from 'formik';
import {useQueryClient, useMutation, useQuery} from '@tanstack/react-query';
import {User} from '../../domain/entities/user';
import {updateCreateUser} from '../../actions/auth/user/update';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigate/StackNavigate';
import {getUserById} from '../../actions/auth/user/getUserById';
import PickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CameraAdapter } from '../../configs/adapters/camara-adapter';
import * as Yup from 'yup';
import { StatusBar } from 'expo-status-bar';

interface Props extends StackScreenProps<RootStackParams, 'DataModification'> {}

export const DataModification = ({route, navigation}: Props) => {
  const [isPosting, setIsPosting] = useState(false);
  const [ selectedImage, setSelectedImage] = useState<string | null>(null);
  const userIdrRef = useRef(route.params.id);


  const formSchema = Yup.object().shape({
    Edad: Yup.string()
      .matches(/^(0|[1-9][0-9]*)$/, 'Solo números son permitidos sin espacios y no pueden comenzar con cero')
      .required('Este campo es requerido'),
    Peso: Yup.string()
      .matches(/^(0|[1-9][0-9]*)$/, 'Solo números son permitidos sin espacios  y no pueden comenzar con cero')
      .required('Este campo es requerido'),
    Altura: Yup.string()
      .matches(/^(0|[1-9][0-9]*)$/, 'Solo números son permitidos sin espacios y no pueden comenzar con cero')
      .required('Este campo es requerido'),
  });

  const {logout} = useAuthStore();
  const {data: user} = useQuery({
    queryKey: ['user', userIdrRef.current],
    queryFn: () => getUserById(userIdrRef.current),
  });

  const defaultUser = {
    id: '',
    email: '',
    fullName: '',
    Actividad: '',
    Altura: 0,
    Edad: 0,
    Nivel: '',
    Objetivo: '',
    Peso: 0,
    images: [],
    keyword: '',
  };

  const mutation = useMutation({
    mutationFn: (data: User) => {
      const {email,fullName,keyword, ...userData} = data;
      return updateCreateUser({...userData, id: userIdrRef.current});
    },
    onSuccess(data: User) {
      Alert.alert('Datos actualizados. Ingrese nuevamente');
      logout();
    },
  });


  return (
    <>
    
      <Formik initialValues={user || defaultUser}
      validationSchema={formSchema}
       onSubmit={mutation.mutate}>
        {({handleChange, handleSubmit, values, errors, setFieldValue}) => (
          <ScrollView style={{backgroundColor:'aliceblue'}}>
            <StatusBar style='dark'
             />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: 45,
                
              }}>
              <Text style={styles.title}>Perfil</Text>
              <Pressable
                onPress={ async () => {
                  const photo = await CameraAdapter.takePicture();
                  setFieldValue('images', [...values.images, ...photo]);

                  if (photo.length > 0) {
                    setSelectedImage(photo[0]);
                  }
                }}
                >
                <Image

                source={selectedImage ? {uri: selectedImage} : require('../../../../assets/img/user.png')}
                  style={styles.image}
                />
                <Icon name= "camera" size={35} color="black" style={{position: 'absolute', bottom: 18, right:5}}/>   
              </Pressable>

              <Text style={styles.title2}>Debera ingresar nuevamente sus datos</Text>

              <Input
                inputContainerStyle={styles.input}
                labelStyle={{ textAlign: 'center', color:'slategray' }}
                label="Ingrese su Edad"
                onChangeText={handleChange('Edad')}
                value={values.Edad?.toString()}
                keyboardType="numeric"
                errorMessage={errors.Edad}
              />
              <Input
                inputContainerStyle={styles.input}
                labelStyle={{ textAlign: 'center', color:'slategray' }}
                label="Ingrese su Peso"
                onChangeText={handleChange('Peso')}
                value={values.Peso?.toString()}
                keyboardType="numeric"
                errorMessage={errors.Peso}
              />

              <Input
                inputContainerStyle={styles.input}
                labelStyle={{ textAlign: 'center', color:'slategray' }}
                label="Ingrese su Altura"
                onChangeText={handleChange('Altura')}
                value={values.Altura?.toString()}
                keyboardType="numeric"
                errorMessage={errors.Altura}
              />

              <Text
                style={{color: 'slategray', fontWeight: 'bold', fontSize: 16}}>
                Nivel de Actividad
              </Text>
              <PickerSelect
                placeholder={{label: 'Selecciona tu Actividad', value: null}}
                value={values.Actividad}
                onValueChange={handleChange('Actividad')}
                items={[
                  {label: 'Sedentario', value: 'Sedentario'},
                  {label: 'Intermedio', value: 'Intermedio'},
                  {label: 'Activo', value: 'Activo'},
                ]}
              />

              <Text
                style={{color: 'slategray', fontWeight: 'bold', fontSize: 16}}>
                Selecciona tu Nivel
              </Text>
              <PickerSelect
                placeholder={{label: 'Selecciona tu Nivel', value: null}}
                value={values.Nivel}
                onValueChange={handleChange('Nivel')}
                items={[
                  {label: 'Principiante', value: 'Principiante'},
                  {label: 'Intermedio', value: 'Intermedio'},
                  {label: 'Avanzado', value: 'Avanzado'},
                ]}
              />

              <Text
                style={{color: 'slategray', fontWeight: 'bold', fontSize: 16}}>
                Selecciona tu objetivo
              </Text>
              <PickerSelect
                placeholder={{label: 'Selecciona tu objetivo', value: null}}
                value={values.Objetivo}
                onValueChange={handleChange('Objetivo')}
                items={[
                  {label: 'Aumento', value: 'Aumento'},
                  {label: 'Deficit', value: 'Deficit'},
                ]}
              />

              <View
                style={{
                  backgroundColor: 'green',
                  marginBottom: 50,
                  marginTop: 15,
                }}>
                <Button
                  disabled={
                    isPosting ||
                    !values.Peso ||
                    !values.Altura ||
                    !values.Edad ||
                    !values.Actividad ||
                    !values.Nivel ||
                    !values.Objetivo
                  }
                  onPress={() => handleSubmit()}
                  color="midnightblue"
                  >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      width: 200,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Guardar
                  </Text>
                </Button>
                
              </View>

              {/* <Text>{JSON.stringify(user, null, 2)}</Text> */}
            </View>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 270,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: 'midnightblue'
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom:30,
    color: 'midnightblue'
  },
  row: {
    flexDirection: 'row',
    flex: 0.2,
    marginTop: 0,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  texto: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    fontFamily: 'sans-serif',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth:0, 
    backgroundColor: 'gainsboro', 
    borderRadius: 100, 
    width: '100%', 
    height: 60, 
    marginBottom: 10, 
    marginTop: 10, 
    paddingLeft: 15
  }
});
function setFieldValue(arg0: string, arg1: any) {
  throw new Error('Function not implemented.');
}

