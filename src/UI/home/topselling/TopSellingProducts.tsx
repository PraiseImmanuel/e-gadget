import React from "react";
import TProducts from "../../../components/TProducts";
import { TopProductsArr } from "../../../products";

const products = TopProductsArr;

const TopSellingProducts: React.FC = () => {
    return <TProducts heading={"Top Selling Products"} products={products} />;
};

export default TopSellingProducts;
