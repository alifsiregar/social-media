import {
    Container,
    UserInfo,
    ButtonNav,
} from './ButtonCard.styles';

const ButtonCard : React.FC<{title: string; body?: string; link: string;}> = ({title, body, link}) => {
    return (
        <Container title="ButtonCard">
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

export default ButtonCard
