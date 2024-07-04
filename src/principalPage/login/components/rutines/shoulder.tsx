import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Shoulder = () => {
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

      
          //Hombros
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 0},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 1},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 2},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 3},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 4},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 5},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 6},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 7},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 8},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 9},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 10},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 12},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 13},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 14},


       
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

export default Shoulder;
