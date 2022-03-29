import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: hsl(218, 23%, 16%);
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AdviceCard = styled.div`
    background-color: hsl(217, 19%, 24%);
    width: 40vw;
    min-height: 40vh;
    border-radius: 18px;
    position: relative;
    text-align: center;
    
    @media only screen and (max-width: 1150px) {
        width: 50vw;
    }

    @media only screen and (max-width: 750px) {
        width: 90vw;
    }
`;
