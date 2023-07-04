import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { NewSlides } from "./slides";
import slideOne from "../../../images/slide-1.jpg";
import slideOneSm from "../../../images/slide-1-sm.jpg";

const slides = NewSlides.slides;
const variants = {
    initial: (direction: number) => {
        return { x: direction > 0 ? "15rem" : "-15rem" };
    },

    animate: {
        x: 0,
        opacity: 1,
    },

    exit: (direction: number) => {
        return {
            x: direction > 0 ? "-15rem" : "15rem",
            opacity: 0,
        };
    },
};

const Slideshow: React.FC = () => {
    // Current slide state
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0);

    // Controls for changing slides
    const goToPrevSlide: () => void = () => {
        setDirection(-1);
        currentSlide === 0
            ? setCurrentSlide(slides.length - 1)
            : setCurrentSlide(currentSlide - 1);
    };

    const goToNextSlide: () => void = () => {
        setDirection(1);
        currentSlide === slides.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };

    //Mobile Control
    const changeSlide: (val: number) => void = (val) => {
        setCurrentSlide(val);
    };

    return (
        <AnimatePresence initial={false} custom={direction}>
            <SlideshowContainer>
                <Slide
                    variants={variants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    key={slides[currentSlide].id}
                    custom={direction}
                >
                    <BackgroundImage>
                        <Picture>
                            <source
                                media="(min-width:480px)"
                                srcSet={slideOne}
                            />
                            <Img src={slideOneSm} alt="slide" />
                        </Picture>
                    </BackgroundImage>
                    <SlideContent>
                        <OfferType>{slides[currentSlide].offerType}</OfferType>
                        <ProductName>
                            {slides[currentSlide].productName}
                        </ProductName>
                        <Price>
                            <OfferSupText>
                                {slides[currentSlide].offerSupText}
                            </OfferSupText>
                            <OfferSupPrice>
                                {slides[currentSlide].offerSupPrice}
                            </OfferSupPrice>

                            <PriceSpan>
                                {slides[currentSlide].price}
                                <PriceSup>
                                    {slides[currentSlide].priceSup}
                                </PriceSup>
                            </PriceSpan>
                        </Price>

                        <Button>
                            Click Here
                            <Click
                                height="1rem"
                                width="1rem"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                            </Click>
                        </Button>
                    </SlideContent>

                    <SlideImage>
                        <Picture>
                            <source
                                media="(min-width:480px)"
                                srcSet={slides[currentSlide].images[0]}
                            />
                            <Img
                                src={slides[currentSlide].images[1]}
                                alt="slide"
                            />
                        </Picture>
                    </SlideImage>
                </Slide>

                {/* Controls */}
                <Prev
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    height="1.85rem"
                    width="1.85rem"
                    onClick={() => goToPrevSlide()}
                >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </Prev>

                <Next
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    height="1.85rem"
                    width="1.85rem"
                    onClick={() => goToNextSlide()}
                >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </Next>

                {/* Mobile Controls */}

                <MobileControls>
                    {slides.map((slide) => (
                        <button
                            key={slide.id}
                            onClick={() => changeSlide(slide.id)}
                        >
                            <MobileControlButton
                                active={slide.id === currentSlide}
                            />
                        </button>
                    ))}
                </MobileControls>
            </SlideshowContainer>
        </AnimatePresence>
    );
};

export default Slideshow;

const SlideshowContainer = styled.div`
    position: relative;
`;

// Slide
const Slide = styled(motion.div)`
    /* min-height: 30vh; */
`;

const BackgroundImage = styled.div`
    visibility: hidden;
`;

const SlideContent = styled.div`
    @media screen and (max-width: 375px) {
        max-width: 17rem;
    }
    left: 6vw;
    max-width: 20rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 11;

    @media screen and (max-width: 990px) and (min-width: 768px) {
        left: 10vw;
    }

    @media screen and (min-width: 1200px) {
        max-width: 25rem;
    }
`;

const OfferType = styled.p`
    color: #fcb941;
    font-weight: 300;
    font-size: 1.4rem;
    letter-spacing: -0.01em;
    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.8rem;
    }
`;

const ProductName = styled.p`
    color: #333;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.07rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 576px) {
        font-size: 3.4rem;
        line-height: 4rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 4rem;
        line-height: 4.5rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 5rem;
        line-height: 5rem;
    }
`;

const Price = styled(ProductName)`
    color: #fcb941;
`;

const PriceSpan = styled.span``;

const sup = styled.sup`
    top: -1.25rem;
    font-weight: 400;
    font-size: 1.4rem;

    @media screen and (min-width: 576px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 1200px) {
        top: -2.25rem;
        font-size: 2rem;
    }
`;

const OfferSupText = styled(sup)`
    color: #333;
    margin-right: 0.5rem;
`;

const OfferSupPrice = styled(sup)`
    color: #333;
    text-decoration: line-through;
`;

const PriceSup = styled(sup)``;

const Button = styled.button`
    @media screen and (max-width: 375px) {
        font-size: 1.25rem;
        margin-top: 0.5rem;
        padding: 0.5rem 1.5rem;
    }
    background-color: #fcb941;
    border-radius: 5rem;
    color: #fff;
    font-size: 1.4rem;
    margin-top: 0.5rem;
    padding: 0.6rem 2.25rem;
    transition: opacity ease 0.25s;
    &:hover {
        opacity: 0.65;
    }
    @media screen and (min-width: 920px) {
        margin-top: 1.5rem;
        padding: 0.8rem 3rem;
    }
`;

const Click = styled.svg`
    fill: #fff;
    margin-left: 1rem;
`;

const SlideImage = styled.div`
    position: absolute;
    top: 0;
`;

const Picture = styled.picture``;

const Img = styled.img`
    width: 100%;
`;

// Controls

const arrow = styled.svg`
    fill: #666;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

const Prev = styled(arrow)`
    left: 1.8rem;
`;

const Next = styled(arrow)`
    right: 1.8rem;
`;

const MobileControls = styled.div`
    @media screen and (max-width: 375px) {
        bottom: 2.25rem;
    }
    bottom: 2.52rem;
    display: flex;
    right: 50%;
    position: absolute;
    transform: translateX(50%);
    @media screen and (min-width: 768px) {
        display: none;
    }
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
