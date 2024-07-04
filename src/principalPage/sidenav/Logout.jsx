import { Button, StyleSheet,TouchableOpacity, Text} from 'react-native';
import { useAuthStore } from '../login/store/useAuthStore'; 
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { ScrollView } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const LogoutScreen = (props) => {
  const { navigation, logout } = useAuthStore(); // Obtén la función logout y la navegación del hook useAuthStore

  return (
    <ScrollView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        {/* <Button title="Cerrar Sesión" onPress={logout} /> */}
       
        <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.Texto}
                        onPress={logout}>
                        Cerrar Sesión
                    </Text>
            </TouchableOpacity>
         
      </DrawerContentScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  Texto: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22,
    },
    Button: {
      flex: 1,
      backgroundColor: 'midnightblue',
      padding: 15,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 15,
      marginTop:25,
      width: 250,

    },
});

export default LogoutScreen;