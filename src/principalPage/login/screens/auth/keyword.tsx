import React, { useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigate/StackNavigate';
import { getKeywordById } from '../../actions/auth/user/getKeywordById';
import { Icon } from '@rneui/themed';

interface Props extends StackScreenProps<RootStackParams, 'Keyword'> {}

export const Keyword = ({navigation, route}: Props) => {
  const userIdRef = useRef(route.params.id);
  const [isPosting, SetIsPosting] = useState(false);
  const [form, setForm] = useState({
    keyword: '',

  });
  const [showpassword, setShowpassword] = useState(false);

    const switShowPassword = () => {
        setShowpassword(!showpassword);
    }

  const {height} = useWindowDimensions();
  const obtenerkeyword = async () => {
    if (form.keyword.length === 0) {
      return;
    }
    SetIsPosting(true);

    try {
      const user = await getKeywordById(userIdRef.current, form.keyword);
      SetIsPosting(false);

      if(user){
        navigation.replace('ChangePasswordScreen', {id: userIdRef.current});
        return;
      }else {
        Alert.alert('La palabra clave no es correcta');
        return;
      }
    } catch (error) {
      SetIsPosting(false);
      Alert.alert('La palabra clave no es correcta');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: height * 0.29, alignItems:'center'}}>
          <Text style={styles.primero}>Verificación</Text>
          <Text style={{color:'midnightblue', fontWeight: 'bold', textAlign:'center'}}>
            Por favor, ingrese su palabra secreta para recuperar su contraseña.
          </Text>
        </View>

        <View style={{marginTop: 20}}>

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
            placeholder="Ingrese su palabra clave"
            keyboardType="default"
            autoCapitalize="none"
            value={form.keyword}
            onChangeText={keyword => setForm({...form, keyword})}
            style={styles.input}
          />
          <TouchableOpacity onPress={switShowPassword}>
                        <Icon name = {showpassword ? 'visibility-off' : 'visibility'}  style={{marginRight: 7}}/>
                        </TouchableOpacity>

          </View>

          <View style={{marginTop: 10}}>
            {/* <Button disabled={isPosting} onPress={obtenerkeyword} title="Enviar" /> */}

            <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        disabled={isPosting}
                        onPress={obtenerkeyword}>
                        Ingresar
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
              onPress={() => navigation.goBack()}
              style={{color: '#00008b', marginLeft: 5, fontWeight: 'bold'}}>
              Regresar
            </Text>
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
  primero: {
    fontSize: 40,
      fontWeight: 'bold',
      color: 'midnightblue'
  },
  input: {
    height: 40,
    padding: 10,
    width: '90%'
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
