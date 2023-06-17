import React, { useState, useEffect } from "react";
import styled from "styled-components";

import prevShadow from "../../../images/nav-prev-shadow.png";
import nextShadow from "../../../images/nav-next-shadow.png";
import ProductsSlide from "../../../components/ProductsSlide";

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
    const [numberOfPanButtons, setNumberOfPanButtons] = useState<number>(0);
    const [translateValue, setTranslateValue] = useState<string>("0px");
    const [activeButton, setActiveButton] = useState<number>(0);

    // const panProductsStyle = {
    //     transform: `translateX(${translateValue})`,
    //     transition: "transform 2s ease",
    // };

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

    const panProducts: (val: number) => void = (val) => {
        setActiveButton(val);
        val === 0 ? (val = 0) : (val = val + 1);

        if (window.innerWidth > 1280) {
            const translateValue = +(
                (productsContainerWidth - 1200) /
                numberOfPanButtons
            ).toFixed(3);
            setTranslateValue(`-${val * translateValue}px`);
        } else if (window.innerWidth > 990) {
            const translateValue = +(
                (productsContainerWidth - window.innerWidth * 0.965) /
                numberOfPanButtons
            ).toFixed(3);
            setTranslateValue(`-${val * translateValue}px`);
        } else {
            const translateValue = +(
                (productsContainerWidth - window.innerWidth * 0.935) /
                numberOfPanButtons
            ).toFixed(3);
            setTranslateValue(`-${val * translateValue}px`);
        }
    };

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
        window.addEventListener("resize", createPanButtons);

        return () => {
            window.removeEventListener("resize", createPanButtons);
        };
    }, [numberOfPanButtons, productsContainerWidth]);

    return (
        <FullProductWrapper>
            <OverflowWrapper>
                <ProductsSlide
                    products={products}
                    translateValue={translateValue}
                />
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
    );
};

export default ProductsWrapper;

const FullProductWrapper = styled.div`
    position: relative;
`;

const OverflowWrapper = styled.div`
    overflow: hidden;
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
