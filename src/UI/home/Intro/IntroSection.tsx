import React from "react";
import styled from "styled-components";
import Slideshow from "./SlideShow";
import IntroBanners from "./IntroBanners";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";

const IntroSection: React.FC = () => {
    return (
        <section>
            <MaxWidthContainer>
                <Intro>
                    <Slideshow />
                    <IntroBanners />
                </Intro>
            </MaxWidthContainer>
        </section>
    );
};

export default IntroSection;

const Intro = styled.div`
    @media screen and (min-width: 990px) {
        display: grid;
        grid-template-columns: 64% 32%;
        grid-column-gap: 4rem;
    }
`;
