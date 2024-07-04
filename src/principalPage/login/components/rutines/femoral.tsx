import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Femoral = () => {
    const {isLoading, data: exercise = []} = useQuery({
        queryKey: ['exercise', 0],
        staleTime: 1000 * 60 * 5, // 5 minutes
        queryFn: () => getExerciseByPage(0),
      });

    return(
      <View style={{backgroundColor: 'white', flex: 1}}>

<ScrollView>

{/* <Text style={{justifyContent: 'center', fontSize:25, fontWeight:'bold', alignItems: 'center', textAlign: 'center', padding: 15, color: 'midnightblue' }}>Pectoral</Text>
 */}
      {isLoading ? <LoadingScreen/> :
        <FlatList
        data={[

      
          //Femoral
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 0},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 1},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 2},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 3},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 4},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 5},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 6},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 7},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 8},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 9},

          

       
        ]}
        
       
        keyExtractor={item => `${item.id}-${item.imageIndex}`}
  
        renderItem={({item}) => (
          <ExerciseList
            exercises={exercise}
            idsToShow={{
              [item.id]: item.imageIndex,
            }}
            imageIndex={0}
          />
        )}
        numColumns={2}
       
      />
  }
      </ScrollView>
            </View>
    )
};

export default Femoral;
