import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Credits() {
    return (
        <Page>
            <h2>Credits</h2>

            <p>
                This website was created by Sherman Lee.
            </p>

            <p>
                Images, resources, and external content are credited
                to their respective owners.
            </p>
        </Page>
    );
}