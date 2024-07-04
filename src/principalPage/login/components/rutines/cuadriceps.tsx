import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Quads = () => {
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

      
          //Cuadriceps
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 0},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 1},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 2},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 3},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 4},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 5},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 6},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 7},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 8},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 9},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 10},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 11},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 12},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 13},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 14},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 15},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 16},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 17},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 18},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 19},

       
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

export default Quads;
