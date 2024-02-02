import styled from "styled-components";

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
`;

const ProductDescription = styled.p`
font-family: system-ui, Helvetica;
font-size: 1rem;
color: black;
margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
font-family: system-ui, Helvetica;
font-size: 1.10rem;
color: black;
`;

/**
*   Properties:
*   $image, $name, $description, $price, $id
*/
export default function ProductBox(props)
{
    return(
        <ProductBoxStyle>
            <ProductImg src={ props.$image }/>
            <ProductTitle>{ props.$name }</ProductTitle>
            <ProductDescription>{ props.$description }</ProductDescription>
            <ProductPrice>{ props.$price }kr</ProductPrice>
        </ProductBoxStyle>
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
//                     Authorization: 'Bearer 6fa7193cc0084d157f6f4af7c991fee4719ebb65adaf31f5744a6ab40e37b374da03ef9575b82de206be55e3f2c1c6e70a396dd3c27966906bdf5f13cc79999873128b73174e632eadeb06f6179f84cf1f7933965ed2512609644ce1c171440161c5c6100001aa6b26b084937f1a27c5afc61cd19e6309f3d4b629eaa4f4da5d'
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