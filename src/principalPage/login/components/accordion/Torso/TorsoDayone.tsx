import {View, Text, Button} from 'react-native';
import LoadingScreen from '../../../../login/screens/loading/LoadingScreen';
import {getExerciseByPage} from '../../../../login/actions/exercise/get-exercise';
import {ExerciseList} from '../../../../login/components/ExerciseList';
import {useQuery} from '@tanstack/react-query';
import {useNavigation} from '@react-navigation/native';
import {ListItem} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const AccordionDayOne = () => {
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
            <ListItem.Title>Lunes: Torso</ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}>
      <FlatList
        data={[
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 2},
          {id: 'd443b6e1-85b1-4220-9e7d-4798298a0731', imageIndex: 3},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 4},
          {id: 'b1f44206-efe6-4c43-8514-af703d9fc1cc', imageIndex: 5},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 4},
          {id: '135ed70a-2f5f-4fa4-8c72-fac14afe736a', imageIndex: 1},
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

export default AccordionDayOne;
