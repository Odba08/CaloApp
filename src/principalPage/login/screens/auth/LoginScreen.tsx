import { Text,View, StyleSheet, useWindowDimensions, TextInput, Button,Alert, TouchableOpacity} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../../navigate/StackNavigate';
import { Icon } from "@rneui/themed";


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

const  LoginScreen = ({ navigation }:Props) => {
    const {login} = useAuthStore();
    const [isPosting, SetIsPosting] = useState(false);
    const [form,setForm] = useState({
        email: '',
        password: '',
    });
    const [showpassword, setShowpassword] = useState(false);

    const switShowPassword = () => {
        setShowpassword(!showpassword);
    }

    const  {height} = useWindowDimensions();
    const onLogin = async() => {
        if(form.email.length === 0 || form.password.length === 0) {
            return;
        }
        SetIsPosting(true);
        const wasSuccesful = await login(form.email, form.password);
        SetIsPosting(false);
        if (wasSuccesful) {
            navigation.navigate("Principal");
            return;
        }
        Alert.alert('Correo o contraseña incorrectos');

    };

    return (

        <View style = {styles.container} >
        <ScrollView>

            <View style = {{ paddingTop: height * 0.3, alignItems: 'center'}}>
                <Text style= {styles.primero}>Ingresar</Text>
                <Text style={{color:'midnightblue', fontWeight: 'bold'}}> Por favor, ingrese para continuar</Text>
            </View>

            <View style = {{ marginTop: 20 }}> 
                <TextInput
                placeholder="Correo"
                keyboardType="email-address"
                autoCapitalize="none"
                value={form.email}
                onChangeText={ (email) => setForm({...form, email})}
                style={styles.input}
                />
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
                value={form.password}
                onChangeText={ (password) => setForm({...form, password})}
                style={styles.input2}
                />
                <TouchableOpacity onPress={switShowPassword}>
                <Icon name = {showpassword ? 'visibility-off' : 'visibility'}  style={{marginRight: 7}}/>
                </TouchableOpacity>
                </View>
                <View style = {{marginTop: 10}}>
                    {/* <Button
                    disabled={isPosting}
                    onPress={onLogin}
                    title="Ingresar"
                    /> */}
                    <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        disabled={isPosting}
                        onPress={onLogin}>
                        Ingresar
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.iniciarsesion}>
                   <Text >¿No tienes cuenta?</Text>
                
                    <Text 
                    onPress={() => navigation.navigate("RegisterScreen")}
                    style= {{color:'midnightblue', marginLeft: 5, fontWeight: 'bold'}}>Registrate
                    </Text>   
                </View>

                <View style = {styles.iniciarsesion}>

                
                    <Text 
                    onPress={() => navigation.navigate("EmailById")}
                    style= {{color:'midnightblue', marginLeft: 5, fontWeight: 'bold'}}>¿Olvidaste tu contraseña?
                    </Text>   
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
        backgroundColor: 'gainsboro',
        borderRadius: 100,
        padding: 20,
        marginTop: 10,
        fontSize: 15
      },
      input2: {
        height: 40,
        borderRadius: 10,
        padding: 10,
        width: '90%',
        fontSize: 15
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

export default LoginScreen;