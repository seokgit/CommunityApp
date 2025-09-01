import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, GestureResponderEvent, Text } from "react-native";

type Props = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

function MainButton({ title, onPress, disabled = false }: Props) {
  return (
  <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{color: 'white'}}>{title}</Text>
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