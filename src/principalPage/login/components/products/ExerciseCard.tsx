import { Text,Image, StyleSheet, View, TouchableOpacity, Pressable} from 'react-native';
import { FoodsApi } from '../../domain/entities/foods';
import { useNavigation,NavigationProp} from '@react-navigation/native';
import { RootStackParams } from '../../../navigate/StackNavigate';
import { ExerciseApi } from '../../domain/entities/exercise';



interface Props {
    exercises : ExerciseApi;
    imageIndex: number

}

export const ExerciseCard = ({exercises,imageIndex}:Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();


    return (

        <Pressable onPress={() => navigation.navigate('exercisedetail', {exercises: exercises.id})}>
            
            <Image
                source={{uri: exercises.images[imageIndex]}}
                style={styles.Image}
            />
        </Pressable>

    )
}

const styles = StyleSheet.create({
    Image:{
        flex: 1,
        borderRadius: 18,
        width: 180,
        height: 200,
        
    },
    imageContainer:{
       
        flex:1,
        borderRadius:18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});



