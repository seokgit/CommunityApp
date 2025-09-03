import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
};

function CommentInput({ value, onChangeText, onSubmit }: Props) {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText} value={value} style={styles.textField} />
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 18 }} onPress={onSubmit} disabled={!(value.length > 0)}>
        {value ? <Image style={{ width: 24, height: 24 }} source={require(`../assets/sendCommentActive.png`)} /> :
          <Image style={{ width: 24, height: 24 }} source={require(`../assets/sendComment.png`)} />}
      </TouchableOpacity>
    </View>
  );
}

export default CommentInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
    borderTopColor: '#E2E2E2',
    borderTopWidth: 1
  },
  textField: {
    paddingVertical: 10,
    flex: 1,
    borderRadius: 900,
    backgroundColor: '#E2E2E2',
    marginBottom: 5,
    paddingLeft: 10
  }
})