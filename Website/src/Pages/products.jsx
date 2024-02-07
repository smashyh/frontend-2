import styled from "styled-components";
import Header from "../Components/Comp_Header/Header";
import TextBanner from "../Components/Banners/TextBanner";
import ImageBanner from "../Components/Banners/ImageBanner";
import ProductShowcase from "../Components/Products/ProductShowcase";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const Wrapper = styled.div`
    
`;

const ProductDescription = styled.p`
font-family: system-ui, Helvetica;
font-size: 1rem;
color: black;
margin-bottom: 15%;
`;

const strapiURL = 'http://localhost:1337';

export default function Products() 
{
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() =>
    {
        async function fetchData()
        {
            const config = 
            {
                headers: { Authorization: 'Bearer b78558952db60ea2807bcd0662a595d994337755322db3215755b75b30bf7c89d54042e445176bc2a8e2a95239a2c8a13391e604b5c6c6bbb6669a340f6c362d0e3ac7eefdd37ffb45175218cc0faa64238156ae499218b236cca632fa0e1e261535f6064e1d230ae1db0b6b2518ba7e71775c3e4623531864f9539d2092dde8' },
            };

            const data = await axios.get(strapiURL + `/api/categories?populate[0]=products&populate[1]=products.photos&filters[category_id][$eq]=${ category }`, config);
            
            // Invalid category response
            if (data.data.data[0] === undefined)
            {
                return;    
            }

            console.log(data);

            setCategoryName(data.data.data[0].attributes.category_name);

            const tempArr = [];
            
            data.data.data[0].attributes.products.data.forEach(item => 
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
        
        fetchData();
    }, []);

    if (products.length == 0)
    {
        return(
            <Wrapper>
                <Header/>
                <ImageBanner $image="http://localhost:1337/uploads/foob_c9ef7b563a.jpg"/>
                <TextBanner></TextBanner>
                <div style={{ textAlign: "center" }}>
                    <ProductDescription>Inga produkter kunde hittas i denna kategori.</ProductDescription>
                </div>
            </Wrapper>
        );
    }

    return(
        <Wrapper>
            <Header/>
            <ImageBanner $image="http://localhost:1337/uploads/foob_c9ef7b563a.jpg"/>
            <TextBanner>{ categoryName }</TextBanner>
            <ProductShowcase $products={ products } />
        </Wrapper>
    );

    <ProductShowcase $filter={ `/api/categories?populate=*&filters[category_id][$eq]=${ category }` }/>
} 