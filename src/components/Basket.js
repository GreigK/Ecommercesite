import React from "react";
import styled from "styled-components";

const Button = styled.button`
font-size: 1em;
padding: 1em;
margin: 5em;
border: 2px solid ced7e0;
background: ${(props) => props.background || "#9ccddc"}`;


const Basket = ({basketProduct, checkout, setBasketProduct}) => {


    const totalAmount = basketProduct.reduce((runningTotal, nextProduct) => {
        return runningTotal + nextProduct.price
    }, 0)

    const removeBasketProduct = (indexToRemove) => {
        let newArray = [...basketProduct];
        newArray.splice(indexToRemove, 1);
        setBasketProduct(newArray)
    }

    const listOfAddedProduct = basketProduct.map((product, index) => {
        return (
            <div key={index}>
            <ul>
                <hr></hr>
                <h3>Name:</h3> <p>{product.name}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <hr></hr>
            </ul>
            <button onClick={removeBasketProduct}>Remove</button>
            </div>
        )
    })
    return (
        <>
{listOfAddedProduct}
{totalAmount}

<Button onClick={checkout}>Click here to Pay!</Button>
        </>
    )
}
export default Basket;