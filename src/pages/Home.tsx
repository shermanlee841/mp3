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
                I am a Computer Science and Biology undergraduate at
                Boston University.
            </p>
            <p>
                I am interested in software development, technology,
                and problem solving.
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