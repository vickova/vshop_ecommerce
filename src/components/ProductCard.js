import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { cartedList, cartedCount, cartActive } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';



const ProductCard = ({category, name, description, image, amount, count, items, active, setActive, id}) => {
  const dispatch = useDispatch();
  // console.log(carted)

  const CartClick = ()=>{
    dispatch(cartedCount())
    dispatch(cartedList({name:name, category:category, image:image, amount:amount, count:count, active:!active, items}));
    dispatch(cartActive(id))
    console.log(items)
    return{...items, active:!active}
  }
  return (
    <CardStyle className='bg-[#FFF] shadow-md p-[1rem] flex flex-col justify-between gap-[1rem]'>
        <h2 className='text-[1.5rem] font-semibold'>{category}</h2>
        <div className='flex justify-center'>
          <img src={image} alt={name} />
        </div>
        <p className='text-[1.2rem] font-medium text-[gray]'>{description}</p>
        <button className={`w-[100%] ${active?'bg-[#d19099]':'bg-[#67111c]'} text-[#FFF] p-[1rem] hover:bg-[#a5535e]`} onClick={CartClick} disabled={active}>{active?'Added to Cart':'Add to Cart'}</button>
    </CardStyle>
  )
}

const CardStyle = styled.div`
    
`
export default ProductCard