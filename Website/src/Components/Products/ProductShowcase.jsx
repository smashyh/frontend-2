import styled from "styled-components";
import ProductBox from "./ProductBox";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const ProductContainer = styled.div`
    margin: 32px 32px 0 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-wrap: wrap;
    grid-column-gap: 8px;
    grid-row-gap: 8px;
`;

/**
 * Parameters:
 * $filter: The Strapi REST API fetch filter, added to the response url. Always start with a question mark.
 *  
 */

const strapiURL = 'http://localhost:1337';

export default function ProductShowcase(props)
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        async function fetchData()
        {
            const config = 
            {
                headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
            };

            const data = await axios.get(strapiURL + '/api/products?populate=*' + props.$filter, config);
            
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
        
        fetchData();
    }, []);

    return(
        <ProductContainer>
            {
                products.map(product => <ProductBox
                    key={ product.id }
                    $name={ product.name }
                    $image={ product.image }
                    $description={ product.description }
                    $price={ product.price }
                    //$productId={ product.productId }
                />)
            }
        </ProductContainer>
    );
}