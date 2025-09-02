import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ProfileCard from "./ProfileCard";
import { Post } from "../types/post";

type Props = {
    post: Post
}

function Article(props: Props) {
  return (
    <View style={styles.container}>
    <ProfileCard profileImageUrl={props.post.profileImageUrl} name={props.post.authorName} date={props.post.createDate.toString()} subject={props.post.subject}/>
    <Text numberOfLines={2} style={styles.content}>{props.post.content}</Text>
    <Text numberOfLines={1} style={styles.subject}>{props.post.subject}</Text>
    </View>
  );
}

export default Article;

const styles = StyleSheet.create({
    container: {        
        alignSelf: 'stretch',   
        flexDirection: 'column',            
    },
    content: {
        fontSize: 30,
        fontWeight: '700',
        marginTop: 20
    },
    subject: {
        fontSize: 20,
        fontWeight: '500',
        color: '#4C4C4C',
        marginTop: 20
    }
})