import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { cartedList, cartedCount, homeFresh } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Items from './Items';



const ProductCard = ({category, name, description, image, amount, count, items, id, active}) => {
  const dispatch = useDispatch();
  const activeState = useSelector((state)=>state.active)
  // console.log(carted)
  const CartClick = ()=>{
    console.log('Yes')
    console.log(items)
    console.log({name:name, category:category, image:image, amount:amount, count:count, active:active})
    dispatch(cartedList(items));
    dispatch(homeFresh(items))
    dispatch(cartedCount())
  }

  return (
    <CardStyle className='bg-[#FFF] shadow-md p-[1rem] flex flex-col justify-between gap-[1rem]'>
      <div className='flex justify-between' >
        <h2 className='text-[1.5rem] font-semibold'>{category}</h2>
        <p className='bg-[#f4cbd3] px-[.8rem] py-[.5rem] rounded-[5px] text-[black] font-bold'>${amount}</p>
        </div>
        <div className='flex justify-center'>
          <img src={image} alt={name} />
        </div>
        <p className='text-[1.2rem] font-medium text-[gray]'>{description}</p>
        <button className={`w-[100%] ${active?'bg-[#d19099]':'bg-[#67111c]'} text-[#FFF] p-[1rem] hover:bg-[#a5535e]`} onClick={CartClick} disabled={active}>{active?'Added to Cart':'Add to Cart'}</button>
    </CardStyle>
  )
}

const CardStyle = styled.div`
    @media screen and (max-width:680px){
      margin: .8rem 0;
    }
`
export default ProductCard