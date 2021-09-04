import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    NavLink,
    LeftArrow,
    InfoItem,
} from './UserDetail.styles';
import { 
    getUserDetail,
    getUserPosts,
    getUserAlbums
} from '../../services';
import UserPostsCard from '../../components/UserPostsCard';
import UserAlbumsCard from '../../components/UserAlbumsCard';

const UserDetail = ({ match }: RouteComponentProps<{id:string}>) => {

    const [detailLoading, setDetailLoading] = useState<boolean>(true);
    const [postsLoading, setPostsLoading] = useState<boolean>(true);
    const [albumLoading, setAlbumLoading] = useState<boolean>(true);
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
    }, []);

    return (
        <Container>
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
                    <h1>{user.username}'s Posts</h1>
                    {posts.map((item) => {
                        return <UserPostsCard key={item.id} posts={item} />
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
                        return <UserAlbumsCard key={item.id} album={item} />
                    })}
                </>
                    :
                <h1>
                    Loading Albums... 
                </h1>
            }
        </Container>
    )
}

export default UserDetail
