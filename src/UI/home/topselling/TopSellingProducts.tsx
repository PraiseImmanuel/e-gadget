import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import prevShadow from "../../../images/nav-prev-shadow.png";
import nextShadow from "../../../images/nav-next-shadow.png";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";
import ProductsSlide from "../../../components/ProductsSlide";

import { Products } from "../products/products";

interface IProduct {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    stars: number;
    reviews: string[];
}

interface IProductDeals {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    old_price: string;
    stars: number;
    reviews: string[];
}

const TopSellingProducts: React.FC = () => {
    const [productCategory, setProductCategory] = useState<
        IProduct[] | IProductDeals[]
    >(Products?.featured);

    const [key, setKey] = useState(1);

    const changeCategory: (arg: IProduct[]) => void = (arg) => {
        key === 3 ? setKey(1) : setKey(key + 1);
        setProductCategory(arg);
    };

    return (
        <MaxWidthContainer>
            <Wrapper>
                <HeadingAndNav>
                    <Heading>Top Selling Products</Heading>

                    <Nav>
                        <UL>
                            <List active={false}>
                                <button
                                    onClick={() =>
                                        changeCategory(Products?.promo_deals)
                                    }
                                >
                                    Household
                                </button>
                            </List>

                            <List active={false}>
                                <button>Computers</button>
                            </List>

                            <List active={false}>
                                <button>Phones</button>
                            </List>

                            <List active={false}>
                                <button>Gaming</button>
                            </List>

                            <List active={false}>
                                <button>Watches</button>
                            </List>
                        </UL>
                    </Nav>
                </HeadingAndNav>

                <AnimatedContainer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "linear",
                        duration: 0.8,
                    }}
                    exit={{ opacity: 0 }}
                    key={key}
                >
                    <FullProductWrapper>
                        <OverflowWrapper>
                            <ProductsSlide
                                products={productCategory}
                                translateValue={"0px"}
                            />
                            <MoveButtons>
                                <Prev>
                                    <svg
                                        fill="#fcb941"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        height="1.85rem"
                                        width="1.85rem"
                                    >
                                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                    </svg>
                                </Prev>

                                <Next>
                                    <svg
                                        fill="#fcb941"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                        height="1.85rem"
                                        width="1.85rem"
                                    >
                                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                    </svg>
                                </Next>
                            </MoveButtons>
                        </OverflowWrapper>
                    </FullProductWrapper>
                </AnimatedContainer>
            </Wrapper>
        </MaxWidthContainer>
    );
};

export default TopSellingProducts;

const Wrapper = styled.div`
    margin: 6rem 0 10rem;
`;

const HeadingAndNav = styled.div`
    line-height: 1.25;
    text-align: center;
    @media screen and (min-width: 990px) {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
`;

const Heading = styled.h2`
    font-weight: 600;
    letter-spacing: -0.03em;
`;

const Nav = styled.nav``;

const UL = styled.ul`
    column-gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    margin: 2rem 0;
`;

const List = styled.li<{ active: boolean }>`
    color: ${(props) => (props.active ? "#fcb941" : "#777")};
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: -0.01em;
    padding: 0.2rem 1rem;
    text-transform: uppercase;
    transition: color 0.2s ease;
    &:hover {
        color: ${(props) => (props.active ? "#333" : "#fcb941")};
    }

    &::after {
        background-color: #333;
        content: "";
        display: block;
        height: 0.1rem;
        margin-top: 0.5rem;
        transform-origin: ${(props) =>
            props.active ? "left center" : "right center"};
        transform: ${(props) => (props.active ? "scale(1, 1)" : "scale(0,1)")};
        transition: transform 0.3s ease;
        width: 100%;
    }
`;

const AnimatedContainer = styled(motion.div)``;
const FullProductWrapper = styled.div`
    position: relative;
`;

const OverflowWrapper = styled.div`
    overflow: hidden;
`;

// Controls
const MoveButtons = styled.div``;

const Button = styled.button`
    align-items: center;
    background: rgba(255, 255, 255, 0.904);
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    width: 3rem;
    &::before {
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(${prevShadow});
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        left: 100%;
        top: 0;
        border-radius: 20px 0 0 20px;
        width: 1rem;
    }
`;

const Prev = styled(Button)`
    left: 0;
`;

const Next = styled(Button)`
    right: 0;
    &::before {
        left: auto;
        right: 100%;
        background-image: url(${nextShadow});
    }
`;
