import styled from "styled-components";

export const Container = styled.div`
    color: #171717;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 1rem;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        margin: 0;
    }

    span{
        font-size: 14px;
    }
`;

export const Button = styled.button`
    background-color: #171717;
    color: #EDEDED;
    border: 0;
    padding: 0 1rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: 300ms ease-in-out;

    &:hover {
        padding: 0 2rem;
    }
`;