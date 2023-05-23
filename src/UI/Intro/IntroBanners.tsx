import React from "react";
import styled from "styled-components";
import { NewBanner } from "./banners";

const banners = NewBanner.banners;

const IntroBanners: React.FC = () => {
    return (
        <IntroBannersContainer>
            {banners?.map((banner) => (
                <Banner key={banner.id}>
                    <BannerImage>
                        <Image src={banner.image} alt="banner" />
                    </BannerImage>

                    <BannerContent>
                        <OfferType>{banner.offerType}</OfferType>
                        <ProductName>{banner.productName}</ProductName>
                        <OfferDetails>{banner.offerDetail}</OfferDetails>
                        <BannerButton>
                            Shop Now
                            <Click
                                height="1rem"
                                width="1rem"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                            </Click>
                        </BannerButton>
                    </BannerContent>
                </Banner>
            ))}
        </IntroBannersContainer>
    );
};

export default IntroBanners;

const IntroBannersContainer = styled.div``;

const Banner = styled.div`
    position: relative;
`;

const BannerImage = styled.div`
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
`;

const BannerContent = styled.div`
    color: #333;
    left: 6vw;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    @media screen and (max-width: 989px) and (min-width: 768px) {
        left: 10vw;
    }

    @media screen and (min-width: 990px) {
        left: 2rem;
    }
`;

const OfferType = styled.p`
    color: #777;
    font-size: 1.25rem;
    @media screen and (max-width: 989px) and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1140px) {
        font-size: 1.5rem;
    }
`;

const ProductName = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    margin: -0.8rem 0;
    @media screen and (max-width: 989px) and (min-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1140px) {
        font-size: 2rem;
    }
`;

const OfferDetails = styled.p`
    font-size: 1.6rem;
    margin-bottom: -0.4rem;
    @media screen and (max-width: 989px) and (min-width: 768px) {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 1140px) {
        font-size: 1.8rem;
    }
`;

const BannerButton = styled.button`
    border-radius: 5rem;
    color: #fcb941;
    font-size: 1.25rem;
    padding: 0;
    transition: all ease 0.25s;
    &:hover {
        background-color: #fcb941;
        color: #fff;
        padding: 0.25rem 1.25rem;
    }

    @media screen and (max-width: 989px) and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1140px) {
        font-size: 1.5rem;
    }
`;

const Click = styled.svg`
    fill: #fcb941;
    margin-left: 0.5rem;
    transition: fill ease 0.5s;
    ${BannerButton}:hover & {
        fill: #fff;
    }
`;
