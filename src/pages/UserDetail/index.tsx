import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow,
    InfoItem,
    PostHeader,
    PostForm,
    Plus
} from './UserDetail.styles';
import { 
    getUserDetail,
    getUserPosts,
    getUserAlbums,
    addUserPosts,
    deleteUserPosts
} from '../../services';
import UserCard from '../../components/UserCard';
import CommentsCard from '../../components/CommentsCard';

const UserDetail = ({ match }: RouteComponentProps<{id:string}>) => {

    const [detailLoading, setDetailLoading] = useState<boolean>(true);
    const [postsLoading, setPostsLoading] = useState<boolean>(true);
    const [albumLoading, setAlbumLoading] = useState<boolean>(true);
    const [showNewPost, setShowNewPost] = useState<boolean>(false);
    const [newPostTitle, setNewPostTitle] = useState<string>('');
    const [newPostBody, setNewPostBody] = useState<string>('');
    const [user, setUser] = useState<{
        id: number;
        username: string;
        name: string;
        email: string;
        address:{
            city: string;
            zipcode: string
        };
        phone: string;
        website: string;
        company:{
            name: string
        }
    }>({
        id: 0,
        username: '',
        name: '',
        email: '',
        address:{
            city: '',
            zipcode: '',
        },
        phone: '',
        website: '',
        company:{
            name: ''
        }
    });
    const [posts, setPosts] = useState<{
        userId: number;
        id: number;
        title: string;
        body: string;
    }[]>([]);
    const [album, setAlbum] = useState<{
        userId: number;
        id: number;
        title: string;
    }[]>([]);

    const requestNewPost =  async () : Promise<void> => {
        await addUserPosts(match.params.id, newPostTitle, newPostBody).then((res:any) => {
            setPosts(prevState => [...prevState, res]);
        }).then(() => {
            setNewPostTitle('');
            setNewPostBody('');
            alert('Post added!');
        });
    }

    const deletePost = async (id: string) : Promise<void> => {
        await deleteUserPosts(id).then((res:any) => {
            setPosts(posts.filter((item) => (item.id).toString() !== id))
        }).then(() => alert('Post deleted!'));
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        requestNewPost();
    }

    const handleDelete = (id: string) => {
        deletePost(id);
    }

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getUserDetail(match.params.id).then((res:any) => {
                setUser(res);
                setDetailLoading(false);
            });
            await getUserPosts(match.params.id).then((res:any) => {
                setPosts(res);
                setPostsLoading(false);
            });
            await getUserAlbums(match.params.id).then((res:any) => {
                setAlbum(res);
                setAlbumLoading(false);
            });
        }
        requestData();
    }, [match.params.id]);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={'/'}>
                    <LeftArrow />
                    <h4>
                        Home
                    </h4>
                </NavLink>

                {!detailLoading ?
                    <>
                    <h1>{user.username}'s Profile</h1>
                    <div>
                        <InfoItem>
                            <h3>
                                Username
                            </h3>
                            <span>
                                {user.username}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Full Name
                            </h3>
                            <span>
                                {user.name}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Email
                            </h3>
                            <span>
                                {user.email}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Address
                            </h3>
                            <span>
                                {user.address.city}, {user.address.zipcode}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Phone Number
                            </h3>
                            <span>
                                {user.phone}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Website
                            </h3>
                            <span>
                                {user.website}
                            </span>
                        </InfoItem>
                        <InfoItem>
                            <h3>
                                Company
                            </h3>
                            <span>
                                {user.company.name}
                            </span>
                        </InfoItem>
                    </div>
                    </>
                    :
                    <h1>
                        Loading Profile... 
                    </h1>
                }
                
                {!postsLoading ?
                    <>
                        <PostHeader>
                            <h1>{user.username}'s Posts</h1>
                            <div onClick={() => setShowNewPost(prevState => !prevState)}>
                                <Plus />
                                <h4>Add New Post</h4>
                            </div>
                        </PostHeader>
                        {showNewPost && 
                            <PostForm>
                                <form onSubmit={handleSubmit}>
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
                        }
                        {posts.map((item) => {
                            return <CommentsCard key={item.id} title={item.title} body={item.body} link={`/user/${item.userId}/post/${item.id}`} onClick={() => handleDelete((item.id).toString())} />
                        })}
                    </>
                        :
                    <h1>
                        Loading Posts... 
                    </h1>
                }

                {!albumLoading ?
                    <>
                        <h1>{user.username}'s Albums</h1>
                        {album.map((item) => {
                            return <UserCard key={item.id} title={item.title} link={`/user/${item.userId}/album/${item.id}`} />
                        })}
                    </>
                        :
                    <h1>
                        Loading Albums... 
                    </h1>
                }
            </ContentContainer>
        </Container>
    )
}

export default UserDetail
