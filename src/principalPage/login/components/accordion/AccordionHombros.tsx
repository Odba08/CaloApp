import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../actions/exercise/get-exercise';
import {ExerciseList} from '../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const AccordionHombro = () => {
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
            <ListItem.Title>Jueves: Hombros</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 0},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 1},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 2},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 3},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 4},
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

export default AccordionHombro;
