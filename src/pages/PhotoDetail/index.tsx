import { useEffect, useState } from "react";
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow,
    PhotoContainer
} from './PhotoDetail.styles';
import {
    getPhotoDetail
} from '../../services';

const PhotoDetail = ({ match }: RouteComponentProps<{id: string; albumId: string; photoId: string;}>) => {

    const [photoLoading, setPhotoLoading] = useState(true);
    const [photo, setPhoto] = useState<{
        albumId: number;
        id: number;
        title: string;
        url: string;
    }>({
        albumId: 0,
        id: 0,
        title: '',
        url: ''
    });

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getPhotoDetail(match.params.photoId).then((res:any) => {
                setPhoto(res);
                setPhotoLoading(false);
            });
        }
        requestData();
    }, [match.params.photoId]);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={`/user/${match.params.id}/album/${photo.albumId}`}>
                    <LeftArrow />
                    <h4>
                        Album
                    </h4>
                </NavLink>
                {!photoLoading ? 
                    <PhotoContainer>
                        <img src={photo.url} alt={photo.title} />
                        <h1>{photo.title}</h1>
                    </PhotoContainer>
                    :
                    <h1>Loading...</h1>
                }
            </ContentContainer>
        </Container>
    )
}

export default PhotoDetail
