import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface IProduct {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
    stars: number;
    reviews: string[];
}

interface Props {
    products: IProduct[];
}

const ProductsWrapper: React.FC<Props> = ({ products }: Props) => {
    const [numberOfPanButtons, setNumberOfPanButtons] = useState(0);

    const arrOfNumbers: (num: number) => number[] = (num) => {
        let generatedArr: number[] = [];
        for (let i = 0; i < num; i++) {
            generatedArr = [...generatedArr, i];
        }
        return generatedArr;
    };

    useEffect(() => {
        const createPanButtons: () => void = () => {
            const numberOfProducts = products.length;
            const productsContainerWidth = numberOfProducts * 220;

            if (window.innerWidth > 1280) {
                const numberOfButtons = Math.ceil(
                    productsContainerWidth / 1200
                );

                setNumberOfPanButtons(numberOfButtons);
            } else if (window.innerWidth > 990) {
                const numberOfButtons = Math.ceil(
                    productsContainerWidth / (window.innerWidth * 0.965)
                );

                setNumberOfPanButtons(numberOfButtons);
            } else {
                const numberOfButtons = Math.ceil(
                    productsContainerWidth / (window.innerWidth * 0.935)
                );
                setNumberOfPanButtons(numberOfButtons);
            }
        };
        createPanButtons();
        window.addEventListener("resize", createPanButtons);

        return () => {
            window.removeEventListener("resize", createPanButtons);
        };
    }, [numberOfPanButtons, products.length]);

    return (
        <FullProductWrapper>
            <OverflowWrapper>
                <ProductsContainer>
                    {products?.map((product) => (
                        <Product key={product.id}>
                            <ProductImage>
                                <Image src={product.image} />
                            </ProductImage>

                            <ProductInformation>
                                <h3>
                                    <Category href="cst.com">
                                        {product.category}
                                    </Category>
                                </h3>
                                <h3>
                                    <Name href="prd.com">{product.name}</Name>
                                </h3>
                                <Price>{product.price}</Price>
                                <Reviews>
                                    <Stars>{product.stars}</Stars>
                                    <NumOfReviews>
                                        ({product.reviews.length} reviews)
                                    </NumOfReviews>
                                </Reviews>
                            </ProductInformation>
                        </Product>
                    ))}
                </ProductsContainer>

                <MobileControls>
                    {arrOfNumbers(numberOfPanButtons).map((item) => (
                        <button key={item}>
                            <MobileControlButton active={true} />
                        </button>
                    ))}
                </MobileControls>
            </OverflowWrapper>
        </FullProductWrapper>
    );
};

export default ProductsWrapper;

const FullProductWrapper = styled(motion.div)`
    position: relative;
`;

const OverflowWrapper = styled.div`
    overflow: hidden;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1.5rem;
    /* transform: translateX(-500px); */
    transition: all 0.4s ease;
`;

const Product = styled.div`
    background-color: #fff;
    border: 0.1rem solid #ebebeb;
    min-width: 22rem;
    max-width: 22rem;
    width: 100%;
`;

const ProductImage = styled.div``;

const Image = styled.img`
    width: 100%;
`;

const ProductInformation = styled.div`
    padding: 0 2rem;
    padding-bottom: 3.5rem;
`;

const Category = styled.a`
    color: #ccc;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.2;
    transition: color ease 0.25s;
    &:hover {
        color: #333;
    }
`;

const Name = styled.a`
    color: #333;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    transition: color ease 0.25s;
    &:hover {
        color: #fcb941;
    }
`;

const Price = styled.p`
    color: #fcb941;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
`;

const Reviews = styled.div`
    align-items: center;
    display: flex;
    margin-top: 0.5rem;
`;

const Stars = styled.span`
    color: #333;
`;

const NumOfReviews = styled.p`
    color: #ccc;
    font-size: 1.3rem;
    margin-left: 0.5rem;
`;

const MobileControls = styled.div`
    bottom: -5rem;
    display: flex;
    right: 50%;
    position: absolute;
    transform: translateX(50%);
`;

const MobileControlButton = styled.span<{ active: boolean }>`
    background-color: ${(props) => (props.active ? "#333" : "transparent")};
    border: 1px solid;
    border-color: ${(props) => (props.active ? "transparent" : "#333")};
    border-radius: ${(props) => (props.active ? "5rem" : "50%")};
    display: block;
    height: 0.7rem;
    transition: all ease 0.5s;
    width: ${(props) => (props.active ? "1.25rem" : "0.7rem")};
`;
