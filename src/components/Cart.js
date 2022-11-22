import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Items from './Items';

const Cart = ({cart, setCart}) => {
  const cartState = useSelector((state)=> state.cartState);
  const cartedList = useSelector((state)=> state.cartList);
  
  return (
    <div className={`${cartState?'fixed':'static'} h-full bg-red-500 ${cartState?'block':'hidden'} p-[1rem] bg-white right-0 top-[60px] z-10 w-[50%] bg-red`}>
        <h2 className='text-center text-[1.5rem] font-bold'>Carted</h2>
        <div className='overflow-auto h-[80%]'>
          {
            cartedList?.map((item, i)=>{
              return(
                <Items key={i} name={item.name} category={item.category} amount={item.amount} image={item.image} count={item.count} id={i} active={item.active}/>
              )
            })
          }
        </div>
        <div className='flex m-[.5rem] items-center gap-[1rem] p-[.5rem] justify-between'>
          <h2 className='font-semibold text-[1.2rem] w-[30%]'>Total</h2>
          <p>{cartedList.reduce((a, v)=>a = a+v.amount, 0)}</p>
        </div>
    </div>
  )
}

export default Cart