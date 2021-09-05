import {
    Container,
    NavLink
} from './PhotosCard.styles';
import { IState } from '../../interfaces';

const PhotosCard: React.FC<IState['photosCardComponent']> = ({image, title, link}) => {
    return (
        <NavLink to={link}>
            <Container title="PhotosCard">
                <img src={image} alt={title} />
                <h3>
                    {title}
                </h3>
            </Container>
        </NavLink>
    )
}

export default PhotosCard
