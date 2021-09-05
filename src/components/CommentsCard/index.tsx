import {
    Container,
    UserInfo,
    ButtonContainer,
    Button,
    ButtonNav,
} from './CommentsCard.styles';

const CommentsCard : React.FC<{title: string; body: string; link: string; onClick : React.MouseEventHandler<HTMLDivElement>}> = ({title, body, link, onClick}) => {
    return (
        <Container>
            <UserInfo>
                <h3>{title}</h3>
                <span>{body}</span>
            </UserInfo>
            <ButtonContainer>
                <Button onClick={onClick}>
                    DELETE
                </Button>
                <ButtonNav to={link}>
                    DETAILS
                </ButtonNav>
            </ButtonContainer>
        </Container>
    )
}

export default CommentsCard
