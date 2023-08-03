import React ,{useContext} from 'react'
import { CartContent } from '../App';
import './Head.css'

function Head() {
    const {cart} = useContext(CartContent)
    
  return (
    <div  className='head'>
        <h2>Add to cart</h2>
      <h1 cart>{cart.length}</h1>
    </div>
  )
}

export default Head;
