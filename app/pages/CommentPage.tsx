import { View } from 'react-native';
import Comment from '../components/Comment';

function CommentPage() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Comment profileImageUrl='ddd' name='ddd' comment='ddddd'/>            
        </View>
    );
}

export default CommentPage;