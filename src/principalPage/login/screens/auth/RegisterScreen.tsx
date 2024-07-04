import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RootStackParams} from '../../../navigate/StackNavigate';
import {useAuthStore} from '../../store/useAuthStore';
import {useState} from 'react';
import { Icon } from '@rneui/themed';


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> {}

const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const {register} = useAuthStore();
  const [isPosting, SetIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const handleRegister = (text: string ) => {
    const filteredText = text.replace(/[^a-zA-Z\s]/g, '');
    setForm({...form, fullName: filteredText})
  }
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showpassword, setShowPassword] =useState(false);

  const switchPassword = () => {
    setShowPassword(!showpassword)
  }

  const onRegister = async () => {
    if (
      form.email.length === 0 ||
      form.password.length === 0 ||
      form.fullName.length === 0
    ) {
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@#$%&+%!?¡¿]).+$/;
    if (!passwordRegex.test(form.password)) {
      setError(
        'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.',
      );
      Alert.alert('Ingrese una contraseña valida.');
      return;
    } else {
      setError('');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setEmailError(
        'El correo electronico debera poseer una direccion valida.',
      );
      Alert.alert('Ingrese un correo valido.');
      return;
    } else {
      setEmailError('');
    }

    if (
      passwordRegex.test(form.password) &&
      form.email.length > 0 &&
      form.password.length > 0 &&
      form.fullName.length > 0
    ) {
      navigation.navigate('SecondRegisterScreen', {form: form});
      return;
    }
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: height * 0.25, alignItems: 'center'}}>
          <Text style={styles.primero}>Crea tu cuenta</Text>
          <Text style={{color:'midnightblue',fontWeight:'bold'}}>Por favor, rellene los campos</Text>
        </View>

        <View style={{marginTop: 20}}>
          <TextInput
            placeholder="Nombre completo"
            style={styles.input}
            value={form.fullName}
            onChangeText={handleRegister}
          />
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={form.email}
            onChangeText={email => {
              setError(''), setForm({...form, email});
            }}
          />
          {emailError.length > 0 && (
            <Text style={{color: 'red'}}>{emailError}</Text>
          )}
          <View style= {{flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            backgroundColor: 'gainsboro',
                            borderRadius:100,
                            marginTop:10,
                            padding:12
                            }}>

          <TextInput
            secureTextEntry={!showpassword}
            autoCapitalize="none"
            placeholder="Contraseña"
            style={styles.input2}
            value={form.password}
            onChangeText={password => {
              setEmailError(''), setForm({...form, password});
            }}
          />
          <TouchableOpacity onPress={switchPassword}>
          <Icon name = {showpassword ? 'visibility-off' : 'visibility'}  style={{marginRight: 0}}/>
          </TouchableOpacity>
          </View>
          {error.length > 0 && <Text style={{color: 'red'}}>{error}</Text>}

          <View style={{marginTop: 10}}>
            {/* <Button
              disabled={
                isPosting || !form.email || !form.password || !form.fullName
              }
              onPress={onRegister}
              title="Siguiente"
            /> */}
            <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        disabled={isPosting}
                        onPress={onRegister}>
                        Siguiente
                    </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iniciarsesion}>
            <Text>¿Ya tienes cuenta?</Text>

            <Text
              onPress={() => navigation.goBack()}
              style={{color: '#00008b', marginLeft: 5, fontWeight: 'bold'}}>
              Regresar
            </Text>
          </View>

          <View style={{marginRight: 10}}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={isDrawerOpen}
              onRequestClose={() => {
                setIsDrawerOpen(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Recomendaciones</Text>

              <View >

                    <Text style= {{marginBottom: 5, textAlign:'center'}}> El correo debera ser una direccion valida</Text>
                    <Text style= {{marginBottom: 5, textAlign:'center'}}> La contraseña debe tener al menos 8 caracteres</Text>
                    <Text style= {{marginBottom: 5, textAlign:'center'}}> La contraseña debe tener al menos una letra mayúscula </Text>
                    <Text style= {{marginBottom: 5, textAlign:'center'}}> La contraseña debe tener al menos un número </Text>
                    <Text style= {{marginBottom: 5, textAlign:'center'}}> La contraseña debe tener al menos un caracter especial</Text>
                    <Text style= {{marginBottom: 5, fontWeight:'bold', fontSize:17, textAlign:'center'}}> El nombre y correo electronico no podran ser modificados</Text>


              </View>

                 
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setIsDrawerOpen(false)}>
                    <Text style={styles.textStyle}>Cerrar Ventana</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Pressable
              onPress={() => {
                setIsDrawerOpen(true);
              }}>
              <View style={styles.iniciarsesion}>
                <Text
                  style={{color: '#00008b', marginLeft: 5, fontWeight: 'bold'}}>
                  {' '}
                  Recomendaciones
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'aliceblue'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonClose: {
    backgroundColor: 'midnightblue',

  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'midnightblue',
  },
  primero: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'midnightblue'
  },
  input: {
    height: 60,
    padding: 20,
    backgroundColor: 'gainsboro',
    borderRadius:100,
    marginTop: 10
  },
  input2: {
    height: 40,
    padding: 10,
    width: '90%',
    fontSize:15
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

export default RegisterScreen;
