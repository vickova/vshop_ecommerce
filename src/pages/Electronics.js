import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Electronics = () => {
  const products = useSelector((state)=> state.home)
  return (
    <div className='grid grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] mt-[11rem]'>
        {
            products.map((items, i)=>{
              if(items.category === 'Electronics'){
                return(
                <ProductCard key={items.id} name={items.name} description={items.description} 
                category={items.category} image={items.image} amount={items.amount} count={items.count} items={items} id={items.id} active={items.active}/>
                )
              }
            })
        }
    </div>
  )
}

export default Electronics