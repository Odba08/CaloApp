import React from 'react';
import { getExerciseByPage } from '../../login/actions/exercise/get-exercise';
import { useQuery } from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';
import { ExerciseList } from '../../login/components/ExerciseList';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import LoadingScreen from '../../login/screens/loading/LoadingScreen';



const Ejercicios = () => {

    const {isLoading, data: exercise = []} = useQuery({
        queryKey: ['exercise', 0],
        staleTime: 1000 * 60 * 5, // 5 minutes
        queryFn: () => getExerciseByPage(0),
      });

    return(
      <View style={{backgroundColor: 'white', flex: 1}}>

<ScrollView>

{/* <Text style={{justifyContent: 'center', fontSize:25, fontWeight:'bold', alignItems: 'center', textAlign: 'center', padding: 15, color: 'midnightblue' }}>Lista De ejercicios</Text>
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


          //Cuadriceps
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 0},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 1},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 2},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 3},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 4},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 5},

        
          //Hombros
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 0},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 1},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 2},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 3},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 4},


          //Pectoral
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 0},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 1},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 2},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 3},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 4},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 5},

          //Espalda
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 0},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 1},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 2},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 3},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 4},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 5},

          
          //Biceps
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 0},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 1},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 2},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 3},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 6},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 7},

          //Triceps
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 0},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 1},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 2},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 3},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 4},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 5},
 

          //Abdomen
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 0},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 1},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 2},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 4},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 5},

        
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
}

export default Ejercicios;