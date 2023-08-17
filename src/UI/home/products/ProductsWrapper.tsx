import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import prevShadow from "../../../images/nav-prev-shadow.png";
import nextShadow from "../../../images/nav-next-shadow.png";

import { IProduct } from "../../../type/types";

interface Props {
    products: IProduct[];
}

const ProductsWrapper: React.FC<Props> = ({ products }: Props) => {
    //State for number of buttons needed to pan the
    // product slide either right or left
    const [numberOfPanButtons, setNumberOfPanButtons] = useState<number>(0);

    //for styling buttton when active and vice-versa
    const [activeButton, setActiveButton] = useState<number>(0);

    //Creating an array for number of pan buttons
    const arrOfNumbers: (num: number) => number[] = (num) => {
        let generatedArr: number[] = [];
        for (let i = 0; i < num; i++) {
            generatedArr = [...generatedArr, i];
        }
        return generatedArr;
    };

    const numberOfProducts = products.length;

    const productsContainerWidth =
        numberOfProducts * 220 + (16 * numberOfProducts - 1);

    //Scrolling the product slide to the right or left depending
    //the responsive MaxWidthContainer
    const panProducts: (val: number) => void = (val) => {
        setActiveButton(val);
        val === 0 ? (val = 0) : (val = val + 1);
    };

    //Creating buttons for scrolling product slide
    useEffect(() => {
        const createPanButtons: () => void = () => {
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
        //Recreating pan buttons when window is resize
        //for responsivitiy
        window.addEventListener("resize", createPanButtons);

        return () => {
            window.removeEventListener("resize", createPanButtons);
        };
    }, [numberOfPanButtons, productsContainerWidth]);

    // State for showing or hiding the next and previous
    // button of the slide
    const [displayNext, setDisplayNext] = useState<boolean>(true);
    const [displayPrev, setDisplayPrev] = useState<boolean>(false);

    //Scrolling Container ref
    const outerDivRef = useRef<HTMLDivElement>(null);

    const innerDivRef = useRef<HTMLDivElement>(null);

    const handleScrollTo = (scrollOffset: number) => {
        if (outerDivRef.current) {
            outerDivRef.current.scrollTo({
                left: outerDivRef.current.scrollLeft + scrollOffset,
                behavior: "smooth", // Use smooth scrolling behavior
            });
        }
    };

    const handleScroll = () => {
        if (outerDivRef.current) {
            const maxScrollLeft =
                outerDivRef.current.scrollWidth -
                outerDivRef.current.clientWidth;
            outerDivRef.current?.scrollLeft >= maxScrollLeft - 100
                ? setDisplayNext(false)
                : setDisplayNext(true);
        }

        (outerDivRef.current?.scrollLeft || -1) >= 0
            ? setDisplayPrev(true)
            : setDisplayPrev(false);
    };

    return (
        <FullProductWrapper>
            <OverflowWrapper ref={outerDivRef} onScroll={handleScroll}>
                <ProductsContainer ref={innerDivRef}>
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

                                <Cart>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                        height="1.5rem"
                                        width="1.5rem"
                                        fill="#fff"
                                    >
                                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                    </svg>
                                    <span>Add to cart</span>
                                </Cart>
                            </ProductInformation>
                            <WishList>
                                <WishListSvg>
                                    <WishListText>add to wishlist</WishListText>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        height="1.5rem"
                                        width="1.5rem"
                                        fill="#333"
                                    >
                                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                                    </svg>
                                </WishListSvg>
                            </WishList>
                        </Product>
                    ))}
                </ProductsContainer>

                <MoveButtons>
                    <Prev
                        displayStyle={displayPrev}
                        onClick={() => handleScrollTo(-220)}
                    >
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

                    <Next
                        displayStyle={displayNext}
                        onClick={() => handleScrollTo(220)}
                    >
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

                <PanButtons>
                    {arrOfNumbers(numberOfPanButtons).map((item) => (
                        <button
                            key={item}
                            onClick={() =>
                                panProducts(
                                    arrOfNumbers(numberOfPanButtons).indexOf(
                                        item
                                    )
                                )
                            }
                        >
                            <MobileControlButton
                                active={item === activeButton}
                            />
                        </button>
                    ))}
                </PanButtons>
            </OverflowWrapper>
        </FullProductWrapper>
    );
};

export default ProductsWrapper;

const FullProductWrapper = styled.div`
    position: relative;
`;

const OverflowWrapper = styled.div`
    overflow-x: scroll;
    ::-webkit-scrollbar {
        background-color: #f1f1f1;
        height: 0.5rem;
        margin-top: 0.5rem;
        /* width: 0.25rem; */
    }

    ::-webkit-scrollbar-track {
        background-color: #d3d3d3;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #fcb941;
        border-radius: 1rem;
    }

    @supports (scrollbar-color: red blue) {
        & {
            scrollbar-width: thin;
            scrollbar-color: #fcb941 #d3d3d3;
            scroll-behavior: smooth;
        }
    }
`;

const ProductsContainer = styled.div`
    column-gap: 1.5rem;
    display: flex;
    flex-direction: row;
    /* position: relative; */
    transition: all 0.4s ease;
`;

const Product = styled.div`
    background-color: #fff;
    border: 0.1rem solid #ebebeb;
    min-width: 22rem;
    max-width: 22rem;
    position: relative;
    width: 100%;
`;

const ProductImage = styled.div`
    min-height: 20rem;
    transition: all ease 0.2s;
`;

const Image = styled.img`
    width: 100%;
`;

const ProductInformation = styled.div`
    padding: 0 2rem;
    padding-bottom: 3.5rem;
    position: relative;
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

const WishList = styled.div`
    align-items: center;
    display: flex;
    position: absolute;
    right: 1.5rem;
    top: 2rem;
`;

const WishListSvg = styled.div`
    align-items: center;
    background-color: #fcb941;
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: center;
    position: relative;
    opacity: 0;
    transition: all ease 0.5s;
    transform: translateX(-1.5rem);
    width: 3rem;
    ${Product}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
`;

const WishListText = styled.div`
    background-color: #fcb941;
    border-radius: 2rem;
    color: #333;
    display: block;
    font-size: 1rem;
    font-weight: 300;
    max-height: 3rem;
    opacity: 0;
    padding: 0.6rem 1rem;
    padding-right: 3rem;
    position: absolute;
    right: 0;
    transition: all 0.35s ease;
    visibility: hidden;
    width: max-content;
    z-index: -1;
    ${WishListSvg}:hover & {
        opacity: 1;
        visibility: visible;
    }
`;

const Cart = styled.div`
    align-items: center;
    background-color: #333;
    color: #fff;
    column-gap: 1.5rem;
    display: flex;
    font-size: 1.3rem;
    justify-content: center;
    opacity: 0;
    padding: 0.5rem;
    position: absolute;
    right: 0;
    transform: translatey(1.5rem);
    transition: all 0.5s ease;
    top: -3.5rem;
    width: 21rem;
    z-index: -1;
    ${Product}:hover & {
        opacity: 1;
        transform: translatey(0);
        visibility: visible;
        z-index: 1;
    }
`;

// Controls
const MoveButtons = styled.div`
    display: block;
`;

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

const Prev = styled(Button)<{ displayStyle: boolean }>`
    left: 0;
    opacity: ${(props) => (props.displayStyle ? "1" : "0")};
    visibility: ${(props) => (props.displayStyle ? "visible" : "hidden")};
    transition: all ease 0.35s;
`;

const Next = styled(Button)<{ displayStyle: boolean }>`
    opacity: ${(props) => (props.displayStyle ? "1" : "0")};
    right: 0;
    visibility: ${(props) => (props.displayStyle ? "visible" : "hidden")};
    transition: all ease 0.35s;
    &::before {
        left: auto;
        right: 100%;
        background-image: url(${nextShadow});
    }
`;

const PanButtons = styled.div`
    bottom: -5rem;
    display: flex;
    right: 50%;
    position: absolute;
    transform: translateX(50%);
`;

const MobileControlButton = styled.span<{ active: boolean }>`
    background-color: ${(props) => (props.active ? "#fcb941" : "transparent")};
    border: 1px solid;
    border-color: ${(props) => (props.active ? "transparent" : "#fcb941")};
    border-radius: ${(props) => (props.active ? "5rem" : "50%")};
    display: block;
    height: 0.7rem;
    transition: all ease 0.5s;
    width: ${(props) => (props.active ? "1.25rem" : "0.7rem")};
`;
