import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/store";
import FooterTop from "./footer/FooterTop";
import Header from "./header/Header";
import Nav from "./nav/Nav";

const PageWrapper: React.FC = () => {
    const isMenuClosed = useAppSelector(
        (state) => state.toggleMobileMenu.isMenuClosed
    );
    return (
        <PageWrapperContainer menu={isMenuClosed}>
            <Header />
            <Nav />
            <MainWrapper></MainWrapper>
            <FooterTop />
        </PageWrapperContainer>
    );
};

export default PageWrapper;

const PageWrapperContainer = styled.div<{ menu: boolean }>`
    min-height: 99.99999vh;
    transform: ${(props) =>
        props.menu ? "translateX(0)" : "translateX(20rem)"};
    transition: transform 0.43s ease-in-out;
`;

const MainWrapper = styled.div`
    padding-top: 19.4rem;
    min-height: 80vh;
`;
