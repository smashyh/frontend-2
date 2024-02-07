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
                headers: { Authorization: 'Bearer b78558952db60ea2807bcd0662a595d994337755322db3215755b75b30bf7c89d54042e445176bc2a8e2a95239a2c8a13391e604b5c6c6bbb6669a340f6c362d0e3ac7eefdd37ffb45175218cc0faa64238156ae499218b236cca632fa0e1e261535f6064e1d230ae1db0b6b2518ba7e71775c3e4623531864f9539d2092dde8' },
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
            <ImageBanner $image="http://localhost:1337/uploads/foob_c9ef7b563a.jpg"/>
            <TextBanner><h2>Nya produkter</h2></TextBanner>
            <ProductShowcase $products={ products } />
        </Wrapper>
    );
    
}