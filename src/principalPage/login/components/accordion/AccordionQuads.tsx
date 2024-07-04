import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../actions/exercise/get-exercise';
import {ExerciseList} from '../ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const AccordionQuads = () => {
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
            <ListItem.Title>Miercoles: Pierna - Cuadriceps</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 0},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 1},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 2},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 3},
          {id: 'b5b686f1-a4e8-4dca-a849-063bba5401d3', imageIndex: 4}
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

export default AccordionQuads;
