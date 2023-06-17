import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { MaxWidthContainer } from "../../../components/MaxWidthContainer";
import ProductsWrapper from "./ProductsWrapper";

import { Products } from "./products";

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

const ProductSection: React.FC = () => {
    const [productCategory, setProductCategory] = useState<
        IProduct[] | IProductDeals[]
    >(Products?.featured);

    const [key, setKey] = useState(1);

    const changeCategory: (arg: IProduct[]) => void = (arg) => {
        key === 3 ? setKey(1) : setKey(key + 1);
        setProductCategory(arg);
    };

    return (
        <section>
            <MaxWidthContainer>
                <Wrapper>
                    <ProductNav>
                        <List active={productCategory === Products.featured}>
                            <NavButton
                                role="button"
                                onClick={() =>
                                    changeCategory(Products.featured)
                                }
                            >
                                Featured
                            </NavButton>
                        </List>
                        <List active={productCategory === Products.promo_deals}>
                            <NavButton
                                role="button"
                                onClick={() =>
                                    changeCategory(Products.promo_deals)
                                }
                            >
                                Promo Deals
                            </NavButton>
                        </List>
                        <List active={productCategory === Products.gift_ideas}>
                            <NavButton
                                role="button"
                                onClick={() =>
                                    changeCategory(Products.gift_ideas)
                                }
                            >
                                Gift Ideas
                            </NavButton>
                        </List>
                    </ProductNav>

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
                        <ProductsWrapper products={productCategory} />
                    </AnimatedContainer>
                </Wrapper>
            </MaxWidthContainer>
        </section>
    );
};

export default ProductSection;

const Wrapper = styled.div`
    margin-bottom: 10rem;
`;

const ProductNav = styled(motion.ul)`
    column-gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: center;
    margin: 5rem 0 3rem;
`;

const List = styled.li<{ active: boolean }>`
    color: ${(props) => (props.active ? "#333" : "#ccc")};
    padding: 1rem;
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

const NavButton = styled.button`
    font-size: 1.8rem;
    font-weight: 600;

    @media screen and (min-width: 767px) {
        font-size: 2.25rem;
    }
`;

const AnimatedContainer = styled(motion.div)``;
