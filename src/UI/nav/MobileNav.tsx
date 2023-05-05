import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { closeMenu } from "../../store/slice/mobileMenuSlice";

export const MobileNav: React.FC = () => {
    const dispatch = useAppDispatch();
    // Get state for closing and opening mobile menu nav
    const isMenuClosed = useAppSelector(
        (state) => state.toggleMobileMenu.isMenuClosed
    );
    // state for styling the input container
    const [inputIsFocus, setInputIsFocus] = useState<boolean>(false);
    // state for toggling between Menu and Categories Nav
    const [selectMenu, setSelectMenu] = useState<boolean>(true);
    const [selectCategories, setSelectCategories] = useState<boolean>(false);

    const handleSelectMenu: () => void = () => {
        setSelectCategories(false);
        setSelectMenu(true);
    };

    const handleSelectCategories: () => void = () => {
        setSelectCategories(true);
        setSelectMenu(false);
    };

    return (
        <React.Fragment>
            <AnimatePresence initial={false}>
                {isMenuClosed || (
                    <Overlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.15,
                        }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMenuClosed || (
                    <MobileNavContainer
                        initial={{ translateX: "0" }}
                        animate={{ translateX: "28rem" }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.4,
                        }}
                        exit={{ translateX: "0" }}
                    >
                        <CloseIcon onClick={() => dispatch(closeMenu())}>
                            <Icon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                height="1.5rem"
                                width="1.5rem"
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </Icon>
                        </CloseIcon>

                        <SearchBar>
                            <StyledForm>
                                <InputContainer focus={inputIsFocus}>
                                    <Input
                                        type="search"
                                        placeholder="Search product..."
                                        required
                                        onFocus={() => setInputIsFocus(true)}
                                        onBlur={() => setInputIsFocus(false)}
                                    />
                                    <SearchIconContainer>
                                        <Icon
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            height="1rem"
                                            width="1rem"
                                        >
                                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </Icon>
                                    </SearchIconContainer>
                                </InputContainer>
                            </StyledForm>
                        </SearchBar>

                        <NavOptionsContainer>
                            <NavOptions>
                                <Menu selectMenu={selectMenu}>
                                    <NavOptionButton
                                        onClick={() => handleSelectMenu()}
                                    >
                                        Menu
                                    </NavOptionButton>
                                </Menu>
                                <Categories selectCategories={selectCategories}>
                                    <NavOptionButton
                                        onClick={() => handleSelectCategories()}
                                    >
                                        Categories
                                    </NavOptionButton>
                                </Categories>
                            </NavOptions>
                        </NavOptionsContainer>

                        <NavItemsContainer>
                            <AnimatePresence initial={false}>
                                {selectMenu && (
                                    <MenuItems
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            ease: "linear",
                                            duration: 0.15,
                                        }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <MenuItem>Home</MenuItem>
                                        <MenuItem>Shop</MenuItem>
                                        <MenuItem>Product</MenuItem>
                                        <MenuItem>About</MenuItem>
                                        <MenuItem>Blog</MenuItem>
                                    </MenuItems>
                                )}
                            </AnimatePresence>

                            <AnimatePresence initial={false}>
                                {selectCategories && (
                                    <CategoriesItems
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            ease: "linear",
                                            duration: 0.15,
                                        }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <NavItem>Household</NavItem>
                                        <NavItem>
                                            Laptop and Accesorries
                                        </NavItem>
                                        <NavItem>
                                            Phones and Accesorries
                                        </NavItem>
                                        <NavItem>Gaming</NavItem>
                                        <NavItem>Watches</NavItem>
                                    </CategoriesItems>
                                )}
                            </AnimatePresence>
                        </NavItemsContainer>

                        <Socials>
                            <Social href="p.com">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </SocialSvg>
                            </Social>

                            <Social href="p.com">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </SocialSvg>
                            </Social>

                            <Social href="p.com">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </SocialSvg>
                            </Social>

                            <Social href="p.com">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                                </SocialSvg>
                            </Social>
                        </Socials>
                    </MobileNavContainer>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

const Overlay = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(25, 25, 25, 0.25);
    display: flex;
    z-index: 1;
`;

const MobileNavContainer = styled(motion.div)`
    background-color: #333;
    box-shadow: 0.1rem 0 0.6rem 0 rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    left: -28rem;
    top: o;
    min-height: 99.99vh;
    max-width: 28rem;
    overflow-y: scroll;
    position: fixed;
    width: 100%;
    will-change: transform;
    z-index: 111;
`;

const CloseIcon = styled.button`
    align-self: end;
    margin: 1.5rem;
`;

const Icon = styled.svg`
    fill: #fff;
`;

const SearchBar = styled.div``;

const StyledForm = styled.form``;

const InputContainer = styled.div<{ focus: boolean }>`
    border: 1px solid;
    border-color: ${(props) =>
        props.focus ? "#fcb941" : "rgba(255, 255, 255, 0.1)"};
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: calc(100% - 36px);
    transition: all 0.4s ease-in;
`;

const SearchIconContainer = styled.div`
    align-items: center;
    background: #fcb941;
    border: 1px solid rgb(252, 185, 65);
    display: flex;
    padding: 1rem 1.25rem;
    justify-content: center;
`;

const Input = styled.input`
    background-color: transparent;
    border: transparent;
    color: #777;
    font-size: 1.25rem;
    padding-left: 1rem;
    transition: all 0.4s ease-in;
    &:focus {
        outline: none;
        color: #fff;
    }
`;

const NavOptionsContainer = styled.div`
    margin-top: 2rem;
`;

const StyledUl = styled.ul`
    color: #fff;
    display: flex;
    font-size: 1.25rem;
    list-style-type: none;
`;

const NavOptions = styled(StyledUl)``;

const List = styled.li`
    font-weight: 600;
    position: relative;
    text-transform: uppercase;
    width: 50%;
    &::after {
        background-color: #fcb941;
        bottom: 0;
        content: "";
        display: block;
        height: 0.2rem;
        position: absolute;
        right: 0;
        transition: transform 0.3s ease;
        width: 100%;
    }
`;

const Menu = styled(List)<{ selectMenu: boolean }>`
    &::after {
        transform-origin: ${(props) =>
            props.selectMenu ? "left center" : "right center"};
        transform: ${(props) =>
            props.selectMenu ? "scale(1, 1)" : "scale(0,1)"};
    }
`;

const Categories = styled(List)<{ selectCategories: boolean }>`
    &::after {
        transform-origin: ${(props) =>
            props.selectCategories ? "left center" : "right center"};
        transform: ${(props) =>
            props.selectCategories ? "scale(1, 1)" : "scale(0,1)"};
    }
`;

const NavOptionButton = styled.button`
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.08);
    padding: 1.5rem 2rem;
    text-align: left;
    width: 100%;
    &:hover {
        color: #fcb941;
        transition: color 0.2s ease-in-out;
    }
`;

const NavItemsContainer = styled.div`
    display: flex;
    overflow: hidden;
`;

const NavItems = styled(motion.ul)`
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    list-style-type: none;
    width: 100%;
`;

const MenuItems = styled(NavItems)``;

const CategoriesItems = styled(NavItems)``;

const NavItem = styled.li`
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1.5rem 2rem;
`;

const MenuItem = styled(NavItem)`
    font-weight: 300;
    text-transform: uppercase;
`;

const Socials = styled.div`
    column-gap: 2rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`;

const Social = styled.a`
    align-items: center;
    border: 0.1rem solid rgb(255, 255, 255, 0.45);
    border-radius: 50%;
    display: flex;
    height: 2.7rem;
    justify-content: center;
    transition: all 0.35s ease;
    width: 2.7rem;

    &:hover {
        border-color: #fcb941;
    }
`;

const SocialSvg = styled.svg`
    fill: rgb(255, 255, 255, 0.45);

    ${Social}:hover & {
        fill: #fcb941;
    }
`;
