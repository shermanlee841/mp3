import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";

const CalculatorContainer = styled.section`
    margin-bottom: 4vh;
    padding: 2vh 2vw;
    background-color: #eef3f7;
`;

const CalculatorTitle = styled.h3`
    margin-bottom: 2vh;
`;

const Input = styled.input`
    padding: 1vh 1vw;
    margin-right: 1vw;
    margin-bottom: 2vh;
`;

const CalculatorButton = styled.button`
    padding: 1vh 1.5vw;
    margin-right: 0.5vw;
    margin-bottom: 1vh;
`;

const Output = styled.div<{ $negative: boolean }>`
    margin-top: 2vh;
    color: ${(props) => (props.$negative ? "red" : "black")};
`;

export default function Calculator() {
    const {
        firstNumber,
        secondNumber,
        output,
        setFirstNumber,
        setSecondNumber,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearCalculator
    } = useCalculator();

    return (
        <CalculatorContainer>
            <CalculatorTitle>Calculator</CalculatorTitle>

            <Input
                type = "number"
                value = {firstNumber}
                onChange = {(event) => setFirstNumber(event.target.value)}
                placeholder = "First number"
            />

            <Input
                type = "number"
                value = {secondNumber}
                onChange = {(event) => setSecondNumber(event.target.value)}
                placeholder = "Second number"
            />

            <div>
                <CalculatorButton onClick = {addition}>
                    +
                </CalculatorButton>

                <CalculatorButton onClick = {subtraction}>
                    -
                </CalculatorButton>

                <CalculatorButton onClick = {multiplication}>
                    *
                </CalculatorButton>

                <CalculatorButton onClick = {division}>
                    /
                </CalculatorButton>

                <CalculatorButton onClick = {power}>
                    **
                </CalculatorButton>

                <CalculatorButton onClick = {clearCalculator}>
                    Clear
                </CalculatorButton>
            </div>

            <Output $negative={typeof output === "number" && output < 0}>
                <p>{output}</p>
            </Output>
        </CalculatorContainer>
    );
}