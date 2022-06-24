import React from "react";
import styled from "styled-components";
import "../index.css";

const Advice = () => {
    return (
        <Background>
            <AdviceContainer>
                <AdviceTitle>
                    ADVICE <Number>#117</Number>
                </AdviceTitle>
                <AdviceText>
                    "A caval donato non si guarda in bocca."
                </AdviceText>
                <Divider
                    src="./images/pattern-divider-desktop-svg"
                    alt="divider"
                />
                <DiceContainer>
                    <Dice src="images/dice-icon.svg" alt="Dice" />
                </DiceContainer>
            </AdviceContainer>
        </Background>
    );
};

export default Advice;

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--dark-blue);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AdviceContainer = styled.div`
    width: 90%;
    aspect-ratio: 1;
    max-width: 450px;
    max-height: 450px;
    color: white;
    text-align: center;
    background-color: var(--dark-grayish-blue);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 1.2rem;
`;

const AdviceTitle = styled.h1`
    font-size: 1rem;
    color: var(--neon-green);
`;

const Number = styled.span`
    margin-left: 1ch;
`;

const AdviceText = styled.p`
    color: var(--light-cyan);
`;

const Divider = styled.img``;

const DiceContainer = styled.div`
    position: relative;
    bottom: -75px;
    border-radius: 50%;
    width: 80px;
    aspect-ratio: 1;
    background-color: var(--neon-green);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Dice = styled.img``;
