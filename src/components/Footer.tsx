import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 2vh 2vw;
    background-color: #d9e6f2;
`;

const StyledText = styled.p`
    font-size: calc(11px + 0.25vw);
`;

const StyledFooterLink = styled(Link)`
    color: inherit;
`

export default function Footer() {
    return (
        <StyledFooter>
            <StyledText>
                All Rights Reserved by Sherman Lee | {" "}
                <StyledFooterLink to = "/credits">Credits &copy;</StyledFooterLink>
            </StyledText>
        </StyledFooter>
    )
}