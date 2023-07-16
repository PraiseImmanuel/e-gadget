import React from "react";

import IntroSection from "./Intro/IntroSection";
import ProductSection from "./products/ProductSection";
import PageAd from "./pageAd/PageAD";
import DealsAndOutlet from "./deals/DealsAndOutlet";
import Brands from "./brands/Brands";
import TrendingProducts from "./trendingProducts/TrendingProducts";
import TopSellingProducts from "./topselling/TopSellingProducts";
import SocialsAndMail from "./socialsAndMail/SocialsAndMail";
import ServiceOffers from "./serviceOffer/ServiceOffers";

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <IntroSection />
            <ProductSection />
            <PageAd />
            <DealsAndOutlet />
            <Brands />
            <TrendingProducts />
            <TopSellingProducts />
            <ServiceOffers />
            <SocialsAndMail />
        </React.Fragment>
    );
};

export default Home;
