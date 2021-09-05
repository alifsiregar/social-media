import { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow,
    PostForm
} from './CommentDetail.styles';
import {
    getCommentDetail,
    updatePostComments
} from '../../services';
import { IState } from "../../interfaces";

const CommentDetail = ({ match }: RouteComponentProps<{id: string; postId: string; commentId: string;}>) => {

    const [newCommentEmail, setNewCommentEmail] = useState<string>('');
    const [newCommentBody, setNewCommentBody] = useState<string>('');
    const [commentLoading, setCommentLoading] = useState(true);
    const [comment, setComment] = useState<IState['commentState']>({
        postId: 0,
        id: 0,
        email: '',
        body: ''
    });

    const requestUpdateComment =  async () : Promise<void> => {
        await updatePostComments(match.params.commentId, newCommentEmail, newCommentBody, match.params.postId).then((res:any) => {
            setComment(res);
        }).then(() => {
            setNewCommentEmail('');
            setNewCommentBody('');
            alert('Comment updated!');
        });
    }

    const handleSubmitComment = (e:any) => {
        e.preventDefault();
        requestUpdateComment();
    }

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getCommentDetail(match.params.commentId).then((res:any) => {
                setComment(res);
                setCommentLoading(false);
            });
        }
        requestData();
    }, [match.params.commentId]);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={`/user/${match.params.id}/post/${match.params.postId}`}>
                    <LeftArrow />
                    <h4>
                        Post
                    </h4>
                </NavLink>
                {!commentLoading ?
                    <> 
                        <h1>
                            {comment.email}
                        </h1>
                        <span className="post-body">
                            {comment.body}
                        </span>
                        <PostForm>
                            <form onSubmit={handleSubmitComment}>
                                <h4>
                                    Edit Comment
                                </h4>
                                <label>
                                    Email
                                    <input onChange={(e) => setNewCommentEmail(e.target.value)} value={newCommentEmail} type="text" name="email" placeholder="New email here!" />
                                </label>
                                <label>
                                    Body
                                    <input onChange={(e) => setNewCommentBody(e.target.value)} value={newCommentBody} type="text" name="body" placeholder="New body here!" />
                                </label>
                                <input className="submit-btn" type="submit" value="Submit" />
                            </form>
                        </PostForm>
                    </>
                    :
                    <h1>Loading...</h1>
                }
            </ContentContainer>
        </Container>
    )
}

export default CommentDetail
