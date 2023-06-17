import React from "react";
import styled from "styled-components";

import { MaxWidthContainer } from "../../../components/MaxWidthContainer";
import bg_border from "../../../images/bg-1.jpg";

const PageAd: React.FC = () => {
    return (
        <MaxWidthContainer>
            <PageAdWrapper>
                <BgWhite>
                    <Heading>
                        <Span>Hot Daily Deals</Span>Start everyday at 12pm
                    </Heading>
                    <TextBody>
                        Get <TextSpan>FREE SHIPPING* & 7% </TextSpan>rewards on
                        every order you make today
                    </TextBody>
                    <Button>
                        See available deals now
                        <SVG
                            height="1rem"
                            width="1rem"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="#fff"
                        >
                            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                        </SVG>
                    </Button>
                </BgWhite>
            </PageAdWrapper>
        </MaxWidthContainer>
    );
};

export default PageAd;

const PageAdWrapper = styled.div`
    align-items: center;
    background-image: url(${bg_border});
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    display: flex;
    justify-content: center;
    margin: 12rem 0;
    padding: 1rem;
`;

const BgWhite = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 2.5rem;
    row-gap: 3rem;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 890px) {
        column-gap: 2rem;
        flex-direction: row;
        text-align: left;
    }

    @media screen and (min-width: 1040px) {
        column-gap: 6rem;
        padding: 4.5rem;
    }
`;

const Heading = styled.h3`
    font-weight: 600;
`;

const Span = styled.span`
    color: #fcb941;
    display: block;
    margin-bottom: -1rem;

    @media screen and (min-width: 990px) {
        text-align: right;
    }
`;

const TextBody = styled.p`
    line-height: 1.3;
    max-width: 30rem;
`;

const TextSpan = styled.span`
    font-weight: 500;
`;

const Button = styled.button`
    background-color: #fcb941;
    border-radius: 3rem;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    text-wrap: nowrap;
    transition: opacity ease 0.35s;
    &:hover {
        opacity: 0.8;
    }
`;

const SVG = styled.svg`
    margin-left: 1.5rem;
    @media screen and (max-width: 380px) {
        display: none;
    }
`;
