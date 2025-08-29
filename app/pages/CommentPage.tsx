import { View, FlatList } from 'react-native';
import Comment from '../components/Comment';
import { useState } from 'react';

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

function CommentPage() {
    const [comment, setComment] = useState<CommentType[]>(comments)
    return (
                
            <FlatList
                    style={{ flex: 1 }}
                    data={comment}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{paddingHorizontal: 16, paddingTop: 20}}
                    renderItem={() =>         
                  <View style={{paddingVertical: 10}}>
                    <Comment profileImageUrl='ddd' name='ddd' comment='ddddd'/>     
                  </View>                                  
                }
                  />
        
    );
}

export default CommentPage;