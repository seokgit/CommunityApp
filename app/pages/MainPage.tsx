import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import Article from '../components/Article';
import { useCallback, useState } from 'react';
import { Post } from '../types/post';
import { fetchPosts } from '../services/postService';
import WriteButton from '../components/WriteButton';

function MainPage() {
  const navigation = useNavigation();
  const [posts, setPost] = useState<Post[]>([]);

  useFocusEffect(
    useCallback(()=> {
  (async () => {      
     try {
      const response = await fetchPosts()
      setPost(response)            
     } catch(e) {
      console.log("ERROR", e)
     }
    })()   
    },[])
  )

  const handleNavigation = () => {
     navigation.navigate("Write")
  }

  return (    
      <>
      <FlatList
        data={posts}                
        contentContainerStyle={{marginTop: 10, backgroundColor: 'white'}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => navigation.navigate("Detail", {
            post: item
          })}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
              <Article post={item} />              
            </View>            
            <View style={{ backgroundColor: '#E2E2E2', alignSelf: 'stretch', height: 0.8 }} />
          </TouchableOpacity>
        }
        contentInsetAdjustmentBehavior="automatic"
      />  
      <WriteButton onPress={handleNavigation}/>
      </>  
  );
}

export default MainPage;