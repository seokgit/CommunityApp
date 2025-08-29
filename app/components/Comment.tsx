import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
    profileImageUrl: string;
    name: string;
    comment: string;
}

function Comment(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.image} source={{uri: props.profileImageUrl}}/>
        <Text style={styles.userNameText}>{props.name}</Text>
      </View>      
      <Text style={styles.commentText}>{props.comment}</Text>
    </View>
  );
}

export default Comment;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',        
        alignSelf: 'stretch',                        
    },
    image: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'gray'
    },
   profileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
   },
   userNameText: {
    fontSize: 18,
    fontWeight: '600'
   },
    commentText: {
        paddingTop: 10        
    }
})