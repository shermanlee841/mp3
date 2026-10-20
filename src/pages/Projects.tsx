import styled from "styled-components";
import Calculator from "../components/Calculator";

const Page = styled.div`
    width: 100%;
`;

export default function Projects() {
    return (
        <Page>
            <section>
                <h2>Snake</h2>
                <p>
                    <strong>Python, Pygame, Pytorch, Matplotlib, Numpy</strong>
                </p>
                <p>
                    September 2025 - November 2025
                </p>
                <ul>
                    <li>Implemented Q-learning with Bellman updates to approximate an action-value function using a neural network.</li>
                    <li>Engineered a reward function to incentivize food acquisition and penalize collisions.</li>
                    <li>Applied experience replay with mini batch training to stabilize learning and improve sample efficiency.</li>
                    <li>Utilized an epsilon-greedy exploration strategy with decay to balance exploration and exploitation.</li>
                </ul>
            </section>

            <section>
                <h2>Wordle</h2>
                <p>
                    <strong>Java</strong>
                </p>
                <p>
                    February 2025
                </p>
                <ul>
                    <li>Implemented HashSets for letter lookup and validation.</li>
                    <li>Utilized color-coded feedback logic to indicate placement accuracy.</li>
                    <li>Integrated a word list using file I/O to validate guesses against a predefined dictionary.</li>
                </ul>
            </section>

            <section>
                <h2>Coded Excel Spreadsheet</h2>
                <p>
                    <strong>Java</strong>
                </p>
                <p>
                    May 2024
                </p>
                <ul>
                    <li>Developed algebraic features for financial calculations.</li>
                    <li>Utilized downcasting for flexible handling of subclass-specific functionality.</li>
                    <li>Implemented linked list data structures for insertion and deletion.</li>
                </ul>
            </section>

            <Calculator />
        </Page>
    );
}