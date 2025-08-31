import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";

function MainButton() {
  return (
<TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    
  );
}

export default MainButton;

const styles = StyleSheet.create({
    button: {    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',    
    height: 50,        
    alignSelf: 'stretch'
  }
})