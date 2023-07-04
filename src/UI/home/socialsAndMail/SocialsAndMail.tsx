import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../../components/MaxWidthContainer";

import bgWrapper from "../../../images/bg-2.jpg";

const SocialsAndMail: React.FC = () => {
    return (
        <MaxWidthContainer>
            <Wrapper>
                <WhiteBg>
                    <Socials>
                        <Heading>Shop Social</Heading>
                        <Text>
                            Sorem ipsuma nec eget felis facilisis fermentum.
                            Aliquam porttitor mauris sit amet orci.
                        </Text>
                        <SocialSvgs>
                            <Git href="https://github.com/PraiseImmanuel">
                                <GitSvg
                                    height="1.7rem"
                                    width="1.7rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </GitSvg>
                            </Git>

                            <Twitter href="https://twitter.com/_praiseimmanuel">
                                <TwitterSvg
                                    height="1.7rem"
                                    width="1.7rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </TwitterSvg>
                            </Twitter>

                            <Linkedin href="https://www.linkedin.com/in/praiseimmanuel">
                                <LinkedinSvg
                                    height="1.7rem"
                                    width="1.7rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </LinkedinSvg>
                            </Linkedin>

                            <Facebook href="https://www.facebook.com/praiseimmanuelX/">
                                <FacebookSvg
                                    height="1.7rem"
                                    width="1.7rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                >
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                </FacebookSvg>
                            </Facebook>
                        </SocialSvgs>
                    </Socials>

                    <Mail>
                        <Heading>Get the Latest Deals</Heading>
                        <Text>
                            and
                            <br />
                            receive <Span>$20 coupon</Span> for first shopping
                        </Text>
                        <form>
                            <InputBox>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                                <Button>
                                    <svg
                                        height="1rem"
                                        width="1rem"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="#fff"
                                    >
                                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
                                    </svg>
                                </Button>
                            </InputBox>
                        </form>
                    </Mail>
                </WhiteBg>
            </Wrapper>
        </MaxWidthContainer>
    );
};

export default SocialsAndMail;

const Wrapper = styled.div`
    background-image: url(${bgWrapper});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1rem;
    margin-bottom: 10rem;
`;

const WhiteBg = styled.div`
    align-items: center;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 3rem;
    text-align: center;
    @media screen and (min-width: 990px) {
        flex-direction: row;
    }
`;

const Socials = styled.div`
    max-width: 50rem;
    position: relative;
    &::before {
        background-color: #ebebeb;
        content: "";
        display: block;
        height: 0.15rem;
        position: absolute;
        right: 50%;
        bottom: 5rem;
        transform: translateX(50%);
        width: 90%;
    }
    @media screen and (max-width: 325px) {
        &::before {
            bottom: 11.5rem;
        }
    }
    @media screen and (min-width: 990px) {
        margin-left: -5rem;
        max-width: 42rem;
        &::before {
            height: 120%;
            right: -5rem;
            top: 50%;
            transform: translateY(-50%);
            width: 0.15rem;
        }
    }
`;

const Heading = styled.h2`
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1.2;
`;

const Text = styled.p`
    color: #999;
    font-size: 1.6rem;
    line-height: 1.35;
    font-weight: 300;
    margin-top: 0.5rem;
`;

const SocialSvgs = styled.div`
    column-gap: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
    row-gap: 1.5rem;
`;

const Social = styled.a`
    align-items: center;
    border: 1px solid transparent;
    border-radius: 50%;
    display: flex;
    height: 4.25rem;
    justify-content: center;
    transition: all 0.35s ease;
    width: 4.25rem;
`;

const SocialSvg = styled.svg`
    fill: #fff;
`;

const Git = styled(Social)`
    background-color: #8f79ed;
    transition: all ease 0.35s;
    &:hover {
        background-color: transparent;
        border-color: #8f79ed;
    }
`;

const Twitter = styled(Social)`
    background-color: #79c8ed;
    transition: all ease 0.35s;
    &:hover {
        background-color: transparent;
        border-color: #79c8ed;
    }
`;

const Linkedin = styled(Social)`
    background-color: #e66262;
    transition: all ease 0.35s;
    &:hover {
        background-color: transparent;
        border-color: #e66262;
    }
`;

const Facebook = styled(Social)`
    background-color: #dd6d9a;
    transition: all ease 0.35s;
    &:hover {
        background-color: transparent;
        border-color: #dd6d9a;
    }
`;

const GitSvg = styled(SocialSvg)`
    margin-left: -0.5rem;
    transition: all ease 0.35s;
    ${Git}:hover & {
        fill: #8f79ed;
    }
`;

const TwitterSvg = styled(SocialSvg)`
    transition: all ease 0.35s;
    ${Twitter}:hover & {
        fill: #79c8ed;
    }
`;

const LinkedinSvg = styled(SocialSvg)`
    transition: all ease 0.35s;
    ${Linkedin}:hover & {
        fill: #e66262;
    }
`;

const FacebookSvg = styled(SocialSvg)`
    transition: all ease 0.35s;
    ${Facebook}:hover & {
        fill: #dd6d9a;
    }
`;

const Mail = styled.div`
    margin-top: 10rem;
    max-width: 50rem;
    @media screen and (min-width: 990px) {
        margin-left: 10rem;
        margin-top: 0;
    }
`;

const Span = styled.span`
    color: #fcb941;
`;

const InputBox = styled.div`
    margin-top: 3rem;
    display: flex;
    width: 100%;
`;

const Input = styled.input`
    background: transparent;
    border: 1px solid #dadada;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    color: #999;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.5;
    padding: 1rem;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    transition: all linear 0.3s;
    &:focus {
        border-color: #fcb941;
        outline: none;
    }
    @media screen and (min-width: 990px) {
        flex: auto;
        padding: 1rem 0rem 1rem 1.5rem;
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: #fcb941;
    border-top-right-radius: 3rem;
    border-bottom-right-radius: 3rem;
    margin-left: -1px;
    min-width: 5rem;
    transition: fill ease 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;
