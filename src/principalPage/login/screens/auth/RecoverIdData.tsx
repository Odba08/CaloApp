import React from 'react';
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
import {useAuthStore} from '../../store/useAuthStore';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigate/StackNavigate';

interface Props extends StackScreenProps<RootStackParams, 'RecoverIdData'> {}

export const RecoverIdData = ({navigation}: Props) => {
  const {getIdByEmail} = useAuthStore();
  const [isPosting, SetIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    newPassword: '',
  });
  const [obtainedId, setObtainedId] = useState<string>('');
  const {height} = useWindowDimensions();

  const obtenerId = async () => {
    if (form.email.length === 0) {
      return;
    }

    SetIsPosting(true);
    const id = await getIdByEmail(form.email);
    SetIsPosting(false);

    if (id) {
      setObtainedId(id);
      console.log(id);
      navigation.replace('DataModification', {id: id});
      return;
    } else {
      Alert.alert('El correo electronico no existe');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingTop: height * 0.29}}>
          <Text style={styles.primero}>Modificación</Text>
          <Text
            style={{
              color: 'midnightblue',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Para confirmar que es usted, porfavor ingrese su correo electronico.
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <TextInput
            placeholder="Correo"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            style={styles.input}
          />

          <View style={{marginTop: 10}}>
            {/* <Button disabled={isPosting} onPress={obtenerId} title="Enviar" /> */}

            <TouchableOpacity style={styles.Button}>
              <Text
                style={styles.Texto}
                disabled={isPosting}
                onPress={obtenerId}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iniciarsesion}>
            <Text>¿Deseas regresar?</Text>

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
    backgroundColor: 'aliceblue',
  },
  primero: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'midnightblue',
    textAlign: 'center',
  },
  input: {
    height: 60,
    backgroundColor: 'gainsboro',
    borderRadius: 100,
    padding: 20,
    marginTop: 10,
    fontSize: 15,
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
