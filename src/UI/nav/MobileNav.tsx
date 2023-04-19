import React from "react";
import styled from "styled-components";

export const MobileNav: React.FC = () => {
    return (
        <React.Fragment>
            <Overlay />
            <MobileNavContainer>
                <CloseIcon>
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
                        <InputContainer>
                            <Input
                                type="search"
                                placeholder="Search product..."
                                required
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
                        <List>Menu</List>
                        <List>Categories</List>
                    </NavOptions>
                </NavOptionsContainer>

                <NavItemsContainer>
                    <NavItems>
                        <NavItem>Home</NavItem>
                        <NavItem>Shop</NavItem>
                        <NavItem>Product</NavItem>
                        <NavItem>About</NavItem>
                        <NavItem>Blog</NavItem>
                    </NavItems>

                    <NavItems>
                        <NavItem>Household</NavItem>
                        <NavItem>Laptop and Accesorries</NavItem>
                        <NavItem>Phones and Accesorries</NavItem>
                        <NavItem>Gaming</NavItem>
                        <NavItem>Watches</NavItem>
                    </NavItems>
                </NavItemsContainer>

                <Socials>
                    <Social></Social>
                </Socials>
            </MobileNavContainer>
        </React.Fragment>
    );
};

const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(25, 25, 25, 0.25);
    z-index: 1;
`;

const MobileNavContainer = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: column;
    min-height: 99.99vh;
    max-width: 28rem;
    position: fixed;
    z-index: 11;
`;

const CloseIcon = styled.div`
    align-self: end;
    margin: 1.5rem;
`;

const Icon = styled.svg`
    fill: #fff;
`;

const SearchBar = styled.div``;

const StyledForm = styled.form``;

const InputContainer = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: calc(100% - 36px);
`;

const SearchIconContainer = styled.div`
    align-items: center;
    background: #fcb941;
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
    padding: 1.5rem 2rem;
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
        width: 100%;
    }
`;

const NavItemsContainer = styled.div``;

const NavItems = styled(StyledUl)`
    flex-direction: column;
`;

const NavItem = styled.li`
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.08);
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1.5rem 2rem;
    text-transform: uppercase;
`;

const Socials = styled.div``;

const Social = styled.svg``;
