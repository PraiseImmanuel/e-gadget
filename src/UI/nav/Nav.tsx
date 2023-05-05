import React, { useState } from "react";
import styled from "styled-components";
import { Sling as MyHamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";

const Nav: React.FC = () => {
    // state for hovering categories nav
    const [isCategoriesHovered, setisCategoriesHovered] = useState(false);

    return (
        <NavBar>
            <MaxWidthContainer>
                <NavBarWrapper>
                    {/* In order to use the animate presence functionality 
                    I used js instead of css for this styling
                     */}
                    <Categories
                        onMouseOver={() => setisCategoriesHovered(true)}
                        onMouseOut={() => setisCategoriesHovered(false)}
                    >
                        <BrowseCategories hovered={isCategoriesHovered}>
                            <Hamburger>
                                <MyHamburger
                                    size={18}
                                    color="#333"
                                    toggled={isCategoriesHovered}
                                />
                            </Hamburger>
                            <P>Browse Categories</P>
                            <DropdownSvg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                height="1rem"
                                width="1rem"
                            >
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </DropdownSvg>
                        </BrowseCategories>

                        <AnimatePresence initial={false}>
                            {isCategoriesHovered && (
                                <CategoriesItems
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.3,
                                    }}
                                    exit={{ opacity: 0 }}
                                >
                                    <CategoriesA href="s.com">
                                        <CategoriesItem>
                                            Household
                                        </CategoriesItem>
                                    </CategoriesA>

                                    <CategoriesA href="s.com">
                                        <CategoriesItem>
                                            Laptop and Accesorries
                                        </CategoriesItem>
                                    </CategoriesA>

                                    <CategoriesA href="s.com">
                                        <CategoriesItem>
                                            Phones and Accesorries
                                        </CategoriesItem>
                                    </CategoriesA>

                                    <CategoriesA href="s.com">
                                        <CategoriesItem>Gaming</CategoriesItem>
                                    </CategoriesA>

                                    <CategoriesA href="s.com">
                                        <CategoriesItem>Watches</CategoriesItem>
                                    </CategoriesA>
                                </CategoriesItems>
                            )}
                        </AnimatePresence>
                    </Categories>

                    <NavMenu>
                        <MenuItems>
                            <MenuItem>
                                <a href="s.com"> Home </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="s.com"> Shop </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="s.com">Product</a>
                            </MenuItem>
                            <MenuItem>
                                <a href="s.com"> About </a>
                            </MenuItem>
                            <MenuItem>
                                <a href="s.com"> Blog </a>
                            </MenuItem>
                        </MenuItems>
                    </NavMenu>

                    <Discount>
                        <DiscountP>
                            <Span>Clearance</Span> Up to 30% Off
                        </DiscountP>
                    </Discount>
                </NavBarWrapper>
            </MaxWidthContainer>
        </NavBar>
    );
};

export default Nav;

const NavBar = styled.nav`
    border-bottom: 1px solid #ebebeb;
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const NavBarWrapper = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.4rem;
    justify-content: space-between;
`;

const Categories = styled.div`
    position: relative;
`;

const BrowseCategories = styled.div<{ hovered: boolean }>`
    align-items: center;
    background-color: ${(props) => (props.hovered ? "#fcb941" : "#fff")};
    color: ${(props) => (props.hovered ? "#fff" : "#333")};
    cursor: pointer;
    display: flex;
    position: relative;
    transition: all 0.2s ease;
    &::after {
        background-color: #ccc;
        content: "";
        display: block;
        height: 1.5rem;
        right: -1.5rem;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        width: 0.16rem;

        @media screen and (max-width: 990px) {
            display: none;
        }
    }
`;

const Hamburger = styled.div`
    margin-right: 1rem;
`;

const DropdownSvg = styled.svg`
    fill: #333;
    margin: 0 2rem;
`;

const P = styled.p`
    font-weight: 500;
`;

const CategoriesItems = styled(motion.ul)`
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    color: #666;
    font-weight: 300;
    list-style-type: none;
    position: absolute;
    top: 4.8rem;
    width: 100%;
`;

const CategoriesA = styled.a`
    transition: color ease 0.25s;
    &:hover {
        color: #fcb941;
    }
`;

const CategoriesItem = styled.li`
    border: 0.1rem solid #ebebeb;
    border-top: none;
    letter-spacing: -0.01em;
    padding: 1rem 2rem;
`;

const NavMenu = styled.div``;

const MenuItems = styled.ul`
    display: flex;
    font-weight: 500;
    list-style-type: none;
`;

const MenuItem = styled.li`
    color: #333;
    padding: 1rem 1.5rem;
    position: relative;
    text-align: center;
    transition: all ease 0.25s;

    &::after {
        background-color: #fcb941;
        bottom: -0.1rem;
        content: "";
        display: block;
        height: 0.15rem;
        position: absolute;
        right: 0;
        transform-origin: right center;
        transform: scaleX(0);
        transition: transform ease 0.25s;
        width: 100%;
    }

    &:hover {
        color: #fcb941;
        &::after {
            transform-origin: left center;
            transform: scaleX(1);
        }
    }
`;

const Discount = styled.div`
    position: relative;
    &::after {
        background-color: #ccc;
        content: "";
        display: block;
        height: 1.5rem;
        left: -3.5rem;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        width: 0.16rem;

        @media screen and (max-width: 990px) {
            display: none;
        }
    }
`;

const DiscountP = styled(P)`
    color: #333;
`;

const Span = styled.span`
    color: #777;
`;
