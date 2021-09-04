import { Link } from 'react-router-dom';
import {
    Container,
    UserInfo,
    ButtonNav,
} from './UserPostsCard.styles';

const UserPostsCard : React.FC<{posts :{
    userId: number;
    id: number;
    title: string;
    body: string;
}}> = ({posts}) => {
    return (
        <Container>
            <UserInfo>
                <h2>{posts.title}</h2>
                <span>{posts.body}</span>
            </UserInfo>
            <ButtonNav to={`/user/${posts.userId}/post/${posts.id}`}>
                DETAILS
            </ButtonNav>
        </Container>
    )
}

export default UserPostsCard
