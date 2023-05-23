import React from "react";
import styled from "styled-components";
import { MaxWidthContainer } from "../../components/MaxWidthContainer";
import { Products } from "./products";

const products = Products.products;

const ProductsWrapper = () => {
    return (
        <ProductsContainer>
            <MaxWidthContainer>
                {products?.map((product) => (
                    <Product key={product.id}>
                        <ProductImage>
                            <Image src={product.image} />
                        </ProductImage>

                        <ProductInformation>
                            <h3>
                                {" "}
                                <Category href="cst.com">
                                    {product.category}
                                </Category>
                            </h3>
                            <h3>
                                <Name href="prd.com">{product.name}</Name>
                            </h3>
                            <Price>{product.price}</Price>
                            <Reviews>
                                <Stars>{product.stars}</Stars>
                                <NumOfReviews>
                                    ({product.reviews.length} reviews)
                                </NumOfReviews>
                            </Reviews>
                        </ProductInformation>
                    </Product>
                ))}
            </MaxWidthContainer>
        </ProductsContainer>
    );
};

export default ProductsWrapper;

const ProductsContainer = styled.div``;

const Product = styled.div`
    background-color: #fff;
    border: 0.1rem solid #ebebeb;
    max-width: 29.5rem;
`;

const ProductImage = styled.div``;

const Image = styled.img`
    width: 100%;
`;

const ProductInformation = styled.div`
    padding: 0 2rem;
    padding-bottom: 3.5rem;
`;

const Category = styled.a`
    color: #ccc;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.2;
    transition: color ease 0.25s;
    &:hover {
        color: #333;
    }
`;

const Name = styled.a`
    color: #333;
    display: inline-block;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    transition: color ease 0.25s;
    &:hover {
        color: #fcb941;
    }
`;

const Price = styled.p`
    color: #fcb941;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
`;

const Reviews = styled.div`
    align-items: center;
    display: flex;
    margin-top: 0.5rem;
`;

const Stars = styled.span`
    color: #333;
`;

const NumOfReviews = styled.p`
    color: #ccc;
    font-size: 1.3rem;
    margin-left: 0.5rem;
`;
