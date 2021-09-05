import {
    Container,
    UserInfo,
    ButtonNav,
} from './UserAlbumsCard.styles';

const UserPostsCard : React.FC<{album :{
    userId: number;
    id: number;
    title: string;
}}> = ({album}) => {
    return (
        <Container>
            <UserInfo>
                <h2>{album.title}</h2>
            </UserInfo>
            <ButtonNav to={`/user/${album.id}`}>
                DETAILS
            </ButtonNav>
        </Container>
    )
}

export default UserPostsCard
