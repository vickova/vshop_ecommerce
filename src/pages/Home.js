import React from 'react';
import Hero from '../components/Hero';
import HomeProducts from '../components/HomeProducts';
import styled from 'styled-components';
import Smile from '../components/Smile';

const Home = ({active, setActive}) => {
  return (
    <HomeStyle>
        <Hero/>
        <HomeProducts/>
        <Smile/>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
    @media screen and (max-width:680px){
      margin-top:0;
    }
`
export default Home