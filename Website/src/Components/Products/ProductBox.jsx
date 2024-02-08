import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductBoxStyle = styled.div`
width: 256px;
background-color: white;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
border-radius: 0.375rem;
overflow: hidden;
`;

const ProductImg = styled.img`
width: 100%;
height: 100%;
min-height: 300px;
max-height: 300px;
object-fit: cover;
object-position: center;
`;

const ProductContent = styled.div`
padding: 1.5rem;
`;

const ProductTitle = styled.h3`
font-family: system-ui, Helvetica;
font-size: 1.25rem;
color: black;
margin-bottom: 0.5rem;
margin-left: 0.2rem;
`;

const ProductDescription = styled.p`
font-family: system-ui, Helvetica;
font-size: 1rem;
color: black;
margin-bottom: 1rem;
margin-left: 0.2rem;
`;

const ProductPrice = styled.p`
font-family: system-ui, Helvetica;
font-size: 1.10rem;
color: black;
margin-left: 0.2rem;
`;

/**
*   Properties:
*   $image, $name, $description, $price, $productId
*/
export default function ProductBox(props)
{
    return(
        <Link to={ "/product/" + props.$productId }>
        <ProductBoxStyle>
            <ProductImg src={ props.$image }/>
            <ProductTitle>{ props.$name }</ProductTitle>
            <ProductDescription>{ props.$description }</ProductDescription>
            <ProductPrice>{ props.$price }kr</ProductPrice>
        </ProductBoxStyle>
        </Link>
    );
}

// function ProductsBox()
// {
//     const [products, setProducts] = useState([]);

//     useEffect(() => 
//     {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => 
//     {
//         try 
//         {
//             const response = await fetch('http://localhost:1337/product', 
//             {
//                 headers: 
//                 {
//                     Authorization: 'Bearer b78558952db60ea2807bcd0662a595d994337755322db3215755b75b30bf7c89d54042e445176bc2a8e2a95239a2c8a13391e604b5c6c6bbb6669a340f6c362d0e3ac7eefdd37ffb45175218cc0faa64238156ae499218b236cca632fa0e1e261535f6064e1d230ae1db0b6b2518ba7e71775c3e4623531864f9539d2092dde8'
//                 }
//             });

//             const data = await response.json();
//             setProducts(data);
//         } 
//         catch (error)
//         {
//             console.error('Error Getting Products', error);
//         }
//     };
// }