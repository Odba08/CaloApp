
import {View, Text, Button, Alert, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {useAuthStore} from './store/useAuthStore';
import { LinearGradient } from 'expo-linear-gradient';



const UserData = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
    
    <View style={{ alignItems: 'center', backgroundColor: 'skyblue', flex:1}}>

    <LinearGradient
        // Background Linear Gradient
        colors={['midnightblue', 'skyblue']}
        style={styles.background}
      />
      
    <Image
        source ={ user?.images[0] ? {uri: user?.images[0]} : require('../../assets/img/user.png')}
        style={styles.image}
      />
    
    <View style ={{ borderRadius: 30, backgroundColor: 'white', paddingHorizontal: 50}}>
    
    <View style={{ alignItems: 'center'}}>
      <Text style = {{fontWeight: 'bold', fontSize: 30, alignItems: 'center', color: 'black', margin: 10}}>Datos de usuario</Text>
 
    </View>
  
  <View style={{ alignItems: 'center'}} >
  {user && (
        <Text style = {{fontSize: 15}} > {user.fullName}</Text>
        )}
        
        {user && (
          <Text style = {{fontSize: 15, marginBottom:20}}> {user.email}</Text>
          )}
  </View>


    <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>
            Edad
            </Text>
          {user && (
          <Text style = {styles.value} > {user.Edad}</Text>
        )}
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Peso</Text>
          {user && (
          <Text style = {styles.value} > {user.Peso} Kg</Text>
        )}
        </View>
        
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Actividad</Text>
          {user && (
          <Text style = {styles.value} > {user.Actividad}</Text>
        )}
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Objetivo</Text>
          {user && (
          <Text style = {styles.value} > {user.Objetivo}</Text>
        )}
        </View>
        
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Altura</Text>
          {user && (
          <Text style = {styles.value} > {user.Altura} Cm</Text>
        )}
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Nivel</Text>
          {user && (
          <Text style = {styles.value} > {user.Nivel}</Text>
        )}
        </View>
        
      </View>

    <View>
 
    </View>
    </View>
    </View>
        </>
  );
};

const styles =  StyleSheet .create({
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
    marginBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 16, 
    
  },
  grid: {
    width: '80%',
   
  },
  row: {
    flexDirection: 'row',
    marginBottom:30
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  
  },
  value: {
    fontSize: 20,
  },
  
})

export default UserData;
