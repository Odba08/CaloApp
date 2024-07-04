
import * as ImagePicker from 'expo-image-picker';

export class CameraAdapter {
    static async takePicture(): Promise<string[]> {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

        
            if (!result.canceled) {
                return [result.assets[0].uri];
            }
            return [];
        }


    static async pickImage(): Promise<string[]> {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 1,
          });
      
          if (!result.canceled) {
            return[result.assets[0] && result.assets[0].uri]
          }
          console.log(result);
          return [];
    }

}

