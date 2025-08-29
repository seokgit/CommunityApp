/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './pages/MainPage.tsx';
import DetailPage from './pages/DetailPage.tsx';
import WritePage from './pages/WritePage.tsx';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
  <SafeAreaProvider>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainPage} />
      <Stack.Screen name="Detail" component={DetailPage} />
      <Stack.Screen name="Write" component={WritePage} />
    </Stack.Navigator>
  </NavigationContainer>
</SafeAreaProvider>
  );
}

export default App;

