//import './App.css'
import Home from "./Pages/Home";
//import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import Info from "./Pages/info";
import Contact from "./Pages/contact";
import Products from "./Pages/products";
import ShoppingCartPage from "./Pages/shopping_cart";
import ProductPage from "./Pages/product";

function App() 
{
    return(
        <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products/:category' element={<Products/>}/>
        <Route path='/product/:productID' element={<ProductPage/>}/>
        <Route path='/shopping_cart' element={<ShoppingCartPage/>}/>
        </Routes>
        </div>
    );
    


}



export default App
