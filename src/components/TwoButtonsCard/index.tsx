import {
    Container,
    UserInfo,
    ButtonContainer,
    Button,
    ButtonNav,
} from './TwoButtonsCard.styles';
import { IState } from '../../interfaces';

const TwoButtonsCard : React.FC<IState['twoButtonsCardComponent']> = ({title, body, link, onClick}) => {
    return (
        <Container title="TwoButtonsCard">
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

export default TwoButtonsCard
