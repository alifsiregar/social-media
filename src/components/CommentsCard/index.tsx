import {
    Container,
    UserInfo,
    ButtonContainer,
    ButtonNav,
} from './CommentsCard.styles';

const CommentsCard : React.FC<{item :{
    postId: number;
    id: number;
    email: string;
    body: string;
}}> = ({item}) => {
    return (
        <Container>
            <UserInfo>
                <h3>{item.email}</h3>
                <span>{item.body}</span>
            </UserInfo>
            <ButtonContainer>
                <ButtonNav to={`/user/${item.id}`}>
                    DETAILS
                </ButtonNav>
                <ButtonNav to={`/user/${item.id}`}>
                    DETAILS
                </ButtonNav>
            </ButtonContainer>
        </Container>
    )
}

export default CommentsCard
