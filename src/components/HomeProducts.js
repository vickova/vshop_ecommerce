import React from 'react';
import { home } from '../utils';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HomeProducts = () => {
  const products = useSelector((state)=> state.home)
  return (
    <ProductStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2 mx:block md:w-[100%]' id='products'>
        {
            products.map((items, i)=>{
              if(items.home){
                return(
                <ProductCard key={items.id} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count} items={items} id={items.id} active={items.active}/>
                )
              }
            })
        }
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
    @media screen and (max-width:680px){
      margin: 0 1rem;
    }
`
export default HomeProducts