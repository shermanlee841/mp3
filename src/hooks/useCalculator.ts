import { useState } from "react";

export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [output, setOutput] = useState<number | string>("");

    function getNumber() {
        const first = parseFloat(firstNumber);
        const second = parseFloat(secondNumber);
        return [first, second];
    }

    function showResult(result: number) {
        setOutput(result);
    }

    function addition() {
        const numbers = getNumber();
        showResult(numbers[0] + numbers[1]);
    }
    function subtraction() {
        const numbers = getNumber();
        showResult(numbers[0] - numbers[1]);
    }
    function multiplication() {
        const numbers = getNumber();
        showResult(numbers[0] * numbers[1]);
    }
    function division() {
        const numbers = getNumber();
        showResult(numbers[0] / numbers[1]);
    }

    function power() {
        const numbers = getNumber();
        let result = 1;
        if (numbers[1] >= 0) {
            for (let i = 0; i < numbers[1]; i++) {
                result = result * numbers[0];
            }
        }

        showResult(result);
    }

    function clearCalculator() {
        setOutput("");
        setFirstNumber("");
        setSecondNumber("");
    }

    return {
        firstNumber,
        secondNumber,
        output,
        addition,
        subtraction,
        multiplication,
        division,
        power,
        clearCalculator
    };
}