import React from 'react';
import styled from 'styled-components';
import Headphone from '../images/headphone.png';

const Hero = () => {
  return (
    <div className='bg-[#f4cbd3] rounded-lg py-[2rem] px-[4rem] my-[1rem] mx-[3rem]'>
        <div className='cover flex justify-between'>
            <div className='flex flex-col justify-center'>
            <h2 className='text-[5rem]'>
                <span className='first block text-[2rem]'>Beats solo</span>
                <span className='sec block text-[4rem]'>Wireless</span>
                <span className='third block'>HEADPHONE</span>
            </h2>
            <a href="#products">
                <button className='bg-[#f4cb3e] w-[50%] py-[1.5rem] px-[3rem] py-[1.2rem] rounded-[40px] font-bold cursor-pointer hover:bg-[#67111c] hover:text-[#fff] my-[2rem]'>Shop Now</button>
            </a>
            </div>
            <div className='w-[45%] bg-[#f4cb3e] rounded-lg'>
                <img src={Headphone} alt="headphone" className='w-[100%]'/>
            </div>
        </div>
    </div>
  )
}

const HeroStyle = styled.div`
    margin:1rem 5rem;
    background-color:#f4cbd3;
    height:65vh;
    border-radius:10px;
    padding:2rem 4rem;
    display:flex;
    align-items:center;
    .cover{
        position:relative;
    }
    h2{
        span{
            display:block;
        }
        .first{
            font-size:2rem;
        }
        .sec{
            font-size:4rem;
        }
        .third{
            font-size:13rem;
            max-width:100%;
            color:gray;
        }
    }
    img{
        position:absolute;
        right:100px;
        top:0;
        height:650px;
        width:650px;
    }
    button{
        background-color:#f4cb3e;
        padding:1.5rem 3rem;
        font-size:1.2rem;
        border:none;
        border-radius:40px;
        font-weight:500;
        cursor:pointer;
    }
    button:hover{
        background-color:#67111c;
        color:#f4f5f5;
    }
`
export default Hero