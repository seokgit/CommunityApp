/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './pages/MainPage.tsx';
import DetailPage from './pages/DetailPage.tsx';
import WritePage from './pages/WritePage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import { useState } from 'react';


const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>

        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Detail" component={DetailPage} />
            <Stack.Screen name="Write" component={WritePage} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInPage} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

