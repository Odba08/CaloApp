import {isAxiosError} from 'axios';
import {tesloApi} from '../../../configs/api/tesloApi';
import {User} from '../../../domain/entities/user';

export const updateCreateUser = (user: Partial<User>) => {
  user.Altura = isNaN(Number(user.Altura)) ? user.Altura : Number(user.Altura);
  user.Edad = isNaN(Number(user.Edad)) ? user.Edad : Number(user.Edad);
  user.Peso = isNaN(Number(user.Peso)) ? user.Peso : Number(user.Peso);

  if (user.id) {
    return updateUser(user);
  }
  throw new Error('User id is required');
};

const prepareImage = async (images: string[]) => {
  const fileImages = images.filter(image => image.startsWith('file://'));

  if (fileImages.length > 0) {
    console.log('Preparing images:', fileImages);
    const uploadedPromises = fileImages.map(uploadImage);
    const uploadedImages = await Promise.all(uploadedPromises);
    console.log('Uploaded images:', uploadedImages);
    return uploadedImages.map(image => image.split('/').pop());
  }
  console.log('No new images to prepare');
  return [];
};

const uploadImage = async (image: string) => {
  console.log('Uploading image:', image.split('/').pop());
  const formData = new FormData();
 
  try {
  formData.append('file', {
    uri: image,
    type: 'image/jpeg',
    name: image.split('/').pop()
  });
    const {data} = await tesloApi.post<{ image: string, secureUrl: string }>('/files/user', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log({data})
    
    return data.secureUrl
  } catch (error) {
    
    throw new Error('Error uploading image');
  }

  
};

const updateUser = async (user: Partial<User>) => {
  console.log('Updating user:', user);
  const {id, images = [], ...rest} = user;

  try {
    const checkedImages = await prepareImage(images);

    const {data} = await tesloApi.patch(`/auth/${id}`, {
      images: checkedImages,
      ...rest,
    });

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.response?.data);
    }
    throw new Error('Error updating user');
  }
};
