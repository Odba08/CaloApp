import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Back = () => {
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
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 0},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 1},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 2},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 3},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 4},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 5},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 6},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 7},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 8},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 9},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 10},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 11},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 12},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 13},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 14},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 15},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 16},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 17},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 18},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 19},

       
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

export default Back;
