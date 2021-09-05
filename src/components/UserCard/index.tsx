import {
    Container,
    UserInfo,
    ButtonNav,
} from './UserCard.styles';

const UserCard : React.FC<{title: string; body?: string; link: string;}> = ({title, body, link}) => {
    return (
        <Container>
            <UserInfo>
                <h2>{title}</h2>
                {body && <span>{body}</span>}
            </UserInfo>
            <ButtonNav to={link}>
                DETAILS
            </ButtonNav>
        </Container>
    )
}

export default UserCard
