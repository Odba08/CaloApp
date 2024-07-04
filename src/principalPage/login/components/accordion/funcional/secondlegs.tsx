import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../../actions/exercise/get-exercise';
import {ExerciseList} from '../../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const Secondlegs = () => {
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
            <ListItem.Title>Piernas para ellas</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 18},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 15},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 12},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 6},

          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 5},
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

export default Secondlegs;
