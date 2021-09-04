import {
    Container,
    UserInfo,
    Button
} from './UserCard.styles';

const index = () => {
    return (
        <Container>
            <UserInfo>
                <h2>Bret</h2>
                <span>Leanne Graham</span>
            </UserInfo>
            <Button>
                DETAILS
            </Button>
        </Container>
    )
}

export default index
