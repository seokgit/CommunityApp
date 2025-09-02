import firestore from "@react-native-firebase/firestore";
import { Post } from "../types/post";

export const fetchPosts = async (): Promise<Post[]> => {        
    const snapshot = await firestore()
    .collection("posts")
    .orderBy("createDate", "desc")
    .get()    
   
    const posts = await Promise.all(
        snapshot.docs.map(async (doc) => {
            const post = { id: doc.id, ...doc.data()} as Post;
            const userData = (await firestore().collection("users").doc(post.userId).get()).data();            
            
            return {...post, profileImageUrl: userData?.profileImageUrl, authorName: userData?.nickname}
        })
    )

    return posts    
}

export const uploadPost = async (post: Post) => {    
        const postsRef = firestore().collection("posts");
        const docRef = postsRef.doc();
        docRef.set({...post, id: docRef.id})       
}