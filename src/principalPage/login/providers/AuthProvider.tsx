import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../navigate/StackNavigate';
import {PropsWithChildren, useEffect} from 'react';
import {useAuthStore} from '../store/useAuthStore';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const {checkStatus, status} = useAuthStore();


  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'unauthenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'Inicial'}],
        })
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Principal'}],
        })
      }
    }
  }, [status])

  return (
  <>{children}</>
  )
};
