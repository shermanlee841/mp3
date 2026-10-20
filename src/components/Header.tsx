import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: 4vh 2vw;
    background-color: #d9e6f2;
    text-align: left;
    
    @media screen and (max-width: 750px) {
        text-align: center;
        padding: 3vh 2vw;
    }
`;

const StyledTitle = styled.h1`
    margin-bottom: 1vh;
    font-size: calc(24px + 2vw);
`;

const StyledSubtitle = styled.p`
    font-size: calc(12px + 0.5vw);
`;

const pageInfo: Record<string, {title: string; subtitle?: string }> = {
    "/": {
        title: "Sherman Lee",
        subtitle: "Computer Science and Biology Undergraduate | Boston University"
    },
    "/education": {
        title: "Boston University | Computer Science"
    },
    "/skills": {
        title: "Skills",
        subtitle: "programming, Developer Tools, and Professional skills"
    },
    "/experience": {
        title: "Experience",
        subtitle: "Professional experience in data analysis, marketing, and leadeership"
    },
    "/projects": {
        title: "Projects",
        subtitle: "Programming and Computer Science Projects"
    },
    "/interests": {
        title: "Interests"
    },
    "/credits": {
        title: "Project Information and acknowledgements"
    }
};

export default function Header() {
    const { pathname } = useLocation();
    const info = pageInfo[pathname] ?? pageInfo["/"];
    return (
        <StyledHeader>
            <StyledTitle>{info.title}</StyledTitle>
            {info.subtitle && <StyledSubtitle>{info.subtitle}</StyledSubtitle>}
        </StyledHeader>
    );
}