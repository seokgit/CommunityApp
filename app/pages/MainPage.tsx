import { useNavigation } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity } from 'react-native';
import Article from '../components/Article';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import postData from '../assets/post.json';
import { Post } from '../types/post';

function MainPage() {
  const navigation = useNavigation();
  const [posts, setPost] = useState<Post[]>(postData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("Detail", {
            post: item
          })}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
              <Article post={item} />
            </View>
            <View style={{ backgroundColor: 'gray', alignSelf: 'stretch', height: 1 }} />
          </TouchableOpacity>
        }
        contentInsetAdjustmentBehavior="automatic"
      />
    </SafeAreaView>
  );
}

export default MainPage;