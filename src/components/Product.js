import React from "react";
import styled from "styled-components";

const Product = ({product, addBasketProduct}) => {

    const Button = styled.button`
    font-size: 1em;
    padding: 1em;
    margin: 5em;
    border: 2px solid ced7e0;
    background: ${(props) => props.background || "#9ccddc"}`;


    const handleAddProduct =() => {
        addBasketProduct(product)
    }

    return (
        <div>
            <ul>
                <h3>Name:</h3> <p>{product.name}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <Button onClick={handleAddProduct} value={product}>Add to Basket</Button>
            </ul>
        </div>
    )
}

export default Product;