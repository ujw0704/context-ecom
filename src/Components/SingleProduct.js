 import React ,{useContext} from 'react'
 import { CartContent } from '../App'

 

 function SingleProduct() {

    const {singleproduct ,cart,setCart } = useContext(CartContent)
    // const [cart, setCart] = useContext(CartContent)


    function handleClick(e,singleProduct){
        e.preventDefault()
          setCart([...cart,singleproduct])
    
        console.log("hello")
    }
  
   return (
     <div><div className="product">
     <div className='img'> 

    <img src ={singleproduct.image} alt=''/> 
     </div>
     <h1>{ singleproduct.title }</h1>
     <p>${singleproduct.price}.0</p>
       <a href='#!' onClick={e=>{handleClick(e,singleproduct)}}>add to cart</a>  
 </div>
     </div>
   )
 }
 
 export default SingleProduct
 