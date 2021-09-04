import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as Ai from "react-icons/ai";

export const Container = styled.div`
    margin: 20px;
    color: #EDEDED;
    max-width: 1366px;
    display: flex;
    flex-direction: column;

    h4{
        margin: 0;
    }

    @media only screen and (min-width: 1386px) {
        margin: 20px auto;
    }
`;

export const NavLink = styled(Link)`
    color: #EDEDED;
    text-decoration: none;
    display: flex;
`;

export const LeftArrow = styled(Ai.AiOutlineArrowLeft)`
    font-size: 15px;
    background: none;
    margin: 0 10px 0 0;
`;

export const InfoItem = styled.div`
    margin: 0 0 20px 0;

    h3 {
        margin-top: 0;
    }
`;