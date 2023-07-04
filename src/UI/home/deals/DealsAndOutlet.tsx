import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";
import CountDownDeals from "./CountDownDeal";
import OtherDeals from "./OtherDeals";

const DealsAndOutlet: React.FC = () => {
    return (
        <section>
            <Wrapper>
                <Heading>
                    <H2>Deals & Outlet</H2>
                    <HeadingP>Today deals and more</HeadingP>
                </Heading>

                <MaxWidthContainer>
                    <Content>
                        <CountDownDeals />
                        <OtherDeals />
                    </Content>
                </MaxWidthContainer>

                <Button>
                    Shop More Outlet Deals
                    <SVG
                        height="1rem"
                        width="1rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#333"
                    >
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </SVG>
                </Button>
            </Wrapper>
        </section>
    );
};

export default DealsAndOutlet;

const Wrapper = styled.div`
    background-color: #f4f7ff;
    color: #333;
    padding: 5rem 0;
`;

const Heading = styled.div`
    text-align: center;
    margin-bottom: 4rem;
`;

const H2 = styled.h2`
    font-weight: 600;
`;

const HeadingP = styled.p`
    font-weight: 300;
    margin-top: -0.5rem;
`;

const Content = styled.div`
    @media screen and (min-width: 990px) {
        column-gap: 2.5rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Button = styled.button`
    align-items: center;
    background-color: #f4f7ff;
    border: 1px solid #ccc;
    border-radius: 3rem;
    display: flex;
    font-size: 1.4rem;
    font-weight: 300;
    margin: 5rem auto 0;
    padding: 0.8rem 4rem;
    transition: all ease 0.3s;
    &:hover {
        background-color: #fff;
        color: #fcb941;
    }
`;

const SVG = styled.svg`
    margin-left: 1rem;
    transition: fill ease 0.3s;
    ${Button}: hover & {
        fill: #fcb941;
    }
`;
