import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Post } from "../types/post";

type Props = {
    post: Post
}

function Article(props: Props) {
    return (
        <View style={styles.container}>
            <Text numberOfLines={2} style={styles.title}>{props.post.title}</Text>
            <Text numberOfLines={1} style={styles.subject}>{props.post.content}</Text>
            <View style={styles.subInfo}>
                <Text style={styles.locationText}>영천동 · {props.post.createDate}</Text>
                <View style={{flexDirection: 'row', gap: 4}}>
                    <Image source={require('../assets/chat.png')} style={{width: 20, height: 20}}/>
                    <Text style={{color: 'gray'}}>{props.post.commentCount}</Text>
                </View>
            </View>
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
        alignItems: 'center',
    },
    subInfo: {
        marginTop: 10,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between'        
    }
})