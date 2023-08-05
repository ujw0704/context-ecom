import React, { useEffect ,useState, useContext} from 'react'
import { CartContent } from '../App'
 import axios from "axios"
 import "./Products.css" 
 import { useNavigate } from 'react-router-dom'

 

function Products() {

  const navigate= useNavigate()
   const[products,setProducts] = useState([])
   const {cart, setCart, singleproduct,setSingleProduct} = useContext(CartContent) 



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

     function handlesubmit(e,product) {
      e.preventDefault()
      setSingleProduct(product)
      navigate('/singleproduct')
console.log("hello")
      
     }

     console.log(singleproduct)
  return (
    <div className='container'>
        {
            

            products.map((product, index)=>{
                return <div className="product"key={index}>
                    <div className='img'> 
                   <img  onClick={e=>{handlesubmit(e,product)}} src ={product.image} alt=''/> 
                    </div>
                    <h1>{ product.title }</h1>
                    <p>${product.price}.0</p>
                     <a href='#!' onClick={e=>{handleClick(e,product)}}>add to cart</a> 
                      {/* <a href='#!' onDoubleClick={ e=>{handlesubmit(e.product)}}>singleProduct</a>  */}
                </div>
                
            })
        }
    </div>
  
  )
}

export default Products
