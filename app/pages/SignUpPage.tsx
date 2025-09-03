import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Alert } from 'react-native';
import TextField from '../components/TextField';
import MainButton from '../components/MainButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { useContext, useState } from 'react';
// import { createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import auth, { getAuth } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

function SignUpPage() {
    const navigation = useNavigation();
    const [photoUri, setPhotoUri] = useState<string | undefined>(undefined)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [nickname, setNickname] = useState<string>("")
    const { login } = useContext(AuthContext)

    const showImagePicker = () => {

        launchImageLibrary({}, (res) => {
            const uri = res.assets[0].uri
            setPhotoUri(uri)
        })
    }

    const uploadProfileImage = async (uid: string, localUri: string): Promise<string> => {
        const reference = storage().ref(`profileImages/${uid}.jpg`);
        await reference.putFile(localUri);
        return await reference.getDownloadURL();
    }

    const signUp = async () => {
        try {
            const user = await auth().createUserWithEmailAndPassword(email, password);
            let profileImageUrl = ""

            if (photoUri) {
                profileImageUrl = await uploadProfileImage(user.user.uid, photoUri)
            }

            await firestore()
                .collection("users")
                .doc(user.user.uid)
                .set({
                    email: email,
                    nickname: nickname,
                    profileImageUrl: profileImageUrl
                })
            login({
                id: user.user.uid,
                name: nickname
            });
        } catch (e: any) {
            console.log("ERROR: ", e)
            Alert.alert(
                "Error",
                "네트워크 통신 중 문제가 발생했습니다.",
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
            <TouchableOpacity onPress={showImagePicker}>
                {photoUri ? <Image source={{ uri: photoUri }} style={styles.profileImage} /> :
                    <Image source={require('../assets/user.png')} style={styles.profileImage} />}
            </TouchableOpacity>

            <Text style={styles.label}>이메일</Text>
            <TextField placeholder={"이메일을 입력해주세요."} value={email} onChangeText={setEmail} />
            <View style={{ paddingVertical: 10 }} />
            <Text style={styles.label}>패스워드</Text>
            <TextField placeholder={"패스워드를 입력해주세요."} value={password} onChangeText={setPassword} />
            <View style={{ paddingVertical: 10 }} />
            <Text style={styles.label}>닉네임</Text>
            <TextField placeholder={"닉네임을 입력해주세요."} value={nickname} onChangeText={setNickname} />
            <View style={{ paddingVertical: 20 }} />
            <MainButton title='회원가입' onPress={signUp} />
        </View>
    );
}

export default SignUpPage;

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
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75
    }
})