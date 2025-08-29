import { View, FlatList, KeyboardAvoidingView, NativeModules, Platform } from 'react-native';
import Comment from '../components/Comment';
import { useEffect, useState } from 'react';
import CommentInput from '../components/CommentInput';
import { SafeAreaView } from 'react-native-safe-area-context';

type CommentType = {
    id: number;
    profileImageUrl: string;
    name: string;
    comment: string;
}

const comments: CommentType[] = [
    {
        id: 0,
        profileImageUrl: '',
        name: 'sdfsdf',
        comment: 'sdfsfd'
    },
    {
        id: 1,
        profileImageUrl: '',
        name: 'sdfsdf',
        comment: 'sdfsfd'
    },
    {
        id: 2,
        profileImageUrl: '',
        name: 'sdfsdf',
        comment: 'sdfsfd'
    },
]

const { StatusBarManager } = NativeModules;

function CommentPage() {
    const [comment, setComment] = useState<CommentType[]>(comments);
    const [statusBarHeight, setStatusBarHeight] = useState(0);

    useEffect(() => {
        Platform.OS == 'ios' ? StatusBarManager.getHeight((statusBarFrameData) => {
            setStatusBarHeight(statusBarFrameData.height)
        }) : null
    }, []);
    return (

        <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={statusBarHeight}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={comment}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 20 }}
                    renderItem={() =>
                        <View style={{ paddingVertical: 10 }}>
                            <Comment profileImageUrl='ddd' name='ddd' comment='ddddd' />
                        </View>
                    }
                />
                <CommentInput />
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default CommentPage;