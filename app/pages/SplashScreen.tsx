import React from "react"
import { Image, Text, View } from "react-native"

function SplashSreen() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image source={require('../assets/logoImage.png')} style={{ width: 100, resizeMode: 'contain' }} />
        </View>
    )
}

export default SplashSreen;