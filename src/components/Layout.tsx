import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

const StyledDiv = styled.div`
    display: flex;
    width: 100%;
    
    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

const StyledMain = styled.main`
    width: 70%;
    min-height: 100vh;
    margin: 0;
    padding: 5vh 3vw;
    background-color: white;
    
    h2 {
    margin-bottom: 2vh;
    font-size: calc(20px + 1vw);
    }
    
    p {
        margin-bottom: 2vh;
        font-size: calc(13px + 0.3vw);
    }
    
    li {
        margin-bottom: 1vh;
        font-size: calc(13px + 0.3vw);
        line-height: 1.6;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
    
    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 4vh 4vw;
        text-align: center;
    }
`;

export default function Layout() {
    return (
        <>
            <Header />
            <StyledDiv>
                <Navigation />
                <StyledMain>
                    <Outlet />
                </StyledMain>
            </StyledDiv>
            <Footer />
        </>
    );
}