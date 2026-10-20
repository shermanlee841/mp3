import styled from "styled-components";
import Calculator from "../components/Calculator";

const Page = styled.div`
    width: 100%;
`;

export default function Projects() {
    return (
        <Page>
            <h2>Projects</h2>

            <h3>Snake</h3>
            <p>
                Python, Pygame, PyTorch, Matplotlib, NumPy
            </p>
            <p>September 2025 – November 2025</p>

            <h3>Wordle</h3>
            <p>Java</p>
            <p>February 2025</p>

            <h3>Coded Excel Spreadsheet</h3>
            <p>Java</p>
            <p>May 2024</p>

            <Calculator />
        </Page>
    );
}