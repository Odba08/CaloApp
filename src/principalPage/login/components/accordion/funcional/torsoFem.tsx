import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../../actions/exercise/get-exercise';
import {ExerciseList} from '../../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const FirstTorso = () => {
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
            <ListItem.Title>Torso para ellas</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 16},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 12},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 11},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 12},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 4},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 16},
          {id: '7a1a460b-b0b2-4a17-8cca-e3919957969a', imageIndex: 17},

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

export default FirstTorso;
