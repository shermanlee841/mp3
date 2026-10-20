import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";

const CalculatorContainer = styled.div`
    margin:-top: 4vh;
`;

const CalculatorInput = styled.input`
    margin: 1vh 0.5 vw;
    padding: 1vh;
`;

const CalculatorButton = styled.button`
    margin: 0.5vh 0.5vw;
    padding: 1vh 1vw;
`;

const Result = styled.p`
    font-weight: bold;
`;

export default function Calculator() {
    const {
        firstNumber,
        secondNumber,
        output,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearCalculator
    } = useCalculator();

    const firstNumber =