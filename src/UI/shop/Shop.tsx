import React from "react";
import styled from "styled-components";

import Filters from "./shopComponents/Filters";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";

const Shop: React.FC = () => {
    return (
        <MaxWidthContainer>
            <Wrapper>
                <Filters />
                <div>A.l</div>
            </Wrapper>
        </MaxWidthContainer>
    );
};

export default Shop;

const Wrapper = styled.div`
    @media screen and (min-width: 990px) {
        display: grid;
        grid-template-columns: 30% 70%;
    }
`;
