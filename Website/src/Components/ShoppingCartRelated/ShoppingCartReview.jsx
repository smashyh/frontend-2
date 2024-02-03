import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Wrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const strapiURL = 'http://localhost:1337';

const localStorageCartName = 'temp_cart';

export default function ShoppingCartReview()
{
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() =>
    {
        // Define functions
        async function fetchData()
        {
            const cart = JSON.parse(localStorage.getItem(localStorageCartName));
            if (cart === undefined || cart.length == 0)
            {
                return;
            }

            const tempArr = [];
            
            const config = 
            {
                headers: { Authorization: 'Bearer e05a848cc3bf92eb2e1952bf054548150013161eb5b9a38caa774cecaad99511a3bf1f8c2fea3f421ed8b123559213c83cec4afbfefd2293d6d1f886ce790a2a3c5206c82f50824054330ae285a29cd720ebc09e1e04d1713bafc945a4b794e80723a4b9e0421fd9d7a131240f7058a5fdf26a3d05af8756af08d885616794f7' },
            };

            for (let i = 0; i < cart.length; i++)
            {
                const data = await axios.get(strapiURL + `/api/products?populate=*&filters[product_id][$eq]=${cart[i]}`, config);

                // check if invalid item and skip if it is
                if (data === undefined || data === null)
                {
                    continue;
                }

                const item = data.data.data[0];

                tempArr.push
                ({
                    id: i,//item.id,
                    name: item.attributes.name,
                    image: strapiURL + item.attributes.photos.data[0].attributes.url, 
                    description: item.attributes.short_description,
                    price: item.attributes.price,
                    productId: item.attributes.product_id,
                });
                
            }

            setShoppingCart([...shoppingCart, ...tempArr]);
        }
        
        fetchData();

    }, []);

    const removeFunction = (index) => 
    {
        console.log(index);
        const cart = JSON.parse(localStorage.getItem(localStorageCartName));
        
        const idx = cart.indexOf(index);
        if (index > -1)
        {
            cart.splice(idx, 1);
            localStorage.setItem('temp_cart', JSON.stringify(cart));
            window.location.reload(false);
        }
    };

    // const f = () =>
    // {
    //     const array = ["adidas-t-shirt-storlek-m", "adidas-t-shirt-storlek-m", "adidas-t-shirt-storlek-m", "adidas-t-shirt-storlek-m"];
    //     localStorage.setItem('temp_cart', JSON.stringify(array));
    // }

    // useEffect(() => 
    // {
    //     f();
    // }, [])

    return(
        <Wrapper>
            <div style={{marginLeft: '10%'}}/>
            {
                shoppingCart.map(item => <ShoppingCartItem
                    key={ item.id }
                    $onClick={ () => removeFunction(item.id) }
                    // $name={ product.name }
                    // $image={ product.image }
                    // $description={ product.description }
                    // $price={ product.price }
                    //$productId={ product.productId }
                />)
            }
            {/* <ShoppingCartItem />
            <ShoppingCartItem $onClick={ () => removeFunction(0) }/>
            <ShoppingCartItem $onClick={ () => removeFunction(0) }/>
            <ShoppingCartItem $onClick={ () => removeFunction(0) }/>
            <ShoppingCartItem $onClick={ () => removeFunction(0) }/> */}
            <div style={{marginRight: '10%'}}/>
        </Wrapper>
    );
}