import {
    Container,
    NavLink
} from './PhotosCard.styles';

const PhotosCard: React.FC<{
    image: string;
    title: string;
    link: string;
}> = ({image, title, link}) => {
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
