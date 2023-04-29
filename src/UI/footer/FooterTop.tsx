import React from "react";
// import styled from "styled-components";
import FooterList from "./FooterList";
import { NewLinks } from "./footerLinks";

const links = NewLinks.links;

const FooterTop = () => {
    return (
        <>
            <FooterList link={links[0]} />
            <FooterList link={links[1]} />
            <FooterList link={links[2]} />
        </>
    );
};

export default FooterTop;
