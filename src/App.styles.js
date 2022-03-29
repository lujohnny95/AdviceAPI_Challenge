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
`;

export const AdviceTitle = styled.h4`
    color: hsl(150, 100%, 66%);
    font-size: 16px;
    letter-spacing: 4px;
    padding-top: 40px;
`; 

export const AdviceText = styled.h2`
    color: hsl(193, 38%, 86%);
    font-size: 28px;
    padding: 10px 20px;
    margin: 0 25px;
`;
