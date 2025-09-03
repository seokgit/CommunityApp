import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";

function TextField({...props}) {
  return (
  <TextInput  style={styles.textInput} {...props}/>
  );
}

export default TextField;

const styles = StyleSheet.create({
    textInput: {
    alignSelf: 'stretch',      
    height: 40,  
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1
    }
})