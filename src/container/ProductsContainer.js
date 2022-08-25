import React, { useEffect, useState } from "react";
import Basket from "../components/Basket";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import styled from "styled-components";

const ProductContainer = () => {

    const [products, setProducts] = useState([])
    const [basketProduct, setBasketProduct] = useState([])
    


    const allProducts = [
        {
            name: "Student Tears",
            price: 12,
            quantity: 10
        },
        {
            name: "Shruken Egos",
            price: 50,
            quantity: 2
        },
        {
            name: "Ping Pong Table",
            price: 78,
            quantity: 1
        }
    ];

    const checkout = () => {
        const updatedProducts = [...products]
        updatedProducts.forEach(product => {
            basketProduct.forEach(checkoutProduct => {
                if (product.name === checkoutProduct.name && product.quantity > 0){
                    checkoutProduct.quantity = checkoutProduct.quantity -1
                }
            })
        })
        setProducts(updatedProducts)
        setBasketProduct([])

    }




    useEffect (() => {
        getProducts();
    }, [])
    


    const getProducts = () => {
        setProducts(allProducts)
    }


    const addBasketProduct = (product) => {
        const addedProduct = [...basketProduct, product]
        setBasketProduct(addedProduct)

    }

    const removeBasketProduct = (productToRemove) => {
        let newArray = [];
        for(let element of basketProduct){
            if(element.name != productToRemove.name){
                newArray.push(element)
            }
        }
        setBasketProduct(newArray)
    }

    const Title = styled.h1`
    text-align: center;
    font-size: 1.5em;
    color: #fff;
    background-image: url("https://img.freepik.com/free-vector/local-food-market-with-wooden-stalls-with-honey-vegetables-meat-fish-cheese-vector-cartoon-summer-landscape-with-street-marketplace-with-farm-produce-kiosks-counters_107791-10873.jpg?w=2000&t=st=1661345452~exp=1661346052~hmac=95f25b63093666edffb149bc23ed34d712e382d7b76bb4fa5b5debc3692f0ba0");
    background-repeat: no-repeat;
    background-size: auto;
    margin: 0;
    padding: 100px;`;


    return(
        <div>
            <Title className="area">CodeClan Black Market </Title>
            <iframe className="fancybox" src="https://editor.p5js.org/spuddly/full/rdAo-bTTO"></iframe>
            <ProductList products={products} addBasketProduct={addBasketProduct} removeBasketProduct={removeBasketProduct}/>
            <h1>The Goodies</h1>
            <hr></hr>
            <Basket basketProduct = {basketProduct} checkout={checkout} removeBasketProduct={removeBasketProduct} setBasketProduct={setBasketProduct}/>
        </div>
    )
}


export default ProductContainer;