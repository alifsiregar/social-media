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
import { IState } from "../../interfaces";

const AlbumDetail = ({ match }: RouteComponentProps<{id:string, albumId: string}>) => {

    const [albumPhotosLoading, setAlbumPhotosLoading] = useState<boolean>(true);
    const [albumDetail, setAlbumDetail] = useState<IState['albumDetailState']>({
        userId: 0,
        id: 0,
        title: ''
    });
    const [albumPhotos, setAlbumPhotos] = useState<IState['albumPhotosState']>([]);

    useEffect(() => {
        const requestData = async () : Promise<void> => {
            await getAlbumDetail(match.params.albumId).then((res:any) => {
                setAlbumDetail(res);
            });
            await getAlbumPhotos(match.params.albumId).then((res:any) => {
                setAlbumPhotos(res);
                setAlbumPhotosLoading(false);
            })
        }
        requestData();
    }, [match.params.albumId]);

    return (
        <Container>
            <ContentContainer>
                <NavLink to={`/user/${match.params.id}`}>
                    <LeftArrow />
                    <h4>
                        Profile
                    </h4>
                </NavLink>
                {!albumPhotosLoading ?
                    <>
                        <h1>{albumDetail.title}</h1>
                        <PhotosContainer>
                            {albumPhotos.map((item) => {
                                return <PhotosCard key={item.id} image={item.thumbnailUrl} title={item.title} link={`/user/${match.params.id}/album/${item.albumId}/photo/${item.id}`} />
                            })}
                        </PhotosContainer>
                    </>
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
