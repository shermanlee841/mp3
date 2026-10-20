import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Skills() {
    return (
        <Page>
            <h2>Skills</h2>

            <h3>Programming</h3>
            <p>Python, Java, C, Assembly, SQL</p>

            <h3>Developer Tools</h3>
            <p>
                Replit, Git, VS Code, WebStorm, Vim/Emacs, Matplotlib,
                PyTorch, NumPy, Canva, Adobe Premiere Pro, Pandas
            </p>

            <h3>Professional Skills</h3>
            <p>
                Communication, Leadership, Adaptability, Public Speaking,
                Problem Solving, Critical Thinking, Emotional Intelligence
            </p>
        </Page>
    );
}