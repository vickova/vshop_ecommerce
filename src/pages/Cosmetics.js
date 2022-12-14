import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Cosmetics = () => {
  const products = useSelector((state)=> state.home)
  return (
    <CosmeticStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2 mx:block'>
        {
            products.map((items, i)=>{
              if(items.category === 'Cosmetics'){
                return(
                <ProductCard key={items.id} name={items.name} description={items.description} 
                category={items.category} image={items.image}amount={items.amount} count={items.count} items={items} id={items.id} active={items.active}/>
                )
              }
            })
        }
    </CosmeticStyle>
  )
}
const CosmeticStyle = styled.div`
margin-top:10rem;
@media screen and (max-width:680px){
      margin: 5rem 1rem 0 1rem;
    }
`
export default Cosmetics