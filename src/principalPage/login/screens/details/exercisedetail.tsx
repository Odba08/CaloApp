import React from 'react';
import { Text, Image, View } from 'react-native';
import { RootStackParams } from '../../../navigate/StackNavigate';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery } from '@tanstack/react-query';
import { getExerciseById } from '../../actions/exercise/get-exercise-by-id';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'exercisedetail'> {};


const ExerciseDetailsScreen = ({ route }: Props) => {
    const { exercises } = route.params;
    
    const {data: exercise } = useQuery({
        queryKey: ['exercise', exercises],
        queryFn: () => getExerciseById(exercises)
    });

  return (
    <>
    
    <ScrollView>
    <View style={{backgroundColor:'white'}}>

    <Text style={{fontSize: 20, fontWeight:'bold', textAlign: 'center', marginTop: 5, color: 'midnightblue'}}> {exercise?.title}</Text>
    <Text style= {{fontSize:18, textAlign: 'justify', padding: 5}}> {exercise?.Explain}</Text>
    <Text style= {{fontSize: 17, padding:5, fontWeight: 'bold', marginStart: 5 }}>Grupo Muscular: {exercise?.GrupoMuscular}</Text>
    <Text style= {{fontSize: 17, padding:5, fontWeight: 'bold', marginStart: 5 }}>Repeticiones: {exercise?.Repeticiones}</Text>
    <Text style= {{fontSize: 17, padding:5, fontWeight: 'bold', marginStart: 5}} >Series: {exercise?.Series}</Text>


    <Text style= {{color: 'midnightblue',fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginTop: 10, marginBottom: 10 }}> Grupos Musculares </Text>
    <Image
        source={require('../../../../assets/img/GruposFuncionales.jpg')}
        style={{width: 300, height: 500, marginTop: 1, marginStart: 25, borderRadius: 25, borderColor: 'black', borderWidth: 1}}
        />
   </View>
          
           </ScrollView>
        </>

  );
};

export default ExerciseDetailsScreen;