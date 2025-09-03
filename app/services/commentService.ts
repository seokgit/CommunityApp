import firestore from "@react-native-firebase/firestore";
import { CommentEntity } from "../types/comment";
import { CommentDto } from "../dto/commentDto";

export const fetchComments = async (postId: string): Promise<CommentEntity[]> => {
        // 이곳에서 코멘트와 유저정보를 조인해서 리턴
        const snapshot = await firestore()
        .collection("posts")        
        .doc(postId)
        .collection("comments")
        .orderBy("createDate", "desc")
        .get()   

        const comments = await Promise.all(
            snapshot.docs.map(async (doc) => {
                const comment = {...doc.data()} as CommentDto
                const userData = (await firestore().collection("users").doc(comment.userId).get()).data();            

                return {
                    ...comment,             
                     userName: userData?.nickname,
                    profileImageUrl: userData?.profileImageUrl
                }
            })
        )
        return comments
}