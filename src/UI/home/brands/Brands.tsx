import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";

import { brandsImage } from "../../../images/brands/brands";

const Brands: React.FC = () => {
    return (
        <section>
            <MaxWidthContainer>
                <Wrapper>
                    {brandsImage.map((brand) => (
                        <Brand key={brandsImage.indexOf(brand)}>
                            <BrandImage src={brand} alt="brand logo" />
                        </Brand>
                    ))}
                </Wrapper>
            </MaxWidthContainer>
        </section>
    );
};

export default Brands;

const Wrapper = styled.div`
    align-items: center;
    border-bottom: 1px solid #ccc;
    column-gap: 10rem;
    display: flex;
    justify-content: center;
    padding: 5rem 0 2.5rem;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Brand = styled.div``;

const BrandImage = styled.img``;
