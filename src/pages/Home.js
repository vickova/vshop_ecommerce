import React from 'react';
import Hero from '../components/Hero';
import HomeProducts from '../components/HomeProducts';
import styled from 'styled-components';
import Smile from '../components/Smile';
import Search from '../components/Search';

const Home = ({search, setSearch, products, setProducts}) => {
  return (
    <HomeStyle>
      <Search search={search} setSearch={setSearch} products={products} setProducts={setProducts}/>
        <Hero/>
        <HomeProducts/>
        <Smile/>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
margin-top:5  rem;
@media screen and (max-width:680px){
    }
`
export default Home