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
                headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
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
                <ImageBanner $image="http://localhost:1337/uploads/foob_09005fa915.jpg"/>
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
            <ImageBanner $image="http://localhost:1337/uploads/foob_09005fa915.jpg"/>
            <TextBanner>{ categoryName }</TextBanner>
            <ProductShowcase $products={ products } />
        </Wrapper>
    );

    <ProductShowcase $filter={ `/api/categories?populate=*&filters[category_id][$eq]=${ category }` }/>
} 