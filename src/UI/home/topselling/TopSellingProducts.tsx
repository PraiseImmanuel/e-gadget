import React from "react";
import TProducts from "../../../components/TProducts";
import { TProductsArr } from "../products/products";

const products = TProductsArr;

const TopSellingProducts: React.FC = () => {
    return <TProducts heading={"Top Selling Products"} products={products} />;
};

export default TopSellingProducts;
