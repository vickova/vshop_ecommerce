import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Furniture = () => {
  const products = useSelector((state)=> state.home)
  return (
    <FurnitureStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2 mx:block'>
        {
            products.map((items, i)=>{
              if(items.category === 'furniture'){
                return(
                <ProductCard key={items.id} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count} items={items} id={items.id} active={items.active}/>
                )
              }
            })
        }
    </FurnitureStyle>
  )
}

const FurnitureStyle = styled.div`
@media screen and (max-width:680px){
      margin: 0 1rem;
      margin-top:0;
    }
`
export default Furniture