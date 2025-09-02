import { useNavigation } from '@react-navigation/native';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import Article from '../components/Article';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Post } from '../types/post';
import { fetchPosts } from '../services/postService';

function MainPage() {
  const navigation = useNavigation();
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <TouchableOpacity onPress={()=>{
        navigation.navigate("Write")
       }}>
        <Image style={{width:24, height:24}} source={require('../assets/add.png')}/>
       </TouchableOpacity>
      ),      
    })
  },[navigation])      

  useEffect(() => {    
    (async () => {
      
     try {
      const response = await fetchPosts()
      setPost(response)
      console.log("SUCCESS")
     } catch(e) {
      console.log("ERROR", e)
     }
    })()
  }, [])

  return (    
      <FlatList        
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
  );
}

export default MainPage;