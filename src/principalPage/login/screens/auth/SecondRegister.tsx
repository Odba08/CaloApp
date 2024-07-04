import { StackScreenProps } from "@react-navigation/stack";
import { Text, View, StyleSheet, useWindowDimensions, TextInput, Button, Alert, TouchableOpacity, Pressable, Modal} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RootStackParams } from "../../../navigate/StackNavigate";
import { useAuthStore } from "../../store/useAuthStore";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Keyword } from './keyword';
import { Icon } from "@rneui/themed";

interface Props extends StackScreenProps<RootStackParams, 'SecondRegisterScreen'> {}


const SecondRegisterScreen = ({ navigation, route }:Props) => {
    const { form: previousForm } = route.params;
    const { height } = useWindowDimensions();
    const {register} = useAuthStore();
    const [isPosting, SetIsPosting] = useState(false);
    const [form,setForm] = useState({
        ...previousForm,
        Altura: 0,
        Peso: 0,
        Edad: 0,
        Actividad: '',
        Objetivo: '',
        Nivel: '',
        keyword: '',
    });
    const [showpassword, setShowpassword] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const switShowPassword = () => {
        setShowpassword(!showpassword);
    }


    const onRegister = async() => {
        if (previousForm.email.length === 0 || previousForm.password.length === 0 || previousForm.fullName.length === 0  ) {
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(previousForm.password)) {
            Alert.alert('La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
            return;
        }
        SetIsPosting(true);
        const wasSuccesful = await register(previousForm.email, previousForm.password, previousForm.fullName,form.Edad, form.Peso, form.Altura, form.Actividad, form.Objetivo, form.Nivel, form.keyword);
        SetIsPosting(false);
        if (wasSuccesful) {
            navigation.navigate("LoginScreen");
            Alert.alert('Usuario creado exitosamente');
            return;
        }

        if (form.Actividad === '' || form.Objetivo === '' || form.Nivel === '') {
            Alert.alert('Complete todos los campos');
            return;
        }

        Alert.alert('Usuario ya existe');
        console.log(form)
        
    }

    return (

        <View style={styles.container} >
            <ScrollView>

                <View style={{ paddingTop: height * 0.08, alignItems:'center'}}>
                    <Text style={styles.primero}>Ingresa tus datos</Text>
                    <Text style={{color:'midnightblue',fontWeight:'bold'}}>Por favor, rellene los campos</Text>
                </View>

                <View style={{ marginTop: 20 }}>

                
                    <TextInput
                        placeholder="Edad"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                        value={form.Edad !== 0 ? form.Edad.toString() : ''}
                        onChangeText={(Edad) => setForm({ ...form, Edad: Edad !== '' ? parseInt(Edad) : 0 })}// Parse Edad to an integer
                    />

                    <TextInput
                        placeholder="Peso(Kg)"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                        value={form.Peso !== 0 ? form.Peso.toString(): ''}
                        onChangeText={(Peso) => setForm({ ...form, Peso: Peso !== '' ? parseInt(Peso) : 0 })}
                    />

                    <TextInput
                        placeholder="Altura(cm)"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        style={styles.input}
                        value={form.Altura !== 0 ? form.Altura.toString() : ''}
                        onChangeText={(Altura) => setForm({ ...form, Altura: Altura !== '' ? parseInt(Altura) : 0 })}
                    />

                    <Picker
                    selectedValue={form.Actividad}
                    onValueChange={(itemValue) => setForm({ ...form, Actividad: itemValue })}
                    style={styles.picker}
                    >
                    <Picker.Item label="Nivel de Actividad" value="" />
                    <Picker.Item label="Sedentario (Sin actividad fisica)" value="Sedentario" />
                    <Picker.Item label="Intermedio (Actividad fisica moderada)" value="Intermedio" />
                    <Picker.Item label="Activo (Alta actividad fisica)" value="Activo" />
            
                    </Picker>

    
                    <Picker
                    selectedValue={form.Objetivo}
                    onValueChange={(itemValue) => setForm({ ...form, Objetivo: itemValue })}
                    style={styles.picker}
                    >
                    <Picker.Item label="Selecciona tu objetivo" value="" />
                    <Picker.Item label="Aumento (Aumentar masa muscular)" value="Aumento" />
                    <Picker.Item label="Deficit (Bajar Peso/Grasa)" value="Deficit" />
            
                    </Picker>
                    
                    <View >
                    <Picker
                    selectedValue={form.Nivel}
                    onValueChange={(itemValue) => setForm({ ...form, Nivel: itemValue })}
                    style={styles.picker}
                    >
                    <Picker.Item label="Selecciona tu Nivel" value="" />
                    <Picker.Item label="Principiante (poco tiempo entrenando)" value="Principiante" />
                    <Picker.Item label="Intermedio (Mas de 6 meses entrenando)" value="Intermedio" />
                    <Picker.Item label="Avanzado (Mas de 2 años entrenando)" value="Avanzado" />
            
                    </Picker>

                    </View>

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
                                placeholder="Palabra secreta"
                                keyboardType="default"
                                autoCapitalize="none"
                                style={styles.input2}
                                value={form.keyword }
                                onChangeText={(Keyword) => setForm({ ...form, keyword: Keyword })}
                            />
                
                        <TouchableOpacity onPress={switShowPassword}>
                        <Icon name = {showpassword ? 'visibility-off' : 'visibility'}  style={{marginRight: 7}}/>
                        </TouchableOpacity>
                    </View>


                    <View style={{ marginTop: 10 }}>
                       {/*  <Button
                            disabled={isPosting || !form.Altura || !form.Edad || !form.Peso}
                            onPress={onRegister}
                            title="Registrar"
                           
                        /> */}

        <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        disabled={isPosting}
                        onPress={onRegister}>
                        Registrar
                    </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.iniciarsesion}>
                        <Text >¿Ya tienes cuenta?</Text>

                        <Text
                            onPress={() => navigation.navigate("LoginScreen")}
                            style={{ color: '#00008b', marginLeft: 5, fontWeight: 'bold' }}>
                            Inicia Sesion
                        </Text>

                    </View>

                    <View style={styles.iniciarsesion}>
                        <Text >¿Deseas modificar tus datos?</Text>

                        <Text
                            onPress={() => navigation.goBack()}
                            style={{ color: '#00008b', marginLeft: 5, fontWeight: 'bold' }}>
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

              <View style = {{ alignContent: 'center' }}>

                    <Text style= {{marginBottom: 5}}> Su peso debera ser en Kilogramos</Text>
                    <Text style= {{marginBottom: 5}}> Su altura debera ser en centimetros</Text>
                    <Text style= {{marginBottom: 5, fontWeight: 'bold', fontSize: 17}}> Su palabra clave sera unica y no podra ser modificada </Text>


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
}

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
      height: 60,
      padding: 20,
      backgroundColor: 'gainsboro',
      borderRadius:100,
      marginTop: 10
    },
    input2: {
        height: 40,
        width: '90%',
        padding: 10,
    },
    iniciarsesion: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,

    },
    picker: {
        backgroundColor: 'aliceblue',
        borderRadius: 8,
        marginTop: 10,
      
      },button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        margin: 10,
      },
      buttonClose: {
        backgroundColor: 'midnightblue',
    
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
      },textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'midnightblue',
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

export default SecondRegisterScreen;