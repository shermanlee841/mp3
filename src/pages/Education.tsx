import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Education() {
    return (
        <Page>
            <h2>Education</h2>

            <h3>Boston University</h3>

            <p>Boston, MA</p>
            <p>Expected Graduation: May 2028</p>
            <p>BA Computer Science, Minor in Biology</p>
            <p>GPA: 3.5/4.0</p>

            <h3>Relevant Coursework</h3>

            <ul>
                <li>Discrete Mathematics</li>
                <li>Data Structures</li>
                <li>Computer Systems</li>
                <li>Linear Algebra</li>
                <li>Probability in Computing</li>
                <li>Web Development</li>
                <li>Analysis of Algorithms</li>
            </ul>
        </Page>
    );
}