import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Abdominales = () => {
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
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 0},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 1},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 2},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 4},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 5},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 6},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 7},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 8},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 9},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 10},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 11},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 12},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 13},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 14},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 15},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 16},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 17},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 18},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 19},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 20},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 21},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 22},

       
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

export default Abdominales;
