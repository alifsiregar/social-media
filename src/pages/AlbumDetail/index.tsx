import { useState, useEffect } from "react";
import { RouteComponentProps } from 'react-router-dom';
import {
    Container,
    ContentContainer,
    NavLink,
    LeftArrow,
    PhotosContainer
} from './AlbumDetail.styles';
import PhotosCard from '../../components/PhotosCard';
import { 
    getAlbumDetail,
    getAlbumPhotos
} from '../../services';

const AlbumDetail = ({ match }: RouteComponentProps<{id:string, albumId: string}>) => {

    const [albumDetailLoading, setAlbumDetailLoading] = useState<boolean>(true);
    const [albumPhotosLoading, setAlbumPhotosLoading] = useState<boolean>(true);
    const [albumDetail, setAlbumDetail] = useState<{
        userId: number;
        id: number;
        title: string;
    }>({
        userId: 0,
        id: 0,
        title: ''
    });
    const [albumPhotos, setAlbumPhotos] = useState<{
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
    }[]>([]);

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getAlbumDetail(match.params.albumId).then((res:any) => {
                setAlbumDetail(res);
                setAlbumDetailLoading(false);
            });
            await getAlbumPhotos(match.params.albumId).then((res:any) => {
                setAlbumPhotos(res);
                setAlbumPhotosLoading(false);
            })
        }
        requestData();
    }, []);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={`/user/${match.params.id}`}>
                    <LeftArrow />
                    <h4>
                        Profile
                    </h4>
                </NavLink>
                <h1>{albumDetail.title}</h1>
                {!albumPhotosLoading ? 
                    <PhotosContainer>
                        {albumPhotos.map((item) => {
                            return <PhotosCard key={item.id} image={item.thumbnailUrl} title={item.title} />
                        })}
                    </PhotosContainer>
                    :
                    <h1>
                        Loading...
                    </h1>
                }
            </ContentContainer>
        </Container>
    )
}

export default AlbumDetail
