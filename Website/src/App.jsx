//import './App.css'
import Home from "./Pages/Home";
//import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import Info from "./Pages/info";
import Contact from "./Pages/contact";
import Products from "./Pages/products";
import ShoppingCartPage from "./Pages/shopping_cart";
import ProductPage from "./Pages/product";
import PaymentPage from "./Pages/payment";
import CustomerService from "./Pages/CustomerService";
import Delivery from "./Pages/Delivery";
import Returns from "./Pages/Returns";
import Terms from "./Pages/Terms";
import Confirmation from "./Pages/confirmation";

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
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/customer-service' element={<CustomerService/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/returns' element={<Returns/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
        </Routes>
        </div>
    );
    


}



export default App
