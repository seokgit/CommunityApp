import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextField from '../components/TextField';
import MainButton from '../components/MainButton';

function SignUpPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextField/>
            <View style={{paddingVertical: 10}}/>
            <Text style={styles.label}>Password</Text>
            <TextField/>
        <View style={{paddingVertical: 20}}/>
            <MainButton/>
                        
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

export default SignUpPage;