import styled from "styled-components";

const Page = styled.div`
    width: 100%;
`;

export default function Interests() {
    return (
        <Page>
            <ul>
                <li>Swimming, I competed competitively for 10 years.</li>
                <li>Triathalon, currently part of BU's Triathalon Team, as well as training for an IronMan.</li>
                <li>Photography, specifically nature/landscape photography, I love capturing a good sunset.</li>
                <li>Surfing, growing up on the coast, I love to take my board out on a Sunday morning.</li>
                <li>Hiking, some of my favorite spots include Point Reyes and Muir Woods.</li>
                <li>Baking, I love finding new recipes online and creating them at home.</li>
                <li>Legos, I am a massive Lego Star Wars Fan, I hope to one day build the UCS Venator.</li>
            </ul>
        </Page>
    );
}