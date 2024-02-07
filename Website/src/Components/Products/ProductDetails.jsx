import styled from "styled-components";
import TextBanner from "../Banners/TextBanner";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div``;

const ProductDivider = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 32px;
    margin-bottom: 32px;
    height: 512px;
`;

const ProductInfoDivider = styled.div`
    padding-left: 64px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ProductImg = styled.img`
    
`;

const ProductTitle = styled.h3`
font-family: system-ui, Helvetica;
font-size: 1.25rem;
color: black;
margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
font-family: system-ui, Helvetica;
font-size: 1rem;
color: black;
margin-bottom: 15%;
`;

const ProductPrice = styled.h3`
font-family: system-ui, Helvetica;
font-size: 2rem;
color: black;
margin-bottom: 0.5rem;
`;

const AddToCartButton = styled.button`
    font-family: system-ui, Helvetica;
    font-size: 1.10rem;
    border-width: 0;
    background-color: var(--bannerColor);
    color: #FFFFFF;
    width: 192px;
    height: 48px;
    cursor: pointer;
    background-color: var(--bannerColor);
    &:hover
    {
        background-color: var(--bannerHoverColor);
    }
    //--bannerColor: #2a8545;
    //--bannerHoverColor: #1b552c;
`;

const localStorageCartName = 'temp_cart';
var addToCartFunc = (productID) =>
{
    console.log(productID);
    const cart = JSON.parse(localStorage.getItem(localStorageCartName));
    cart.push(productID);
    localStorage.setItem('temp_cart', JSON.stringify(cart));
};

const strapiURL = 'http://localhost:1337';

function InStockComp(props)
{
    if (props.$inStock == 0)
    {
        return(
            <ProductTitle>Status: Ej i lager</ProductTitle>
        );
    }

    return(
        <ProductTitle>Status: I lager ({ props.$inStock }st)</ProductTitle>
    );
}

export default function ProductDetails(props)
{
    const [product, setProduct] = useState
    ({
        id: -1,
        name: "",
        image: "",
        description: "",
        price: "",
        inStock: 0,
    });

    useEffect(() =>
    {
        // Define functions
        async function fetchData()
        {
            const config = 
            {
                headers: { Authorization: 'Bearer b78558952db60ea2807bcd0662a595d994337755322db3215755b75b30bf7c89d54042e445176bc2a8e2a95239a2c8a13391e604b5c6c6bbb6669a340f6c362d0e3ac7eefdd37ffb45175218cc0faa64238156ae499218b236cca632fa0e1e261535f6064e1d230ae1db0b6b2518ba7e71775c3e4623531864f9539d2092dde8' },
            };

            const data = await axios.get(strapiURL + `/api/products?populate=*&filters[product_id][$eq]=${props.$productID}`, config);
            
            const item = data.data.data[0];
            if (item === undefined)
            {
                setProduct
                ({
                    id: -2,
                    name: "",
                    image: "",
                    description: "",
                    price: "",
                    inStock: 0,
                });
                return;
            }
            
            setProduct
            ({
                id: 0,//item.id,
                name: item.attributes.name,
                image: strapiURL + item.attributes.photos.data[0].attributes.url, 
                description: item.attributes.long_description,
                price: item.attributes.price,
                inStock: item.attributes.in_stock,
            });
        }
        
        fetchData();

    }, []);

    // Undefined case: product couldn't be found
    if (product.id == -2)
    {
        return(
            <Wrapper>
                <TextBanner></TextBanner>
                <div style={{ textAlign: "center" }}>
                    <ProductDescription>Fel: Produkten kunde inte hittas.</ProductDescription>
                </div>
            </Wrapper>
        );
    }

    if (product.inStock == 0)
    {
        return(
            <Wrapper>
                <TextBanner></TextBanner>
                <ProductDivider>
                    <ProductImg src={ product.image }/>
    
                    <ProductInfoDivider>
                        <ProductTitle>{ product.name }</ProductTitle>
                        <ProductDescription>{ product.description }</ProductDescription>
                        
                        <ProductPrice>{ product.price }kr</ProductPrice>
    
                        <InStockComp $inStock={ product.inStock }/>
                    </ProductInfoDivider>
    
                </ProductDivider>
            </Wrapper>
        );
    }

    return(
        <Wrapper>
            <TextBanner></TextBanner>
            <ProductDivider>
                <ProductImg src={ product.image }/>

                <ProductInfoDivider>
                    <ProductTitle>{ product.name }</ProductTitle>
                    <ProductDescription>{ product.description }</ProductDescription>
                    
                    <ProductPrice>{ product.price }kr</ProductPrice>

                    <InStockComp $inStock={ product.inStock }/>

                    <div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "flex-end" }}>
                        <AddToCartButton onClick={ () => addToCartFunc(props.$productID) }>Lägg till i kundkorgen</AddToCartButton>
                    </div>
                </ProductInfoDivider>

            </ProductDivider>
        </Wrapper>
    );
}