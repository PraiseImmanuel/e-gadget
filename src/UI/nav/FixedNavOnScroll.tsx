import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { MaxWidthContainer } from "../../components/MaxWidthContainer";
import { HeaderBottomContainer } from "../header/HeaderBottom";
import Nav from "./Nav";

const FixedNavOnScroll: React.FC = () => {
    const [showNav, setShowNav] = useState(false);
    const showFixedNav: () => void = () => {
        document.body.scrollTop > 225 ||
        document.documentElement.scrollTop > 225
            ? setShowNav(true)
            : setShowNav(false);
    };

    useEffect(() => {
        window.onscroll = () => {
            showFixedNav();
        };
    }, []);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default FixedNavOnScroll;

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
