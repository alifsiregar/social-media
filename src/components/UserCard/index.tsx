import { Link } from 'react-router-dom';
import {
    Container,
    UserInfo,
    ButtonNav,
} from './UserCard.styles';

const UserCard : React.FC<{user :{
    id: number,
    name: string,
    username: string
}}> = ({user}) => {
    return (
        <Container>
            <UserInfo>
                <h2>{user.username}</h2>
                <span>{user.name}</span>
            </UserInfo>
            <ButtonNav to={`/user/${user.id}`}>
                DETAILS
            </ButtonNav>
        </Container>
    )
}

export default UserCard
