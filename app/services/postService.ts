import firestore from "@react-native-firebase/firestore";
import { Post } from "../types/post";

export const fetchPosts = async (): Promise<Post[]> => {
    const snapshot = await firestore()
    .collection("posts")
    .orderBy("createDate", "desc")
    .get()

    return snapshot.docs.map(
        (doc) => ({id: doc.id, ...doc.data()} as Post)
    )
}

export const uploadPost = async (post: Post) => {    
        const postsRef = firestore().collection("posts");
        const docRef = postsRef.doc();
        docRef.set({...post, id: docRef.id})       
}