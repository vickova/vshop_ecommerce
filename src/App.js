import { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import GlobalStyle from './components/GlobalStyle';
import Cart from './components/Cart';
import Electronics from './pages/Electronics';
import Cosmetics from './pages/Cosmetics';
import Furniture from './pages/Furniture';
import Cloth from './pages/Cloth';
import Books from './pages/Books';
import { Route, Routes } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/furnitures' element={<Furniture/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/cloths' element={<Cloth/>}/>
        <Route path='/cosmetics' element={<Cosmetics/>}/>
      </Routes>
      <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
