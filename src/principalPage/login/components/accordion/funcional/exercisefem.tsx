import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../../actions/exercise/get-exercise';
import {ExerciseList} from '../../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const Complement = () => {
  const navigation = useNavigation();
  const {isLoading, data: exercise = []} = useQuery({
    queryKey: ['exercise', 0],
    staleTime: 1000 * 60 * 5, // 5 minutes
    queryFn: () => getExerciseByPage(0),
  });

  const [expanded, setExpanded] = useState(false);
  return (
    <ListItem.Accordion
      content={
        <>
          <ListItem.Content>
            <ListItem.Title>Ejercicios complementarios</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 22},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 12},
          {id: 'b5aae802-90d3-439d-b5f2-7f49cd040e34', imageIndex: 0},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 19},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 20},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 21},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 22},

        ]}
        
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
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
      />
    </ListItem.Accordion>
  );
};

export default Complement;
