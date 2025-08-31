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
import CommentPage from './pages/CommentPage.tsx';
import SignUpPage from './pages/SignupPage.tsx';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} options={{
    title: 'Explore',    
    headerShadowVisible: false
  }}/>
            <Stack.Screen name="Detail" component={DetailPage} />
            <Stack.Screen name="Write" component={WritePage} />
            <Stack.Screen name="Comment" component={CommentPage} options={{
              presentation: 'modal',
              headerShown: false
            }} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator >
            <Stack.Screen name="SignIn" component={SignInPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

