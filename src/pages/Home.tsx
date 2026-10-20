import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Home() {
    return (
        <Page>
            <h2>About Me</h2>

            <img
                src="/me.jpeg"
                alt="Sherman Lee"
                width="200"
            />

            <p>
                I am an undergraduate student at Boston University pursuing a Bachelor of Arts in Computer Science, as well as Biology.
                I have an expected graduation date of May 2028. Post Graduation, I hope to pursue a job in bioinformatics or some role with data.
                I decided to pursue biotechnology because of my love for the environment and nature.
            </p>
            <p>
                My experience combines skills in languages I've picked up from my curriculum at Boston University, as well as data analysis and marketing from Internships.
                I have worked with Python, java, Assembly, SQL, and developer tools.
                I am currently looking to expand my proficiency in CS by obtaining an internship.
            </p>
            <p>
                <a
                    href="https://www.linkedin.com/in/sherman-lee1014/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </p>
            <p>
                <a
                    href="https://github.com/shermanlee841"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </p>
        </Page>
    )
}