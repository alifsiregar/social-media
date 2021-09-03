import { useState, useEffect } from 'react';
import {
    Container
} from './Home.styles';
import { getAllUser } from '../../services';

const Home = () => {

    const getAllusers = async () : Promise<void> => {
        await getAllUser().then((res:any) => {
            console.log(res)
        });
    };

    useEffect(() => {
        getAllusers();
    }, [])

    return (
        <Container>
            <h1>Social Media Home</h1>
        </Container>
    )
}

export default Home
