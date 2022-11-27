import React from 'react';
import { home } from '../utils';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const HomeProducts = ({active, setActive}) => {
  return (
    <ProductStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2' id='products'>
        {
            home.map((items, i)=>{
              if(items.home){
                return(
                <ProductCard key={i} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count} active={active} setActive={setActive} items={items} id={i}/>
                )
              }
            })
        }
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
    
`
export default HomeProducts