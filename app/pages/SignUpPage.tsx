import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import TextField from '../components/TextField';
import MainButton from '../components/MainButton';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';



function SignUpPage() {        
    const [photoUri, setPhotoUri] = useState<string | undefined>(undefined)

    const showImagePicker = () => {  
    launchImageLibrary({}, (res) => {
      const uri = res.assets[0].uri
    //   const formdata = new FormData()
    //   formdata.append('file', uri);
    setPhotoUri(uri)      
    })
}
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showImagePicker}>
                {photoUri ? <Image source={{uri: photoUri}} style={styles.profileImage}/> :
                 <Image source={require('../assets/user.png')} style={styles.profileImage}/>}                
            </TouchableOpacity>                            
            
            <Text style={styles.label}>Email</Text>
            <TextField/>
            <View style={{paddingVertical: 10}}/>
            <Text style={styles.label}>Password</Text>
            <TextField/>
            <View style={{paddingVertical: 10}}/>
            <Text style={styles.label}>Nickname</Text>
            <TextField/>
        <View style={{paddingVertical: 20}}/>
            <MainButton/>
                        
        </View>
    );
}

export default SignUpPage;

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
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75
    }
})