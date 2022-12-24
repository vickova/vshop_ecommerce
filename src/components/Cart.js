import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';
import styled from 'styled-components';

const Cart = ({cartItem, setCartItem}) => {
  const cartState = useSelector((state)=> state.cartState);
  const cartedList = useSelector((state)=> state.cartList);
  var totalCartPrice = 0;
  var totalCartItem= 0;

  useEffect(()=>{
    setCartItem(()=> totalCartItem)
  })



  return (
    <CartStyle className={`${cartState?'fixed':'static'} h-full bg-red-500 ${cartState?'block':'hidden'} p-[1rem] bg-white right-0 top-[60px] z-10 w-[50%] bg-red`}>
        <h2 className='text-center text-[1.5rem] font-bold'>Carted</h2>
        <div className='overflow-auto h-[70%]'>
        {cartedList.length === 0?(<h2 className='font-bold text-[1.5rem] justify-center text-center'>Cart is Empty</h2>) :
          <table border='2'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Item</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            cartedList.map((item, i)=>{
              totalCartPrice += item.amount * item.count;
              totalCartItem += item.count;
              return(
                <Items key={i} item={item} name={item.name} category={item.category} amount={item.amount} image={item.image} count={item.count} id={i} active={item.active}/>
              )
            })
          }
          </tbody>
          </table>
        }
        </div>
        <div className='flex m-[.5rem] items-center gap-[1rem] p-[.5rem] justify-between'>
          <h2 className='font-semibold text-[1.2rem] w-[30%]'>Total</h2>
          <p className='font-bold'>${totalCartPrice.toFixed(2)}</p>
        </div>
    </CartStyle>
  )
}
const CartStyle = styled.div`
overflow:auto;
  @media screen and (max-width:680px){
    padding:0;
    width:100%;
  }
`
export default Cart