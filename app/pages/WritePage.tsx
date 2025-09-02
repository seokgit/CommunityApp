import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import MainButton from '../components/MainButton';
import { useContext, useState } from 'react';
import TextField from '../components/TextField';
import { uploadPost } from '../services/postService';
import { Post } from '../types/post';
import { AuthContext } from '../context/AuthContext';

function WritePage() {
  const [title, setTitle] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const { user } = useContext(AuthContext)  

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
          createDate: new Date()
        }
        await uploadPost(newPost)          
      } catch(e: any) {        
      }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.textContainer}>
      <Text style={styles.label}>Title</Text>
       <TextField value={title} onChangeText={setTitle}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Subject</Text>
      <TextField value={subject} onChangeText={setSubject}/>
      </View>

      <View style={styles.textContainer}>        
      <TextField value={content} onChangeText={setContent} style={{...styles.textInput, height: 300, marginBottom: 10}} multiline={true}/>
      </View>
      <MainButton title='글 작성하기' onPress={handleUploadPost}/>
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
    marginTop: 10,
    backgroundColor: '#E6E6E6'
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
  }
})