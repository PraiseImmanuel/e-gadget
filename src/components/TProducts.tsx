import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { MaxWidthContainer } from "./MaxWidthContainer";
import ProductsSlide from "./ProductsSlide";

import { IProduct, ITProducts } from "../type/types";

interface Props {
    heading: string;
    products: ITProducts;
}

const TProducts: React.FC<Props> = ({ heading, products }: Props) => {
    const [productCategory, setProductCategory] = useState<IProduct[]>(
        products?.all
    );

    // Key for changing category for animation
    const [key, setKey] = useState(1);

    const changeCategory: (arg: IProduct[]) => void = (arg) => {
        key === 3 ? setKey(1) : setKey(key + 1);
        setProductCategory(arg);
    };

    return (
        <section>
            <MaxWidthContainer>
                <Wrapper>
                    <HeadingAndNav>
                        <Heading>{heading}</Heading>

                        <Nav>
                            <UL>
                                <List
                                    active={productCategory === products?.all}
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.all)
                                        }
                                    >
                                        All
                                    </button>
                                </List>

                                <List
                                    active={
                                        productCategory === products?.household
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.household)
                                        }
                                    >
                                        Household
                                    </button>
                                </List>

                                <List
                                    active={
                                        productCategory === products?.computers
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.computers)
                                        }
                                    >
                                        Computers
                                    </button>
                                </List>

                                <List
                                    active={
                                        productCategory === products?.phones
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.phones)
                                        }
                                    >
                                        Phones
                                    </button>
                                </List>

                                <List
                                    active={
                                        productCategory === products?.gaming
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.gaming)
                                        }
                                    >
                                        Gaming
                                    </button>
                                </List>

                                <List
                                    active={
                                        productCategory === products?.watches
                                    }
                                >
                                    <button
                                        onClick={() =>
                                            changeCategory(products?.watches)
                                        }
                                    >
                                        Watches
                                    </button>
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
                        <ProductsSlide products={productCategory} />
                    </AnimatedContainer>
                </Wrapper>
            </MaxWidthContainer>
        </section>
    );
};

export default TProducts;

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
        color: #fcb941;
    }

    &::after {
        background-color: #fcb941;
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
