
import { ExerciseApi } from '../domain/entities/exercise';
import { ExerciseCard } from './products/ExerciseCard';

import { SectionList,StyleSheet } from 'react-native';

interface Props {
    exercises: ExerciseApi[]
    idsToShow: {[key: string]: number }
    imageIndex: number
}

  export const ExerciseList = ({ exercises, idsToShow}: Props) => {
    const filteredExercises = exercises.filter(exercise => idsToShow.hasOwnProperty(exercise.id));
    const sections = [{ data: filteredExercises, key: 'exercise-section' }];

    return (
      <SectionList<ExerciseApi, any>
        sections={sections}
        renderItem={({ item }) => <ExerciseCard exercises={item}  imageIndex={idsToShow[item.id]} />}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });