import { View, FlatList, KeyboardAvoidingView, NativeModules, Platform } from 'react-native';
import Comment from '../components/Comment';
import { useEffect, useState } from 'react';
import CommentInput from '../components/CommentInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommentEntity } from '../types/comment';
import { fetchComments } from '../services/commentService';

const { StatusBarManager } = NativeModules;

function CommentPage({ route }) {
    const postId: string = route.params.postId
    const [comment, setComment] = useState<CommentEntity[]>([]);
    const [statusBarHeight, setStatusBarHeight] = useState(0);

    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);

    useEffect(() => {
         (async () => {      
             try {
              const response = await fetchComments(postId)
              setComment(response)            
             } catch(e) {
              console.log("ERROR", e)
             }
            })()  
    },[])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={statusBarHeight}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={comment}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20 }}
                    renderItem={(item) =>
                        <View style={{ paddingVertical: 10 }}>
                            <Comment comment={item.item} />
                        </View>
                    }
                />
                <CommentInput />
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default CommentPage;