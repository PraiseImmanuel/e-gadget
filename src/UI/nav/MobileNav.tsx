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
                            ease: "linear",
                            duration: 0.6,
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
                            <Social href="https://github.com/PraiseImmanuel">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </SocialSvg>
                            </Social>

                            <Social href="https://twitter.com/_praiseimmanuel">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </SocialSvg>
                            </Social>

                            <Social href="https://www.linkedin.com/in/praiseimmanuel">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </SocialSvg>
                            </Social>

                            <Social href="https://www.facebook.com/praiseimmanuelX/">
                                <SocialSvg
                                    height="1.25rem"
                                    width="1.25rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
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
    max-width: 24.5rem;
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
