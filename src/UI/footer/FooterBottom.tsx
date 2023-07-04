import React from "react";
import styled from "styled-components";

import gateways from "../../images/payments.png";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";

const FooterBottom: React.FC = () => {
    return (
        <FooterBottomWrapper>
            <MaxWidthContainer>
                <FooterBottomContainer>
                    <P>
                        Copyright © 2023 Praise Immanuel. All Rights Reserved.
                    </P>

                    <GatewayImages src={gateways} alt="payment" />
                </FooterBottomContainer>
            </MaxWidthContainer>
        </FooterBottomWrapper>
    );
};

export default FooterBottom;

const FooterBottomWrapper = styled.div`
    margin: 3rem 0;
`;

const FooterBottomContainer = styled.div`
    border-top: 1px solid #ccc;
    padding: 1rem;
    @media screen and (min-width: 920px) {
        display: flex;
        justify-content: space-between;
    }
`;

const P = styled.p`
    color: #777;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 auto;
    margin-bottom: 2rem;
    text-align: center;
    @media screen and (min-width: 920px) {
        margin: 0;
        text-align: left;
    }
`;

const GatewayImages = styled.img`
    display: block;
    margin: auto;
    @media screen and (min-width: 920px) {
        margin: auto 0;
    }
`;
