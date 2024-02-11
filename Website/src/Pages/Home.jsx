import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import TextBanner from "../Components/Banners/TextBanner";
import ProductShowcase  from "../Components/Products/ProductShowcase";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Footer from "../Components/Comp_Footer/Footer";



const Wrapper = styled.div`
    padding-bottom: 75px;
    box-sizing: border-box;
`;

const ProductWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export default function Home() 
{
    const [products, setProducts] = useState([]);

    // Retrieve new products
    useEffect(() =>
    {
        async function fetchNewItemsData()
        {
            const config = 
            {
                headers: { Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY },
            };

            const data = await axios.get(import.meta.env.VITE_STRAPI_URL + '/api/products?populate[0]=photos&filters[is_new][$eq]=true', config);
            
            const tempArr = [];
            
            data.data.data.forEach(item => 
            {
                tempArr.push
                ({
                    id: item.id,
                    name: item.attributes.name,
                    image: import.meta.env.VITE_STRAPI_URL + item.attributes.photos.data[0].attributes.url, 
                    description: item.attributes.short_description,
                    price: item.attributes.price,
                    productId: item.attributes.product_id,
                });
                
            });

            setProducts([...products, ...tempArr]);
        }
        
        fetchNewItemsData();
    }, []);

    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>Nya produkter</h2></TextBanner>
            <ProductWrap>
                <ProductShowcase $products={ products } />
            </ProductWrap>
            <Footer/>
        </Wrapper>
    );
    
}