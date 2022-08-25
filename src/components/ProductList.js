import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductList = ({products, addBasketProduct}) => {
    const productNode = products.map((product, index) => {
        return <Product product={product} key={index} addBasketProduct={addBasketProduct}/>
    })

    return (
        <>
        {productNode}
        </>
    )
};

export default ProductList;