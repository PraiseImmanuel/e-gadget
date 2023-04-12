import React from "react";
import styled from "styled-components";

type Props = {
    children?: React.ReactNode;
};

export const MaxWidthContainer: React.FC<Props> = ({ children }) => {
    return <MaxContainer>{children}</MaxContainer>;
};

const MaxContainer = styled.div`
    max-width: 93.5vw;

    @media screen and (min-width: 990px) {
        max-width: 96.5vw;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1200px;
        margin: auto;
    }
`;
