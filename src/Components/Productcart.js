import React, {useContext}from 'react'
import { CartContent } from '../App';
// import  {useParms} from 'react-router-dom'


function Productcart() {
 
    const {cart} = useContext(CartContent) 

  return (
    <div className='container'> 
        <h2>This is product cart page</h2>
    { 

    cart.map((cartadd,index)=>{
      return <div className='product'key={index}>
        <div className='img'>

        <img src ={cartadd.image} alt=''/>

        </div>
        <p>{cartadd.name}</p>
        <p>{cartadd.title}</p>
        <p>{cartadd.price}</p>
        </div>
    })
  }
  </div>
  )
}

export default Productcart
 
  
 