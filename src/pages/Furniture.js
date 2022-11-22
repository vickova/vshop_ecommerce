import React from 'react';
import ProductCard from '../components/ProductCard';
import { home } from '../utils';

const Furniture = () => {
  return (
    <div className='grid grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] mt-[11rem]'>
        {
            home.map((items, i)=>{
              if(items.category === 'furniture'){
                return(
                <ProductCard key={i} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count}/>
                )
              }
            })
        }
    </div>
  )
}

export default Furniture