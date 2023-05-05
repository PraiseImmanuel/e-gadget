import React from "react";
import { Sling as MyHamburger } from "hamburger-react";
import styled from "styled-components";

import logo from "../../images/logo.png";
import { openMenu } from "../../store/slice/mobileMenuSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

export const HeaderBottomContainer: React.FC = () => {
    // Get and dispatch state for closing and opening menu from store
    const dispatch = useAppDispatch();
    const isMenuClosed = useAppSelector(
        (state) => state.toggleMobileMenu.isMenuClosed
    );

    return (
        // Bottom of Header container
        <HeaderBottom>
            <Hamburger onClick={() => dispatch(openMenu())}>
                <MyHamburger size={20} color="#fff" toggled={!isMenuClosed} />
            </Hamburger>

            <LogoBox>
                <Logo src={logo} alt="logo" height="29px" width="130px" />
            </LogoBox>

            {/* Search container */}
            <SearchBar>
                <Form>
                    <InputContainer>
                        <SearchButton>
                            <SearchIcon
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                height="2rem"
                                width="2rem"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </SearchIcon>
                        </SearchButton>
                        <Input
                            type="search"
                            placeholder="Search product..."
                            required
                        />
                    </InputContainer>
                </Form>
            </SearchBar>

            <UserSelectedItemBox>
                <UserSelectedItem>
                    <NumberOfItemsWishlist>5</NumberOfItemsWishlist>
                    <Icon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                    </Icon>
                    <p>Wishlist</p>
                </UserSelectedItem>

                <UserSelectedItem>
                    <NumberOfItems>6</NumberOfItems>
                    <Icon
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </Icon>
                    <p>Cart</p>
                </UserSelectedItem>
            </UserSelectedItemBox>
        </HeaderBottom>
    );
};

const HeaderBottom = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 1rem;
`;

const Hamburger = styled.div`
    @media screen and (min-width: 920px) {
        display: none;
    }
`;

const LogoBox = styled.div`
    cursor: pointer;
    margin-top: 0.5rem;
`;

const Logo = styled.img``;

const SearchBar = styled.div`
    display: none;
    @media screen and (min-width: 920px) {
        display: block;
    }
`;

const Form = styled.form``;

const InputContainer = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 2rem;
    display: flex;
    font-size: 1.5rem;
    padding: 0.8rem 1.25rem;
    min-width: 42rem;
    @media screen and (min-width: 1199px) {
        min-width: 56rem;
    }
`;

const SearchButton = styled.button`
    display: flex;
`;

const SearchIcon = styled.svg`
    fill: #333;
    transition: fill ease 0.25s;
    &:hover {
        fill: #fcb941;
    }
`;

const Input = styled.input`
    border: transparent;
    color: #888;
    height: 100%;
    padding: 0 2rem;
    width: 100%;

    &:focus {
        outline: none;
    }
`;

const UserSelectedItemBox = styled.div`
    column-gap: 2rem;
    display: flex;
    margin-top: 0.5rem;
    padding: 0 1.8rem;
    @media screen and (min-width: 920px) {
        column-gap: 3.5rem;
        padding-right: 0;
    }
`;

const UserSelectedItem = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const NumberOfItems = styled.p`
    background-color: #fcb941;
    border-radius: 50%;
    color: #333;
    font-size: 1rem;
    font-weight: 400;
    height: 1.6rem;
    left: 1.8rem;
    position: absolute;
    text-align: center;
    top: -0.5rem;
    width: 1.6rem;
`;

const NumberOfItemsWishlist = styled(NumberOfItems)`
    left: 2.9rem;
`;

const Icon = styled.svg`
    fill: #fff;
    height: 2.25rem;
    width: 2.25rem;
    ${UserSelectedItem}:hover & {
        fill: #fcb941;
    }
`;
