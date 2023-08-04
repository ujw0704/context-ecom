import React, { useEffect ,useState, useContext} from 'react'
import { CartContent } from '../App'
 import axios from "axios"
 import "./Products.css"
//  import {Link} from 'react-router-dom'




function Products() {
   const[products,setProducts] = useState([])
   const {cart, setCart} = useContext(CartContent)
     useEffect(()=>{

         axios.get("https://fakestoreapi.com/products/")
         .then(response=>{
             console.log(response.data)
             setProducts(response.data)
             
            })
        },[])
         function handleClick(e ,product){
            e.preventDefault()
            setCart([...cart,product])


         }
    //   console.log(cart)
  return (
    <div className='container'>
        {
            

            products.map((product, index)=>{
                return <div className="product"key={index}>
                    <div className='img'> 
                    <img  src ={product.image} alt=''/>
                    </div>
                    <h1>{ product.title }</h1>
                    <p>${product.price}.0</p>
                     <a href='#!' onClick={e=>{handleClick(e,product)}}>add to cart</a> 
                </div>
                
            })
        }
    </div>
  
  )
}

export default Products
