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
                                    <CategoriesItem>Household</CategoriesItem>
                                    <CategoriesItem>
                                        Laptop and Accesorries
                                    </CategoriesItem>
                                    <CategoriesItem>
                                        Phones and Accesorries
                                    </CategoriesItem>
                                    <CategoriesItem>Gaming</CategoriesItem>
                                    <CategoriesItem>Watches</CategoriesItem>
                                </CategoriesItems>
                            )}
                        </AnimatePresence>
                    </Categories>

                    <NavMenu>
                        <MenuItems>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>Shop</MenuItem>
                            <MenuItem>Product</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Blog</MenuItem>
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
    position: fixed;
    width: 100%;

    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const NavBarWrapper = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    justify-content: space-between;
`;

const Categories = styled.div`
    position: relative;
`;

const BrowseCategories = styled.div<{ hovered: boolean }>`
    align-items: center;
    background-color: ${(props) => (props.hovered ? "#fcb941" : "#fff")};
    color: ${(props) => (props.hovered ? "#fff" : "#333")};
    display: flex;
    padding: 0.5rem 0;
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

const DiscountP = styled(P)`
    color: #333;
`;

const CategoriesItems = styled(motion.ul)`
    background-color: #fff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    color: #666;
    font-weight: 300;
    list-style-type: none;
    position: absolute;
    top: 5.75rem;
    width: 100%;
`;

const CategoriesItem = styled.li`
    border: 0.1rem solid #ebebeb;
    border-top: none;
    letter-spacing: -0.01em;
    padding: 1rem 2rem;
    &:last-child {
        padding-bottom: 2rem;
    }
`;

const NavMenu = styled.div``;

const MenuItems = styled.ul`
    display: flex;
    font-weight: 500;
    list-style-type: none;
`;

const MenuItem = styled.li`
    padding: 2rem 1.5rem;
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
const Span = styled.span`
    color: #777;
`;
