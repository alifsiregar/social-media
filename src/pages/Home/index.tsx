import { useState, useEffect } from 'react';
import {
    Container,
} from './Home.styles';
import UserCard from '../../components/UserCard';
import { getAllUser } from '../../services';

const Home = () => {

    const [user, setUser] = useState<{
        id: number,
        username: string,
        name: string
    }[]>([]);

    const requestAllUser = async () : Promise<void> => {
        await getAllUser().then((res:any) => {
            setUser(res)
        });
    };

    useEffect(() => {
        requestAllUser();
    }, [])

    return (
        <Container>
            <h1>Home</h1>
            {user.length !== 0 ? 
                user.map((item) => {
                    return <UserCard key={item.id} user={item} />
                })
                    :
                null
            }
        </Container>
    )
}

export default Home
