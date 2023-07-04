import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";
import { serviceOffferArr } from "./serviceOffer";

const ServiceOffers: React.FC = () => {
    return (
        <section>
            <MaxWidthContainer>
                <Wrapper>
                    {serviceOffferArr.map((item) => (
                        <ServiceOffer key={item.id}>
                            <Image>
                                <img src={item.svg} alt="" width="30px" />
                            </Image>
                            <OfferText>
                                <Heading>{item.heading}</Heading>
                                <Text>{item.text}</Text>
                            </OfferText>
                        </ServiceOffer>
                    ))}
                </Wrapper>
            </MaxWidthContainer>
        </section>
    );
};

export default ServiceOffers;

const Wrapper = styled.div`
    @media screen and (max-width: 500px) {
        align-items: start;
        flex-direction: column;
        margin-left: 1rem;
    }
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12rem 0 7rem;
    position: relative;
    row-gap: 4rem;
    &::before {
        background-color: #ebebeb;
        content: "";
        display: block;
        height: 0.15rem;
        position: absolute;
        top: -5rem;
        width: 100%;
    }
    @media screen and (min-width: 990px) {
        column-gap: 3rem;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
`;

const ServiceOffer = styled.div`
    @media screen and (max-width: 500px) {
        max-width: 95%;
    }
    align-items: center;
    display: flex;
    flex: 0 0 50%;
    max-width: 50%;
    @media screen and (min-width: 990px) {
        flex: auto;
    }
`;

const OfferText = styled.div``;

const Image = styled.div`
    margin-right: 2rem;
`;

const Heading = styled.h4`
    font-weight: 600;
`;

const Text = styled.p`
    color: #777;
    font-weight: 300;
`;
