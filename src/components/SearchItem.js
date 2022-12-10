import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const SearchItem = ({products}) => {
    console.log(products)
  return (
    <SearchedStyle className='xl:grid xl:grid-cols-3 p-2 my-[5rem] mx-[3rem] gap-[4rem] lg:grid-cols-2 mx:block'>
        {
    products.map((items)=>{
        return(
            <ProductCard key={items.id} name={items.name} description={items.description} 
            category={items.category} image={items.image} amount={items.amount} count={items.count} items={items} id={items.id}active={items.active}/>
        )
    })
    }
    </SearchedStyle>
  )
}

const SearchedStyle = styled.div`
    margin-top:10rem;
    @media screen and (max-width:680px){
      margin: 5rem 1rem 0 1rem;
    }
`
export default SearchItem