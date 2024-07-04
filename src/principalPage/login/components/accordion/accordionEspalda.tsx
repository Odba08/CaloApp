import {getExerciseByPage} from '../../../login/actions/exercise/get-exercise';
import {ExerciseList} from '../../../login/components/ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, } from 'react-native-gesture-handler';

const Accordion = () => {
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
            <ListItem.Title>Lunes: Espalda - Biceps</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 0},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 1},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 2},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 0},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 1},
          {id: '0e14255a-7052-4334-84cc-0a27bd52dc0b', imageIndex: 2},
        ]}
        horizontal={true}
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

export default Accordion;
