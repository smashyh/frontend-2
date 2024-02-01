//import './App.css'
import Home from "./Pages/Home";
//import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import Info from "./Pages/info";
import Contact from "./Pages/contact";
import Products from "./Pages/products";


function App() 
{
    return(
        <div>
            
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        </Routes>
        </div>
    );
    


}



export default App
