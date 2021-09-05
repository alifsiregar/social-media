import {
    Container
} from './PhotosCard.styles';

const PhotosCard: React.FC<{
    image: string;
    title: string;
}> = ({image, title}) => {
    return (
        <Container>
            <img src={image} alt="" />
            <h3>
                {title}
            </h3>
        </Container>
    )
}

export default PhotosCard
