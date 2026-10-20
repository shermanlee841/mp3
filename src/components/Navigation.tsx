import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: #333333;
    padding: 5px;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    width: 100%;
    margin: auto;
    padding: 1vh 1vw;
    list-style-type: none;
    
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const NavItem = styled.li`
    margin: 1vh 0;
    padding: 5px;
    
    @media screen and (max-width: 1000px) {
        margin: 0;
        display: block;
    }
`;

const NavLink = styled(Link)`
    display: block;
    padding: 1vh 1vw;
    color: white;
    text-decoration: none;
    font-size: calc(12px + 0.3vw);
    
    &:hover {
        background-color:#555555;
    }
    
    @media screen and (max-width: 1000px) {
        padding: 1vh 1.5vw;
    }
`;

export default function Navigation() {
    return (
        <StyledNav>
            <NavList>
                <NavItem>
                    <NavLink to = "/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to = "/education">Education</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to = "/skills">Skills</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to = "/experience">Experience</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to = "/projects">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to = "/interests">Interests</NavLink>
                </NavItem>
            </NavList>
        </StyledNav>
    );
}