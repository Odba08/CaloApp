import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {LoginAndRegisterNavigator,} from './src/principalPage/navigate/StackNavigate';
import {AuthProvider} from './src/principalPage/login/providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryCLient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryCLient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1}}>
            <AuthProvider>
              <LoginAndRegisterNavigator />
            </AuthProvider>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
