import React, { useState, useEffect } from "react";
import styled from "styled-components";

import appLocalStorage from "../../../localStorage/localStorage";
import macbook from "../../../images/macbook.jpg";

import { ICountdown } from "../../../type/types";
const { getItem, setItem } = appLocalStorage;

const targetTimeString = (new Date().getTime() + 1000 * 60 * 60 * 3).toString();
setItem("targetTime", targetTimeString);

const CountDownDeals: React.FC = () => {
    const [targetTime, setTargetTime] = useState<number>(0);

    const [countdown, setCountdown] = useState<ICountdown>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetTim = getItem("targetTime");
        setTargetTime(+(targetTim ?? "0"));
        const interval = setInterval(() => {
            const now = new Date().getTime();

            // const targetTime = getItem("targetTime");

            const distance = targetTime - now;
            // const distance = new Date().getTime() + 1000 * 60 * 60 * 3 - now;

            // Calculate , hours, minutes, and seconds

            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Update the countdown state
            setCountdown({ hours, minutes, seconds });

            // Check if the countdown has reached zero
            if (distance < 0) {
                clearInterval(interval);
                const newTargetTimeString = (
                    new Date().getTime() +
                    1000 * 60 * 60 * 3
                ).toString();
                setItem("targetTime", newTargetTimeString);
            }
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [targetTime]);

    return (
        <Background>
            <HeadingContent>
                <Heading>Deal of the Day</Heading>
                <HeadingP>Limited quantities</HeadingP>
            </HeadingContent>
            <Item>
                <ItemName>Apple - Smart Keyboard Folio for 11-inch</ItemName>
                <Price>
                    $179.00
                    <OldPrice> Was $200.99</OldPrice>
                </Price>
                <ShopButton>
                    Shop Now
                    <SVG
                        height="1rem"
                        width="1rem"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#fcb941"
                    >
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                    </SVG>
                </ShopButton>
            </Item>

            <CountDown>
                <CountDownBox>
                    <CountDownNumber>{countdown?.hours}</CountDownNumber>
                    <Duration>hours</Duration>
                </CountDownBox>

                <CountDownBoxMiddle>
                    <CountDownNumber>{countdown?.minutes}</CountDownNumber>
                    <Duration>minutes</Duration>
                </CountDownBoxMiddle>

                <CountDownBox>
                    <CountDownNumber>{countdown?.seconds}</CountDownNumber>
                    <Duration>seconds</Duration>
                </CountDownBox>
            </CountDown>
        </Background>
    );
};

export default CountDownDeals;

const Background = styled.div`
    background-image: url(${macbook});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-bottom: 2rem;
    padding: 3.8rem;
    min-height: 38rem;
`;

const HeadingContent = styled.div``;

const Heading = styled.h3`
    color: #ef837b;
    font-size: 2rem;
    font-weight: 500;
`;

const HeadingP = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: -1rem;
`;

const Item = styled.div`
    margin-top: 5rem;
`;

const ItemName = styled.h4`
    font-weight: 400;
    line-height: 1.5;
    max-width: 24rem;
`;

const Price = styled.p`
    color: #ef837b;
    font-size: 2rem;
    margin-top: 0.8rem;
`;

const OldPrice = styled.span`
    color: #ccc;
`;

const ShopButton = styled.button`
    color: #fcb941;
    font-size: 1.5rem;
    padding: 0;
`;

const SVG = styled.svg`
    margin-left: 1rem;
`;

const CountDown = styled.div`
    display: flex;
    column-gap: 2.5rem;
    margin-top: 5rem;
`;

const CountDownBox = styled.div`
    background-color: #fcb941;
    border-radius: 0.25rem;
    height: 4rem;
    position: relative;
    width: 4rem;
`;

const CountDownBoxMiddle = styled(CountDownBox)`
    &::before,
    &::after {
        content: ":";
        display: block;
        font-size: 2.5rem;
        font-weight: 300;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
    }

    &::before {
        left: -1.5rem;
    }

    &::after {
        right: -1.5rem;
    }
`;

const centered = styled.p`
    position: absolute;
    right: 50%;
    top: 50%;
`;

const CountDownNumber = styled(centered)`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    transform: translate(50%, -50%);
`;

const Duration = styled(centered)`
    font-size: 1.25rem;
    transform: translate(50%, 80%);
`;
