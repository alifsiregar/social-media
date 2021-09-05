import { useState, useEffect } from 'react';
import {
    Container,
    ContentContainer
} from './Home.styles';
import ButtonCard from '../../components/ButtonCard';
import { getAllUser } from '../../services';
import { IState } from '../../interfaces';

const Home = () => {

    const [user, setUser] = useState<IState['userState']>([]);
    const requestAllUser = async () : Promise<void> => {
        await getAllUser().then((res:any) => {
            setUser(res)
        });
    };

    useEffect(() => {
        requestAllUser();
    }, [])

    return (
        <Container title="Home">
            <ContentContainer>
                <h1>Home</h1>
                {user.length !== 0 ? 
                    user.map((item) => {
                        return <ButtonCard key={item.id} title={item.username} body={item.name} link={`/user/${item.id}`} />
                    })
                        :
                    null
                }
            </ContentContainer>
        </Container>
    )
}

export default Home
