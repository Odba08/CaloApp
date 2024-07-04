import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Chest = () => {
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

      
          //Pectoral
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 0},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 1},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 2},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 3},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 4},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 5},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 6},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 7},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 8},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 9},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 10},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 11},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 12},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 13},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 14},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 15},
   

       
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

export default Chest;
