 
import './App.css';
import Head from './Components/Head'; 
import Products from './Components/Products';
 import React ,{createContext ,useState}from 'react';
 import Productcart from './Components/Productcart';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './Components/Home'
 

 export  const CartContent = createContext({})

function App() {
  const [cart, setCart] = useState([])
  return (
    <>
    <CartContent.Provider value={{cart, setCart}} >
    <BrowserRouter>
    <Head/> 
     <Routes>
   <Route path='/'element={<Home />}></Route>
     {/* <Route path ='/product' element={<Products />}></Route>  */}
      <Route path ='/productcart' element={<Productcart  />}></Route>
     </Routes>
    </BrowserRouter>
    </CartContent.Provider>
    </>
     );
    }
    
    export default App;
    