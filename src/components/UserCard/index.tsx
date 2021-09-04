import {
    Container,
    UserInfo,
    Button
} from './UserCard.styles';

const index : React.FC<{user :{
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
            <Button>
                DETAILS
            </Button>
        </Container>
    )
}

export default index
