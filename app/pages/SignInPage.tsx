import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import TextField from '../components/TextField';
import MainButton from '../components/MainButton';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../context/AuthContext';

function SignInPage() {
    const navigation = useNavigation()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { login } = useContext(AuthContext)

    const signIn = async () => {
       try {
      const user = await auth().signInWithEmailAndPassword(email, password);
        
      login({
        id: user.user.uid,
        name: ""
      })
    } catch (e) {
        console.log("ERROR: ", e) 
             Alert.alert(
                    "Error",
                    "아이디 또는 비밀번호가 일치하지 않습니다.",
              [
                {
                  text: "닫기"          
                }             
              ],
              { cancelable: false }
            );     
    }  
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>이메일</Text>
           <TextField placeholder={"이메일을 입력해주세요."} value={email} onChangeText={setEmail}/>
            <View style={{paddingVertical: 10}}/>
            <Text style={styles.label}>패스워드</Text>
             <TextField placeholder={"비밀번호를 입력해주세요."} value={password} onChangeText={setPassword}/>
        <View style={{paddingVertical: 20}}/>
            <MainButton title='로그인' onPress={signIn}/>
            <View style={{paddingVertical: 20}}/>
            <TouchableOpacity onPress={() => {
                navigation.navigate("SignUp")
            }}>
                <Text>회원가입</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    label: {
        alignSelf: 'stretch',        
        fontSize: 16,
        paddingBottom: 10
    }
})

export default SignInPage;