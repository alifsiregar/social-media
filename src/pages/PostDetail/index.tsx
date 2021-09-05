import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow,
    PostForm
} from './PostDetail.styles';
import { 
    getPostDetail,
    getPostComments,
    updateUserPosts,
    addPostComments,
    deletePostComments
} from '../../services';
import CommentsCard from '../../components/CommentsCard';

const PostDetail = ({ match }: RouteComponentProps<{id:string, postId: string}>) => {

    const [newPostTitle, setNewPostTitle] = useState<string>('');
    const [newPostBody, setNewPostBody] = useState<string>('');
    const [newCommentEmail, setNewCommentEmail] = useState<string>('');
    const [newCommentBody, setNewCommentBody] = useState<string>('');
    const [postLoading, setPostLoading] = useState(true);
    const [commentLoading, setCommentLoading] = useState(true);
    const [post, setPost] = useState<{
        userId: number;
        id: number;
        title: string;
        body: string;
    }>({
        userId: 0,
        id: 0,
        title: '',
        body: ''
    });
    const [comments, setComments] = useState<{
        postId: number;
        id: number;
        email: string;
        body: string;
    }[]>([]);

    const requestUpdatePost =  async () : Promise<void> => {
        await updateUserPosts(match.params.postId, newPostTitle, newPostBody, match.params.id).then((res:any) => {
            setPost(res);
        }).then(() => {
            setNewPostTitle('');
            setNewPostBody('');
            alert('Post updated!');
        });
    }

    const requestNewComment =  async () : Promise<void> => {
        await addPostComments(match.params.postId, newCommentEmail, newCommentBody).then((res:any) => {
            setComments(prevState => [...prevState, res])
        }).then(() => {
            setNewCommentEmail('');
            setNewCommentBody('');
            alert('Comment posted!');
        });
    }

    const deletePost = async (id: string) : Promise<void> => {
        await deletePostComments(id).then((res:any) => {
            setComments(comments.filter((item) => (item.id).toString() !== id))
        }).then(() => alert('Post deleted!'));
    }

    const handleDelete = (id: string) => {
        deletePost(id);
    }

    const handleSubmitPost = (e:any) => {
        e.preventDefault();
        requestUpdatePost();
    }

    const handleSubmitComment = (e:any) => {
        e.preventDefault();
        requestNewComment();
    }

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getPostDetail(match.params.postId).then((res:any) => {
                setPost(res);
                setPostLoading(false);
            });
            await getPostComments(match.params.postId).then((res:any) => {
                setComments(res);
                setCommentLoading(false);
            })
        }
        requestData();
    }, [match.params.postId]);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={`/user/${match.params.id}`}>
                    <LeftArrow />
                    <h4>
                        Profile
                    </h4>
                </NavLink>

                {!postLoading ?
                    <> 
                        <h1>
                            {post.title}
                        </h1>
                        <span className="post-body">
                            {post.body}
                        </span>
                        <PostForm>
                            <form onSubmit={handleSubmitPost} >
                                <h4>
                                    Edit Post
                                </h4>
                                <label>
                                    Title
                                    <input onChange={(e) => setNewPostTitle(e.target.value)} value={newPostTitle} type="text" name="title" placeholder="New title here!" />
                                </label>
                                <label>
                                    Body
                                    <input onChange={(e) => setNewPostBody(e.target.value)} value={newPostBody} type="text" name="body" placeholder="New body here!" />
                                </label>
                                <input className="submit-btn" type="submit" value="Submit" />
                            </form>
                        </PostForm>
                    </>
                    :
                    <h1>
                        Loading Post... 
                    </h1>
                }

                {!commentLoading ?
                    <>
                        <h1>
                            Comments
                        </h1>
                        <PostForm className="comment-form">
                            <form onSubmit={handleSubmitComment} >
                                <h4>
                                    Add Comment
                                </h4>
                                <label>
                                    Email
                                    <input onChange={(e) => setNewCommentEmail(e.target.value)} value={newCommentEmail} type="text" name="email" placeholder="Your email here!" />
                                </label>
                                <label>
                                    Body
                                    <input onChange={(e) => setNewCommentBody(e.target.value)} value={newCommentBody} type="text" name="body" placeholder="Your comment here!" />
                                </label>
                                <input className="submit-btn" type="submit" value="Submit" />
                            </form>
                        </PostForm> 
                        {comments.map((item) => {
                            return <CommentsCard key={item.id} title={item.email} body={item.body} link={`/user/${match.params.id}/post/${item.postId}/comment/${item.id}`} onClick={() => handleDelete((item.id).toString())} />
                        })}
                    </>
                        :
                    <h1>
                        Loading Post... 
                    </h1>
                }
            </ContentContainer>
        </Container>
    )
}

export default PostDetail
