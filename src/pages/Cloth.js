import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Cloth = () => {
  const products = useSelector((state)=> state.home)
  return (
    <ClothStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2 mx:block'>
        {
            products.map((items, i)=>{
              if(items.category === 'Cloth'){
                return(
                <ProductCard key={items.id} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count} items={items} id={items.id}active={items.active}/>
                )
                }
            })
        }
    </ClothStyle>
  )
}

const ClothStyle = styled.div`
margin-top:10rem;
@media screen and (max-width:680px){
      margin: 0 1rem;
      margin-top:5rem;
    }
`
export default Cloth