import { View, FlatList, KeyboardAvoidingView, NativeModules, Platform, Text } from 'react-native';
import Comment from '../components/Comment';
import { useContext, useEffect, useState } from 'react';
import CommentInput from '../components/CommentInput';
 import { Keyboard } from 'react-native';
import { CommentEntity } from '../types/comment';
import { fetchComments, uploadComment } from '../services/commentService';
import { CommentDto } from '../dto/commentDto';
import { AuthContext } from '../context/AuthContext';

const { StatusBarManager } = NativeModules;

function CommentPage({ route }) {
    const postId: string = route.params.postId
    const [comment, setComment] = useState<CommentEntity[]>([]);
    const [statusBarHeight, setStatusBarHeight] = useState(0);
    const [inputComment, setInputComment] = useState<string>("")
    const { user } = useContext(AuthContext)

    // 키보드 오프셋 조정
    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);

    // 처음화면 진입 시 코멘트 불러오기
    useEffect(() => {
        loadComments()
    }, [])

    // 댓글 불러오기
    const loadComments = async () => {
        try {
            const response = await fetchComments(postId)
            setComment(response)
        } catch (e) {
            console.log("ERROR", e)
        }
    }

    // 댓글 전송
    const handleSubmit = async () => {        
            try {
                const comment: CommentDto = {
                    id: "",
                    content: inputComment,
                    createdDate: new Date().toISOString(),
                    userId: user?.id ?? ""
                }
                await uploadComment(postId, comment)
                await loadComments()
                setInputComment("")
                Keyboard.dismiss()
            } catch (e) {
                console.log("ERROR", e)
            }        
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: 'white'}} behavior='padding' keyboardVerticalOffset={statusBarHeight + 44}>            
                <Text style={{paddingLeft: 16, marginTop: 10, color: 'gray', fontWeight: '700'}}>댓글{comment.length}개</Text>
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
                <CommentInput value={inputComment} onChangeText={setInputComment} onSubmit={handleSubmit} />            
        </KeyboardAvoidingView>
    );
}

export default CommentPage;