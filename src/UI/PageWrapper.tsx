import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../store/store";

import Header from "./header/Header";

const PageWrapper: React.FC = () => {
    const isMenuClosed = useAppSelector(
        (state) => state.toggleMobileMenu.isMenuClosed
    );
    return (
        <PageWrapperContainer menu={isMenuClosed}>
            <Header />
        </PageWrapperContainer>
    );
};

export default PageWrapper;

const PageWrapperContainer = styled.div<{ menu: boolean }>`
    min-height: 100%;
    transform: ${(props) =>
        props.menu ? "translateX(0)" : "translateX(20rem)"};
    transition: transform 0.4s ease;
`;
