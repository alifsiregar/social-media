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
    justify-content: space-between;
    max-width: 65%;

    h2 {
        margin: 0;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    span{
        font-size: 14px;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`;

export const ButtonNav = styled(Link)`
    background-color: #171717;
    color: #EDEDED;
    border: 0;
    padding: 0 1rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: 300ms ease-in-out;
    display: flex;
    align-items: center;
    text-decoration: none;
    justify-content: center;
`;