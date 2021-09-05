import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin: 10px;
    padding: 20px;
    width: 200px;
    height: 90%;
    background-color: #EDEDED;
    color: #171717;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
`;