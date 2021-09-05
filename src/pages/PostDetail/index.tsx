import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow
} from './PostDetail.styles';
import { 
    getPostDetail,
    getPostComments
} from '../../services';
import CommentsCard from '../../components/CommentsCard';

const PostDetail = ({ match }: RouteComponentProps<{id:string, postId: string}>) => {

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
    }[]>([])

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
    }, []);

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
                        {comments.map((item) => {
                            return <CommentsCard key={item.id} item={item} />
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
