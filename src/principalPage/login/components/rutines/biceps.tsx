import React from 'react';

import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

import { getExerciseByPage } from '../../actions/exercise/get-exercise';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import { ExerciseList } from '../ExerciseList';

const Biceps = () => {
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

      
          //Biceps
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 0},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 1},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 2},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 3},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 6},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 7},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 13},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 14},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 15},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 16},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 19},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 18},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 20},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 22},
       
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

export default Biceps;
