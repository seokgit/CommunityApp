import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { useNavigation } from '@react-navigation/native';
import { Post } from '../types/post';
import { useEffect } from 'react';

function DetailPage({ route }) {
  const post: Post = route.params.post
  const navigation = useNavigation()

      useEffect(() => {              
      navigation.setOptions({        
         headerLeft: () => (        
         <TouchableOpacity onPress={() => {
          navigation.goBack();
         }} >
          <Image style={{width: 20, height: 20}} source={require('../assets/back.png')}/>
         </TouchableOpacity>
        ),    
      })
    },[navigation])  

  return (
    <View style={styles.container}>      
     <ScrollView style={{alignSelf: 'stretch'}}>
       <View style={{paddingHorizontal: 16, paddingTop: 20}}>
        <ProfileCard profileImageUrl={post.profileImageUrl} name={post.authorName} date={post.createDate} subject={post.subject}/>
      <Text style={styles.titleText}>
       <Text style={{color: '#2A7CE8'}}>Q.</Text> {post.title}
      </Text>

      <Text style={styles.contentText}>
        {post.content}
      </Text>
       </View>
     </ScrollView>
     <View style={styles.statsContainer}>      
      <TouchableOpacity style={styles.comment} onPress={() => navigation.navigate("Comment", {
        postId: post.id
      })}> 
        <Image source={require('../assets/message.png')} style={{width: 24, height: 24}}/>
        <Text>140</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',      
  },
  titleText: {
    fontSize: 30,
    fontWeight: '700',
    paddingTop: 20
  },
  contentText: {
    fontSize: 18,    
    paddingTop: 10    
  },
  statsContainer: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 20
  },
  comment: {
     flexDirection: 'row',
     alignItems: 'center',
     gap: 4
  }
})