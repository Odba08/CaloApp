import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../actions/exercise/get-exercise';
import {ExerciseList} from '../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const AccordionFems = () => {
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
            <ListItem.Title>Viernes: Piernas - Femoral</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 0},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 1},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 2},
          {id: '3a48e3e0-6ce4-42a4-941e-b78116dccc71', imageIndex: 3},
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

export default AccordionFems;
