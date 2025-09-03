import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage.tsx';
import DetailPage from './pages/DetailPage.tsx';
import WritePage from './pages/WritePage.tsx';
import SignInPage from './pages/SignInPage.tsx';
import { useContext, useEffect } from 'react';
import CommentPage from './pages/CommentPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import { AuthContext } from './context/AuthContext.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { getAuth, signOut } from '@react-native-firebase/auth';
import { Text } from 'react-native';
import { AuthStatus } from './types/AuthStatus.ts';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const {  authStatus: loginStatus, login, logout } = useContext(AuthContext);

  useEffect(()=>{
   const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) login({
        id: user.uid,
        name: ""
      })
      else logout()
    })
    return unsubscribe;
  },[])

  // useEffect(() => {
  //   handleLogout()
  // }, [])

  // const handleLogout = async () => {
  //   try {
  //    const auth = getAuth();
  //     await signOut(auth);
  //   } catch {

  //   }
  // }

 if (loginStatus == AuthStatus.CHECKING) return (<Text>Loading...</Text>)  
  return (
    <NavigationContainer>     
      { (loginStatus == AuthStatus.LOGGEDIN) ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainPage}
            options={{ title: '동네생활', headerShadowVisible: false }}
          />
          <Stack.Screen name="Detail" component={DetailPage} options={{
            title: "상세 보기"
          }}/>
          <Stack.Screen name="Write" component={WritePage} options={{
            presentation: 'fullScreenModal',            
            title: "글 작성"
          }}/>
          <Stack.Screen
            name="Comment"
            component={CommentPage}    
            options={{
              title: "댓글",
              headerShadowVisible: false 
            }}        
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