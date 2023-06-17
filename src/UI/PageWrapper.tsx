import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../components/MaxWidthContainer";

import { useAppSelector } from "../store/store";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { HeaderBottomContainer } from "./header/HeaderBottom";
import Nav from "./nav/Nav";
import IntroSection from "./home/Intro/IntroSection";
import ProductSection from "./home/products/ProductSection";
import PageAd from "./home/pageAd/PageAD";
import DealsAndOutlet from "./home/deals/DealsAndOutlet";
import Brands from "./home/brands/Brands";
import TrendingProducts from "./home/trendingProducts/TrendingProducts";
import TopSellingProducts from "./home/topselling/TopSellingProducts";

const PageWrapper: React.FC = () => {
    const [showNav, setShowNav] = useState(false);
    const showFixedNav: () => void = () => {
        document.body.scrollTop > 225 ||
        document.documentElement.scrollTop > 225
            ? setShowNav(true)
            : setShowNav(false);
    };

    const isMenuClosed = useAppSelector(
        (state) => state.toggleMobileMenu.isMenuClosed
    );

    useEffect(() => {
        window.onscroll = () => {
            showFixedNav();
        };
    }, []);
    return (
        <PageWrapperContainer>
            <AnimatePresence>
                {showNav && (
                    <FixedNav
                        initial={{ translateY: "-5rem" }}
                        animate={{ translateY: "0rem" }}
                        transition={{
                            ease: "linear",
                            duration: 0.4,
                        }}
                    >
                        <Nav />
                    </FixedNav>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showNav && (
                    <FixedMobileNav
                        initial={{ translateY: "-5rem" }}
                        animate={{ translateY: "0rem" }}
                        transition={{
                            ease: "linear",
                            duration: 0.4,
                        }}
                    >
                        <MaxWidthContainer>
                            <HeaderBottomContainer />
                        </MaxWidthContainer>
                    </FixedMobileNav>
                )}
            </AnimatePresence>

            <AnimatedPageWrapper menu={isMenuClosed}>
                <Header />
                <Nav />
                <MainWrapper>
                    <IntroSection />
                    <ProductSection />
                    <PageAd />
                    <DealsAndOutlet />
                    <Brands />
                    <TrendingProducts />
                    <TopSellingProducts />
                </MainWrapper>
                <Footer />
            </AnimatedPageWrapper>
            <ScrollToTop></ScrollToTop>
        </PageWrapperContainer>
    );
};

export default PageWrapper;

const PageWrapperContainer = styled.div``;

const FixedNav = styled(motion.div)`
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
`;

const FixedMobileNav = styled(motion.div)`
    background-color: #333333;
    color: #777;
    font-weight: 300;
    font-size: 1.3rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 11;
    @media screen and (min-width: 920px) {
        display: none;
    }
`;

const AnimatedPageWrapper = styled.div<{ menu: boolean }>`
    min-height: 99.99999vh;
    transform: ${(props) =>
        props.menu ? "translateX(0)" : "translateX(20rem)"};
    transition: transform 0.43s ease-in-out;
`;

const MainWrapper = styled.div`
    padding-top: 3rem;
    min-height: 60vh;
`;

const ScrollToTop = styled.button``;
