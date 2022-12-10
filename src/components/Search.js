import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Search = ({search, setSearch, setProducts, products}) => {
  const home = useSelector((state)=> state.home);
  const handleSearch =()=>{
    if(search){
      const searchedExercises = home.filter((item) =>item.name.toLowerCase().includes(search)
        || item.category.toLowerCase().includes(search)
        || item.description.toLowerCase().includes(search)
      )
      setSearch('');
    setProducts(searchedExercises);
    
    }}
  return (
    <SearchStyle className='flex justify-between mx-[3rem]'>
        <input type="text"className='border-[2px] border-[gray] w-[75%] font-[1rem]' value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}} />
        <Link to={search?'/search':''} onClick={window.scrollTo({top: 0, behavior: 'smooth'})}>
        <button onClick={handleSearch} className='bg-[#67111c] py-[.5rem] px-[1rem] text-[#fff] font-[1rem]'>Search</button>
        </Link>
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
margin-top:10rem;
    @media screen and (max-width:680px){
        margin:5rem 1rem 2rem 1rem;
    }
`
export default Search