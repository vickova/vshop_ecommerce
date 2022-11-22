import React from 'react';
import Hero from '../components/Hero';
import HomeProducts from '../components/HomeProducts';
import styled from 'styled-components';
import Smile from '../components/Smile';
import { act } from 'react-dom/test-utils';

const Home = ({active, setActive}) => {
  return (
    <HomeStyle>
        <Hero/>
        <HomeProducts active={active} setActive={setActive}/>
        <Smile/>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
    margin-top:10rem;
`
export default Home