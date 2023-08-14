import React,{createContext,useState} from 'react'
import Head from './Header'
import Product from './Product'
 import Heades from "./Head.css"

export  const CartContent = createContext()
function Main() {
    const[productss ,setProducts] =useState([])
    const [cart, setCart]= useState([])
    const [cost, setCost] = useState(0)


  return (
    <div>
        <CartContent.Provider value={{cart, setCart, productss,setProducts, cost, setCost }}  >

      <Head/>
      <Product/>
        </CartContent.Provider>
    </div>
  )
}

export default Main
