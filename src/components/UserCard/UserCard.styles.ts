import styled from "styled-components";

export const Container = styled.div`
    color: #171717;
    background-color: #EDEDED;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 15px 0;
    padding: 1rem;
    animation-duration: 1.5s;
    animation-name: slidein;

    @keyframes slidein {
        from {
            margin-top: 100%;
        }
        to {
            margin-top: 0%;
        }
    }
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