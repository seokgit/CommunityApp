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
        </View>
        <Text  style={styles.subTitleText}>{props.subject} {props.date}</Text>
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
        flex: 1     
    },
    image: {
        width: 40,
        height: 40,
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
        fontSize: 18,
        fontWeight: '700'
    },
    subTitleText: {
        //   fontWeight: '700',
        color: 'gray'
    },   
})