// import logo from './logo.svg';
import './App.css';
import Head from './Components/Head';
// import Carts from './Components/Carts';
import Products from './Components/Products';
 import React ,{createContext ,useState}from 'react';

 export  const CartContent = createContext({})
function App() {
  const [cart, setCart] = useState([])
  return (
    <>
    <CartContent.Provider value={{cart, setCart}} >

    <Head/>
    {/* <Carts/> */}
    <Products/>
    </CartContent.Provider>
    </>
     );
    }
    
    export default App;
    