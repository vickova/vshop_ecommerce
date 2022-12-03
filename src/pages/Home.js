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
    margin-top:10rem;
`
export default Home