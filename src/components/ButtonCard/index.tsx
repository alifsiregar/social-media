import {
    Container,
    UserInfo,
    ButtonNav,
} from './ButtonCard.styles';
import { IState } from '../../interfaces';

const ButtonCard : React.FC<IState['buttonCardComponent']> = ({title, body, link}) => {
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
