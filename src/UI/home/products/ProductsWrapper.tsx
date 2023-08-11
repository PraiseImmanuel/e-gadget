import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductsSlide from "../../../components/ProductsSlide";
import { IProduct } from "../../../type/types";

interface Props {
    products: IProduct[];
}

const ProductsWrapper: React.FC<Props> = ({ products }: Props) => {
    // I had to keep the product slide's translate value
    // on the parent container
    const [translateValue, setTranslateValue] = useState<string>("0px");

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

    return (
        <ProductsSlide products={products} addControls={false}>
            <PanButtons>
                {arrOfNumbers(numberOfPanButtons).map((item) => (
                    <button
                        key={item}
                        onClick={() =>
                            panProducts(
                                arrOfNumbers(numberOfPanButtons).indexOf(item)
                            )
                        }
                    >
                        <MobileControlButton active={item === activeButton} />
                    </button>
                ))}
            </PanButtons>
        </ProductsSlide>
    );
};

export default ProductsWrapper;

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
