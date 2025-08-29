import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
    profileImageUrl: string;
    name: string;
    date: string;
    subject: string;
}

function ProfileCard(props: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.profileImageUrl}}/>
      <View style={styles.content}>
        <View style={styles.textContainer}>
            <Text style={styles.titleText}>{props.name}</Text>
            <Text style={styles.subTitleText}><Text style={styles.captionText}>Date :</Text> {props.date}</Text>
        </View>
        <Text  style={styles.subTitleText}><Text style={styles.captionText}>Topic :</Text> {props.subject}</Text>
      </View>
    </View>
  );
}

export default ProfileCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: 'stretch',        
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 24
    },
    textContainer: {
        alignSelf: 'stretch',              
        justifyContent: 'space-between',    
        flex: 1,            
        flexDirection: "row",                
    },
    content: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 12,
        flex: 1,
    },
    titleText: {        
        fontSize: 24,
        fontWeight: '700'
    },
    subTitleText: {
          fontWeight: '700'
    },
    captionText: {
        color: 'gray',
        fontWeight: '500'
    }
})