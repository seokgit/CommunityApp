import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CommentEntity } from "../types/comment";
import ProfileCard from "./ProfileCard";

type Props = {
  comment: CommentEntity
}

function Comment(props: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfileCard profileImageUrl={props.comment.profileImageUrl} name={props.comment.userName} date={props.comment.createdDate} subject="" />
      </View>
      <Text style={styles.commentText}>{props.comment.content}</Text>
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
    paddingTop: 10,
    paddingLeft: 60
  }
})