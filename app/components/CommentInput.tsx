import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

function CommentInput({ value, onChangeText, onSubmit }: Props) {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} value={value} style={styles.textField} placeholder="Comment"/>     
      <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center', borderRadius: 18}} onPress={onSubmit}>
        <Image style={{width: 24, height: 24}} source={require('../assets/sendComment.png')}/>
      </TouchableOpacity>
    </View>
  );
}

export default CommentInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',        
        alignSelf: 'stretch',   
        paddingHorizontal: 16,             
        paddingVertical: 10,
        gap: 10
    },
    textField: {        
        paddingVertical: 10,
        flex: 1,
        borderRadius: 900,                
    }
})