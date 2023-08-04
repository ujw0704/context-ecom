import React ,{useContext} from 'react'
import { CartContent } from '../App';
import {Link} from 'react-router-dom'
import './Head.css'

function Head() {
    const {cart} = useContext(CartContent)
    
  return (
    <div  className='head'>
         <h2>Add to cart</h2> 
      <h1 cart>{cart.length}</h1>
      <ul>
       <li><Link to ='/'>Home</Link></li>
        {/* <li ><Link to='/Products'>Products</Link></li>  */}
       <li><Link to ='/Productcart'>Cart</Link></li>
      </ul>
    </div>


  )
}

export default Head;
