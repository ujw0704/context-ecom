 
import './App.css';
import Head from './Components/Head';  
 import React ,{createContext ,useState}from 'react';
 import Productcart from './Components/Productcart';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Components/Home'
import SingleProduct from './Components/SingleProduct';
 

 export  const CartContent = createContext({})

function App() {
  const [cart, setCart] = useState([])
   const [singleproduct,setSingleProduct] =useState([])
  return (
    <>
    <CartContent.Provider value={{cart, setCart, singleproduct,setSingleProduct}}  >
    <BrowserRouter>
    <Head/> 
     <Routes>
   <Route path='/'element={<Home />}></Route>
     {/* <Route path ='/product' element={<Products />}></Route>  */}
      <Route path ='/productcart' element={<Productcart  />}></Route>
         <Route path='/singleproduct' element={<SingleProduct/>}></Route> 
     </Routes>
    </BrowserRouter>
    </CartContent.Provider>
    </>
     );
    }
    
    export default App;
    