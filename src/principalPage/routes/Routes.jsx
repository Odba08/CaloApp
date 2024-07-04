import React from 'react';
import TabNavigator from '../navigate/tabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Image, StyleSheet,Button, ScrollView, Pressable, Modal, Alert,Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Aumento from '../sidenav/Aumento';
import Deficit from '../sidenav/Deficit';

import LogoutScreen from '../sidenav/Logout';
import CaloriesCalculadora from '../sidenav/Calculadora';
import CaloriesCal from '../sidenav/CaloriesCal';
import Ejercicios from '../sidenav/screens/Ejercicios';
import Alimentos from '../sidenav/screens/Alimentos';

import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { DataModification } from '../login/screens/User/DataModification';
import { UserManual } from '../sidenav/UserManual';

const Drawer = createDrawerNavigator();

const screenOptionsStyle = {
  headerStyle: {
    backgroundColor: 'midnightblue',
    height: 100,
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};


const renderHeaderRight = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const navigation = useNavigation();
  return (
    <View style={{marginRight: 10}}>
 
      <Modal
        animationType="slide"
        transparent={true}
        visible={isDrawerOpen}
        onRequestClose={() => {
          setIsDrawerOpen(false);
        }}
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Deseas actualizar tus datos?</Text>

            <View style= {{flexDirection: 'column'}}>

            <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.textStyle}
                        onPress={() => {navigation.navigate('RecoverIdData');
                        setIsDrawerOpen(false);}}>
                       Si
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Button}>
                    <Text
                        style={styles.textStyle}
                        onPress={() => setIsDrawerOpen(false)}>
                       No
                    </Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>

      </Modal>

      <Pressable
        onPress={() => {
          setIsDrawerOpen(true);
        }}
      >
      <Icon name= "wrench" size={20} color="#fff" />   
      
      </Pressable>

      
    </View>
  );
};


const Routes = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionsStyle} drawerContent={(props) => <LogoutScreen {...props} />} >
      <Drawer.Screen
        name="Home"
        options={{headerTitle: ' ', headerRight: renderHeaderRight,
      }}
        component={TabNavigator}
      />
      <Drawer.Screen name="Calculadora de grasa corporal" component={CaloriesCalculadora} />
      <Drawer.Screen name="Calculadora de calorias" component={CaloriesCal} />
      <Drawer.Screen name="Guía aumentar masa muscular" component={Aumento} />
      <Drawer.Screen name="Guía para bajar de peso" component={Deficit} />
      <Drawer.Screen name="Lista de ejercicios" component={Ejercicios} />
      <Drawer.Screen name="Lista de Alimentos" component={Alimentos} />
      <Drawer.Screen name="Manual de Usuario" component={UserManual} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 5000,
  },centeredView: {
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 50,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    
  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Button: {
    backgroundColor: 'midnightblue',
    padding: 5,
    borderRadius: 100,
    marginHorizontal: 0,
    marginVertical: 5,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150
  },
});

export default Routes;
