import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";
import { HeaderBottomContainer } from "./HeaderBottom";
import { HeaderTopContainer } from "./HeaderTop";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <MaxWidthContainer>
                <HeaderTopContainer />
                <HeaderBottomContainer />
            </MaxWidthContainer>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #333333;
    color: #777;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.5;
    padding: 1.25rem;
`;

export default Header;
