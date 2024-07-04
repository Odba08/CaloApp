import { Text,Image, StyleSheet, View, TouchableOpacity, Pressable} from 'react-native';

import { useNavigation,NavigationProp} from '@react-navigation/native';
import { RootStackParams } from '../../../../navigate/StackNavigate';
import { FoodsApi } from '../../../domain/entities/foods';



interface Props {
    foods : FoodsApi;

}
export const FoodCardComplete = ({foods}:Props) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();


    return (

        <Pressable onPress={() => navigation.navigate('details', {foods: foods.id})}>
            <Image
                source={{uri: foods.images[0]}}
                style={styles.Image}
            />
            <View style={styles.overlay}>
            <Text style={styles.overlayText}>{foods.title}</Text>
            </View>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    Image:{
        flex: 1,
        borderRadius: 18,
        width: 170,
        height: 150,
        marginHorizontal: 5,
        marginTop: 10,
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
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.20)', // Ajusta la opacidad aquí (0.5 en este ejemplo)
        justifyContent: 'flex-end',
        marginStart: 5,
        borderRadius: 18,
        width: 170,
        marginTop: 10,
      },
      overlayText: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 15,
       
      },
});



