import React from "react";
import TProducts from "../../../components/TProducts";
import { TrendingProductsArr } from "../../../products";

const products = TrendingProductsArr;

const TrendingProducts: React.FC = () => {
    return <TProducts heading={"Trending Products"} products={products} />;
};

export default TrendingProducts;
