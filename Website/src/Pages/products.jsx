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

const ProductWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductDescription = styled.p`
font-family: system-ui, Helvetica;
font-size: 1rem;
color: black;
margin-bottom: 15%;
`;

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
                headers: { Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY },
            };

            const data = await axios.get(import.meta.env.VITE_STRAPI_URL + `/api/categories?populate[0]=products&populate[1]=products.photos&filters[category_id][$eq]=${ category }`, config);
            
            // Invalid category response
            if (data.data.data[0] === undefined)
            {
                return;    
            }

            console.log(data);

            setCategoryName(data.data.data[0].attributes.categroy_name);

            const tempArr = [];
            
            data.data.data[0].attributes.products.data.forEach(item => 
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
        
        fetchData();
    }, []);

    if (products.length == 0)
    {
        return(
            <Wrapper>
                <Header/>
                <TextBanner><h2>{ categoryName }</h2></TextBanner>
                <div style={{ textAlign: "center" }}>
                    <ProductDescription>Inga produkter kunde hittas i denna kategori.</ProductDescription>
                </div>
            </Wrapper>
        );
    }

    return(
        <Wrapper>
            <Header/>
            <TextBanner><h2>{ categoryName }</h2></TextBanner>
            <ProductWrap><ProductShowcase $products={ products } /></ProductWrap>
        </Wrapper>
    );

    <ProductShowcase $filter={ `/api/categories?populate=*&filters[category_id][$eq]=${ category }` }/>
} 