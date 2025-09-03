import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function WriteButton({...props}) {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <Image style={{width: 20, height: 20}} source={require('../assets/plus.png')}/>
        </TouchableOpacity>
    )
}

export default WriteButton

const styles = StyleSheet.create({
    container: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#e78111',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',     
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
})