import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Triceps = () => {
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

      
          //Triceps
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 0},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 1},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 2},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 3},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 4},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 5},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 6},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 7},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 8},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 9},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 10},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 11},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 12},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 13},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 14},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 15},

       
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

export default Triceps;
