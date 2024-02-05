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
        id: -1,//i,//item.id,
        name: "",//item.attributes.name,
        image: "",//strapiURL + item.attributes.photos.data[0].attributes.url, 
        description: "",//item.attributes.short_description,
        price: "",//item.attributes.price,
        inStock: 0,
    });

    useEffect(() =>
    {
        // Define functions
        async function fetchData()
        {
            const config = 
            {
                headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
            };

            const data = await axios.get(strapiURL + `/api/products?populate=*&filters[product_id][$eq]=${props.$productID}`, config);
            //const data = await axios.get(strapiURL + `/api/products?populate=*&filters[product_id][$eq]=${cart[i]}`, config);
            
            const item = data.data.data[0];
            if (item === undefined)
            {
                setProduct
                ({
                    id: -2,//i,//item.id,
                    name: "",//item.attributes.name,
                    image: "",//strapiURL + item.attributes.photos.data[0].attributes.url, 
                    description: "",//item.attributes.short_description,
                    price: "",//item.attributes.price,
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