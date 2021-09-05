import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    color: #171717;
    background-color: #EDEDED;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px 0;
    padding: 1rem;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 65%;

    h3 {
        margin: 0 0 5px 0;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    span{
        font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: max-content;
    margin: 0 0 0 15px;

    @media only screen and (min-width: 800px) {
        flex-direction: row;
        width: 225px;
    }
`;

export const Button = styled.div`
    margin:  5px 0 5px 0;
    height: 40px;
    background-color: #171717;
    color: #EDEDED;
    border: 0;
    padding: 0 1rem;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: 300ms ease-in-out;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
`;

export const ButtonNav = styled(Link)`
    margin:  5px 0 5px 0;
    height: 40px;
    background-color: #171717;
    color: #EDEDED;
    border: 0;
    padding: 0 1rem;
    border-radius: 50px;
    font-weight: 500;
    cursor: pointer;
    transition: 300ms ease-in-out;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
`;