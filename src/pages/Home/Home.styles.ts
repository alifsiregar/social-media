import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;
    color: #EDEDED;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media only screen and (min-width: 1386px) {
        margin: 20px auto;
    }
`;