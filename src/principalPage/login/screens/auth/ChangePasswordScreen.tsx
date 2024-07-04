import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Alert,
  BackHandler,
} from 'react-native';
import * as yup from 'yup';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigate/StackNavigate';
import {useMutation, useQuery} from '@tanstack/react-query';
import {getUserById} from '../../actions/auth/user/getUserById';
import {updateCreateUser} from '../../actions/auth/user/update';
import {User} from '../../domain/entities/user';
import {Formik} from 'formik';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props
  extends StackScreenProps<RootStackParams, 'ChangePasswordScreen'> {}

const ChangePasswordScreen = ({route, navigation}: Props) => {
  const userIdRef = useRef(route.params.id);
  const {height} = useWindowDimensions();
  const {data: user} = useQuery({
    queryKey: ['user', userIdRef.current],
    queryFn: () => getUserById(userIdRef.current),
  });

  const [showPassword, setShowPassword] = useState(false);

  const SwitchPassword = () => {
    setShowPassword(!showPassword);
  };

  const mutation = useMutation({
    mutationFn: (password: string) =>
      updateCreateUser({password, id: userIdRef.current}),
    onSuccess(data: User) {
      Alert.alert('Contraseña actualizada');
      navigation.navigate('LoginScreen');
    },
  });

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Alerta', 'Desea salir de la aplicacion?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Si',
          onPress: () => {
            navigation.navigate('LoginScreen');
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .required('Campo requerido')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@#$%&+%]).+$/,
        'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un caracter especial',
      )
      .label('Contraseña'),
  });
  return (
    <Formik
      initialValues={{password: user?.password || ''}}
      validationSchema={validationSchema}
      onSubmit={values => mutation.mutate(values.password)}>
      {({handleChange, handleSubmit, values, errors}) => (
        <View style={styles.container}>
          <View style={{paddingTop: height * 0.1, alignItems: 'center'}}>
            <Text style={styles.primero}>Recuperación de contraseña</Text>
            <Text style={{color: 'midnightblue', fontWeight: 'bold'}}>
              Por favor, ingrese su nueva contraseña.
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              backgroundColor: 'gainsboro',
              borderRadius: 100,
              marginTop: 30,
              padding: 12,
            }}>
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="Nueva Contraseña"
              onChangeText={handleChange('password')}
              value={values.password}
              style={styles.input}
            />
            <TouchableOpacity onPress={SwitchPassword}>
              <Icon name={showPassword ? 'visibility-off' : 'visibility'} />
            </TouchableOpacity>
          </View>
          {errors.password && (
            <Text style={{color: 'red'}}>{errors.password}</Text>
          )}
          <View style={{marginTop: 10}}>
            {/*   <Button
              disabled={!values.password}
              title="Recuperar Contraseña"
              onPress={() => handleSubmit()}
            /> */}

            <TouchableOpacity style={styles.Button}>
              <Text
                style={styles.Texto}
                disabled={!values.password}
                onPress={() => handleSubmit()}>
                Recuperar Contraseña
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iniciarsesion}>
            <Text>¿No tienes cuenta?</Text>

            <Text
              onPress={() => navigation.navigate('RegisterScreen')}
              style={{color: '#00008b', marginLeft: 5, fontWeight: 'bold'}}>
              Registrate
            </Text>
          </View>

          <View style={styles.iniciarsesion}>
            <Text>¿Ya tienes cuenta?</Text>

            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={{color: '#00008b', marginLeft: 5, fontWeight: 'bold'}}>
              Regresar
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'aliceblue',
  },
  primero: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'midnightblue',
    textAlign: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%',
  },
  iniciarsesion: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  Texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
  Button: {
    backgroundColor: 'midnightblue',
    padding: 15,
    borderRadius: 100,
    marginHorizontal: 0,
    marginVertical: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChangePasswordScreen;
