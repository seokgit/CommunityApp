import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";

function TextField() {
  return (
  <TextInput style={styles.textInput}/>
  );
}

export default TextField;

const styles = StyleSheet.create({
    textInput: {
    alignSelf: 'stretch',      
    height: 40,             
    backgroundColor: '#E6E6E6'
    }
})