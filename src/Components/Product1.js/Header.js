import React ,{useContext}from 'react'
import Product from './Product';
import { CartContent } from './Main';


function Header() {
  const { cart ,cost} = useContext(CartContent);

 
  

  return (
    <div>
      <h1>{cart.length}</h1>
      <h1>totalCost:{cost}</h1>
     

 </div>
  );
} 

export default Header;
