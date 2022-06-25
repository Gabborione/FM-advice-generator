import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../index.css";

const Advice = () => {
    const [advice, setAdvice] = useState("");
    const [toggleDice, setToggleDice] = useState(false);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => setAdvice(data.slip));
    }, [toggleDice]);

    const handleClick = () => {
        setToggleDice((toggleDice) => !toggleDice);
    };

    return (
        <Background>
            <AdviceContainer>
                <AdviceTitle>
                    ADVICE <Number>#{advice.id}</Number>
                </AdviceTitle>
                <AdviceText>"{advice.advice}"</AdviceText>
                <Divider
                    src="images/pattern-divider-mobile.svg"
                    alt="divider"
                />
                <DiceContainer onClick={handleClick}>
                    <Dice
                        animate={toggleDice}
                        src="images/icon-dice.svg"
                        alt="Dice"
                    />
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
    padding: 2.5rem 1.5rem;

    @media (min-width: 768px) {
        aspect-ratio: 0;
        height: 100%;
        max-width: 600px;
        max-height: 450px;
    }
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

const Divider = styled.img`
    position: relative;
    width: 100%;
    top: 80px;
`;

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
    cursor: pointer;
    box-shadow: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        box-shadow: 0 0 30px var(--neon-green);
    }
`;

const Dice = styled.img`
    width: 40%;
    transform: ${(props) => (props.animate ? "rotate(720deg)" : "none")};
    transition: transform 0.5s;
`;
