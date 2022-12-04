import React from 'react';
import styled from 'styled-components';
import Headphone from '../images/headphone.png';

const Hero = () => {
  return (
    <HeroStyle className='bg-[#f4cbd3] rounded-lg py-[2rem] px-[4rem] my-[1rem] mx-[3rem]'>
        <div className='cover xl:flex justify-between'>
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
            <div className='w-[45%] bg-[#f4cb3e] rounded-lg image'>
                <img src={Headphone} alt="headphone" className='w-[100%]'/>
            </div>
        </div>
    </HeroStyle>
  )
}

const HeroStyle = styled.div`
    
    @media screen and (max-width:680px){
        padding:1rem;
        margin:1rem;
        h2{
            .first{
                font-size:1.5rem;
            }
            .sec{
                font-size:2rem;
            }
            .third{
                font-size:2.3rem;
            }
        }
            h3{
                margin:0;
            }
            h2{
            font-size:3rem;
            width:100%;
            line-height:4rem;
            margin:1rem 0;
            }
            button{
                padding:.4rem 4rem;
                font-size:1rem;
                font-weight:400;
                width:80%;
            }
            .image{
                width:100%;
            }
    }
`
export default Hero