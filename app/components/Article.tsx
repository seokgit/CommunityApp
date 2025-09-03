import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Post } from "../types/post";

type Props = {
    post: Post
}

function Article(props: Props) {
  return (
    <View style={styles.container}>    
    <Text numberOfLines={2} style={styles.title}>{props.post.title}</Text>
    <Text numberOfLines={1} style={styles.subject}>{props.post.subject}</Text>
    <Text style={styles.locationText}>영천동 · {props.post.createDate}</Text>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
    container: {        
        alignSelf: 'stretch',   
        flexDirection: 'column',            
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 10
    },
    subject: {
        fontSize: 16,
        fontWeight: '500',
        color: 'gray',
        marginTop: 7
    },
    locationText: {
         fontSize: 14,
        fontWeight: '500',
        color: 'gray',
        marginTop: 10
    }
})