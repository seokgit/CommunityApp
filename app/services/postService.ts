import firestore from "@react-native-firebase/firestore";
import { Post } from "../types/post";
import { formatDate } from "../utils/DateFormatter";

export const fetchPosts = async (): Promise<Post[]> => {
  const snapshot = await firestore()
    .collection("posts")
    .orderBy("createDate", "desc")
    .get()

  const posts = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const post = { ...doc.data() } as Post;
      const userData = (await firestore().collection("users").doc(post.userId).get()).data();

      return {
        ...post,
        profileImageUrl: userData?.profileImageUrl,
        authorName: userData?.nickname,
        createDate: formatDate(post.createDate)
      }
    })
  )

  return posts
}

export const fetchPostById = async (postId: string): Promise<Post> => {
  const docRef = firestore().collection("posts").doc(postId);
  const docSnap = await docRef.get();

  const post = docSnap.data() as Post;

  const userRef = await firestore().collection("users").doc(post.userId).get();
  const userData = userRef.data();

  return {
    ...post,
    profileImageUrl: userData?.profileImageUrl ?? "",
    authorName: userData?.nickname ?? "",
    createDate: formatDate(post.createDate)
  }
}

export const uploadPost = async (post: Post): Promise<Post> => {
  const postsRef = firestore().collection("posts");
  const docRef = postsRef.doc();
  docRef.set({ ...post, id: docRef.id })
  return await fetchPostById(docRef.id)
}

