import React from "react";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer: React.FC = () => {
    return (
        <React.Fragment>
            <MaxWidthContainer>
                <FooterTop />
                <FooterBottom />
            </MaxWidthContainer>
        </React.Fragment>
    );
};

export default Footer;
