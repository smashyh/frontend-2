import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import ImageBanner from "../Components/Banners/ImageBanner";
import TextBanner from "../Components/Banners/TextBanner";
import ProductShowcase  from "../Components/Products/ProductShowcase";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Wrapper = styled.div`
    
`;

const strapiURL = 'http://localhost:1337';

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
                headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
            };

            const data = await axios.get(strapiURL + '/api/products?populate[0]=photos&filters[is_new][$eq]=true', config);
            
            const tempArr = [];
            
            data.data.data.forEach(item => 
            {
                tempArr.push
                ({
                    id: item.id,
                    name: item.attributes.name,
                    image: strapiURL + item.attributes.photos.data[0].attributes.url, 
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
            <ImageBanner $image="Media/Images/foob.jpg"/>
            <TextBanner><h2>Nya produkter</h2></TextBanner>
            <ProductShowcase $products={ products } />
        </Wrapper>
    );
    
}