import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextField from '../components/TextField';
import MainButton from '../components/MainButton';
import { useNavigation } from '@react-navigation/native';

function SignInPage() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextField/>
            <View style={{paddingVertical: 10}}/>
            <Text style={styles.label}>Password</Text>
            <TextField/>
        <View style={{paddingVertical: 20}}/>
            <MainButton/>
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
        paddingHorizontal: 16
    },
    label: {
        alignSelf: 'stretch',        
        fontSize: 16,
        paddingBottom: 10
    }
})

export default SignInPage;