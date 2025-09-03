import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import MainButton from '../components/MainButton';
import { useContext, useEffect, useState } from 'react';
import TextField from '../components/TextField';
import { uploadPost } from '../services/postService';
import { Post } from '../types/post';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

function WritePage() {
  const [title, setTitle] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const { user } = useContext(AuthContext)
  const navigation = useNavigation()

  useEffect(() => {
    const isDisabled = !title || !subject || !content
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleUploadPost} disabled={isDisabled}>
          <Text style={{ color: isDisabled ? 'gray' : 'black' }}>완료</Text>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={handleGoBack}>
          <Image style={{ width: 15, height: 15 }} source={require('../assets/close.png')} />
        </TouchableOpacity>
      ),
    })
  }, [navigation, title, subject, content])

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleUploadPost = async () => {
    try {
      const newPost: Post = {
        id: "",
        title: title,
        subject: subject,
        content: content,
        profileImageUrl: "",
        authorName: user?.name ?? "",
        userId: user?.id ?? "",
        createDate: new Date().toISOString()
      }

      const post = await uploadPost(newPost)
      navigation.replace("Detail", { post })
    } catch (e: any) {
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      {/* 주제 */}
      <View style={styles.textContainer}>
        <TextField placeholder={"주제를 입력해주세요."} value={subject} onChangeText={setSubject} />
      </View>
      {/* 재목 */}
      <TextInput style={styles.titleText} placeholder={"제목을 입력해주세요."} value={title} onChangeText={setTitle} />
      {/* 컨텐츠 */}
      <View style={styles.textContainer}>
        <TextField value={content} onChangeText={setContent} style={{ ...styles.textInput, height: 300, marginBottom: 10 }} multiline={true} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default WritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    fontWeight: '500'
  },
  textInput: {
    height: 40,
    marginTop: 10
  },
  textContainer: {
    paddingTop: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 50,
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
  }
})