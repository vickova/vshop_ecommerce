import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <SearchStyle className='flex justify-between mx-[3rem]'>
        <input type="text"className='border-[2px] border-[gray] w-[75%] font-[1rem]' />
        <button className='bg-[#67111c] py-[.5rem] px-[1rem] text-[#fff] font-[1rem]'>Search</button>
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