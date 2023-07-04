import React from "react";
import TProducts from "../../../components/TProducts";
import { TProductsArr } from "../products/products";

const products = TProductsArr;

const TrendingProducts: React.FC = () => {
    return <TProducts heading={"Trending Products"} products={products} />;
};

export default TrendingProducts;
