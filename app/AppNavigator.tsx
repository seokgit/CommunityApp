import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage.tsx';
import DetailPage from './pages/DetailPage.tsx';
import WritePage from './pages/WritePage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import { useContext } from 'react';
import CommentPage from './pages/CommentPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import { AuthContext } from './context/AuthContext.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ title: 'Explore', headerShadowVisible: false }}
          />
          <Stack.Screen name="Detail" component={DetailPage} />
          <Stack.Screen name="Write" component={WritePage} />
          <Stack.Screen
            name="Comment"
            component={CommentPage}
            options={{ presentation: 'modal', headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInPage} />
          <Stack.Screen name="SignUp" component={SignUpPage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppNavigator