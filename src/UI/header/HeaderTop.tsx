import React, { useState, useRef } from "react";
import styled from "styled-components";

import { useOnClickOutside } from "../../custom-hooks/useOnClickOutside";

export const HeaderTopContainer: React.FC = () => {
    // state for dropping down Link container
    const [dropLinks, setDropLinks] = useState<boolean>(false);

    // state for dropping down Currency options
    const [dropCurrency, setDropCurrency] = useState<boolean>(false);

    // state for dropping down Language options
    const [dropLanguage, setDropLanguage] = useState<boolean>(false);

    // Ref to entire links container
    const linksRef = useRef<HTMLDivElement>(null);

    const handleLinksDropdown: (event: Event) => void = () => {
        setDropCurrency(false);
        setDropLanguage(false);
        setDropLinks(false);
    };

    // Custom hook for noticing click outside an element and running a function
    useOnClickOutside(linksRef, handleLinksDropdown);

    const handleCurrencyDropdown: () => void = () => {
        if (dropLanguage) {
            setDropLanguage(false);
        }
        setDropCurrency(!dropCurrency);
    };

    const handleLanguageDropDown: () => void = () => {
        if (dropCurrency) {
            setDropCurrency(false);
        }
        setDropLanguage(!dropLanguage);
    };

    return (
        <React.Fragment>
            <HeaderTop>
                <ContactNum>
                    <StyledSvg
                        height="2rem"
                        width="2rem"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 202.592 202.592"
                        xmlSpace="preserve"
                    >
                        <g>
                            <g>
                                <path
                                    d="M198.048,160.105l-31.286-31.29c-6.231-6.206-16.552-6.016-23.001,0.433l-15.761,15.761
			c-0.995-0.551-2.026-1.124-3.11-1.732c-9.953-5.515-23.577-13.074-37.914-27.421C72.599,101.48,65.03,87.834,59.5,77.874
			c-0.587-1.056-1.145-2.072-1.696-3.038l10.579-10.565l5.2-5.207c6.46-6.46,6.639-16.778,0.419-23.001L42.715,4.769
			c-6.216-6.216-16.541-6.027-23.001,0.433l-8.818,8.868l0.243,0.24c-2.956,3.772-5.429,8.124-7.265,12.816
			c-1.696,4.466-2.752,8.729-3.235,12.998c-4.13,34.25,11.52,65.55,53.994,108.028c58.711,58.707,106.027,54.273,108.067,54.055
			c4.449-0.53,8.707-1.593,13.038-3.275c4.652-1.818,9.001-4.284,12.769-7.233l0.193,0.168l8.933-8.747
			C204.079,176.661,204.265,166.343,198.048,160.105z M190.683,176.164l-3.937,3.93l-1.568,1.507
			c-2.469,2.387-6.743,5.74-12.984,8.181c-3.543,1.364-7.036,2.24-10.59,2.663c-0.447,0.043-44.95,3.84-100.029-51.235
			C14.743,94.38,7.238,67.395,10.384,41.259c0.394-3.464,1.263-6.95,2.652-10.593c2.462-6.277,5.812-10.547,8.181-13.02l5.443-5.497
			c2.623-2.63,6.714-2.831,9.112-0.433l31.286,31.286c2.394,2.401,2.205,6.492-0.422,9.13L45.507,73.24l1.95,3.282
			c1.084,1.829,2.23,3.879,3.454,6.106c5.812,10.482,13.764,24.83,29.121,40.173c15.317,15.325,29.644,23.27,40.094,29.067
			c2.258,1.249,4.32,2.398,6.17,3.5l3.289,1.95l21.115-21.122c2.634-2.623,6.739-2.817,9.137-0.426l31.272,31.279
			C193.5,169.446,193.31,173.537,190.683,176.164z"
                                />
                            </g>
                        </g>
                    </StyledSvg>
                    <p>+234 9157 422 372</p>
                </ContactNum>

                <Links ref={linksRef}>
                    <LinkTextMobile onClick={() => setDropLinks(!dropLinks)}>
                        Links
                        <DropdownSvg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                        </DropdownSvg>
                    </LinkTextMobile>
                    <StyledList dropLink={dropLinks}>
                        <ListWithIcon onClick={() => handleCurrencyDropdown()}>
                            Currency
                            <DropdownSvg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </DropdownSvg>
                            <StyledCurrencyList dropCurrency={dropCurrency}>
                                <StyledListItem>USD</StyledListItem>
                                <StyledListItem>NGN</StyledListItem>
                            </StyledCurrencyList>
                        </ListWithIcon>

                        <ListWithIcon onClick={() => handleLanguageDropDown()}>
                            Language
                            <DropdownSvg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                            </DropdownSvg>
                            <StyledLanguageList dropLanguage={dropLanguage}>
                                <StyledListItem>English</StyledListItem>
                                <StyledListItem>French</StyledListItem>
                                <StyledListItem>Spanish</StyledListItem>
                            </StyledLanguageList>
                        </ListWithIcon>

                        <ListWithIconEdge>Sign In</ListWithIconEdge>
                    </StyledList>
                </Links>
            </HeaderTop>
        </React.Fragment>
    );
};

const HeaderTop = styled.div`
    border-bottom: 1px solid #444;
    display: flex;
    justify-content: space-between;
`;

const ContactNum = styled.div`
    align-items: center;
    display: flex;
`;

const StyledSvg = styled.svg`
    fill: #777;
    margin-right: 0.5rem;
    width: 1.35rem;
`;

const Links = styled.div``;

const LinkTextMobile = styled.p`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const StyledUL = styled.ul`
    background-color: #fff;
    list-style-type: none;
`;

const StyledList = styled(StyledUL)<{ dropLink: boolean }>`
    display: ${(props) => (props.dropLink ? "block" : "none")};
    position: absolute;
    padding: 0 0.7rem;
    right: 1.25rem;
    top: 4.625rem;

    @media screen and (min-width: 768px) {
        background-color: transparent;
        column-gap: 2rem;
        display: flex;
        margin-block-end: 0;
        margin-block-start: 0;
        position: relative;
        right: 0;
        top: 0;
    }
`;

const StyledNestedList = styled(StyledUL)`
    border-right: 1px solid #999999;
    padding-inline-start: 0.5rem;
    position: absolute;
    left: -12.06rem;
    width: 10.5rem;

    @media screen and (min-width: 768px) {
        border-right: transparent;
        left: 0;
        top: 3.625rem;
        width: 100%;
    }
`;

const StyledListItem = styled.li`
    padding: 0.6rem 3rem 0.6rem 1.5rem;
    @media screen and (min-width: 768px) {
        padding: 0.6rem 1.25rem;
    }
`;

const StyledCurrencyList = styled(StyledNestedList)<{ dropCurrency: boolean }>`
    display: ${(props) => (props.dropCurrency ? "block" : "none")};
`;

const StyledLanguageList = styled(StyledNestedList)<{ dropLanguage: boolean }>`
    display: ${(props) => (props.dropLanguage ? "block" : "none")};
`;

const ListWithIcon = styled.li`
    cursor: pointer;
    padding: 0.8rem 0;
    position: relative;
`;

const ListWithIconEdge = styled(ListWithIcon)`
    padding-right: 0;
`;

const DropdownSvg = styled.svg`
    fill: #777;
    height: 1rem;
    margin-left: 0.5rem;
    width: 1rem;
`;
