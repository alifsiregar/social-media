import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as Ai from "react-icons/ai";

export const Container = styled.div`
    margin: 20px;
    color: #EDEDED;
    display: flex;
    justify-content: center;

    h4{
        margin: 0;
    }
`;

export const ContentContainer = styled.div`
    max-width: 1366px;
    width: 100%;
    display: flex;
    flex-direction: column;
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

export const Plus = styled(Ai.AiFillPlusCircle)`
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

export const PostHeader = styled.div`
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        cursor: pointer;
    }
    h1 {
        margin: 0;
    }

    h4{
        margin: 0;
    }
`;

export const PostForm = styled.div`
    margin: 0 0 20px 0;

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        display: flex;
        flex-direction: column;
        margin: 0 0 10px 0;
    }

    .submit-btn{
        border-radius: 25px;
        border: none;
        background-color: #EDEDED;
        color: #171717;
        padding: 10px;
        font-weight: 600;
        cursor: pointer;
    }

    @media only screen and (min-width: 480px) {
        width: 50%;

        .submit-btn{
            max-width: 250px;
        }
    }
`;