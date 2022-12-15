import React from 'react';
import styled from 'styled-components';
import Headphone1 from '../images/Slider/headphone 1.png';
import Headphone2 from '../images/Slider/headphone 2.png';
import Headphone3 from '../images/Slider/headphone 3.png';
import Headphone4 from '../images/Slider/headphone 4.png';
import Left from '../images/circled-right.png';
import Right from '../images/circled-left.png';
import { useState } from 'react';
import { titleAnim, photoAnim } from './Animation';
import { motion } from 'framer-motion';

const Hero = () => {
    const images = [Headphone3, Headphone1, Headphone4, Headphone3, Headphone2];
    const len = images.length - 1;
    const [current, setCurrent] = useState(0);
    const Increase = ()=>{
        if(current >=len){
            setCurrent(0)
        }
        else{
            setCurrent(current+1);
        }
    }
    const Decrease = ()=>{
        setCurrent(current - 1);
        if(current === 0){
            setCurrent(len)
        }
    }
  return (
    <HeroStyle className='bg-[#f4cbd3] rounded-lg py-[2rem] px-[4rem] my-[1rem] mx-[3rem]'>
        <div className='cover xl:flex justify-between'>
            <div className='flex flex-col justify-center'>
            <h2 className='text-[5rem]'>
                <motion.span className='first block text-[2rem]' variants={titleAnim} initial="hidden" animate="show">Beats solo</motion.span>
                <motion.span className='sec block text-[4rem]' variants={titleAnim} initial="hidden" animate="show">Wireless</motion.span>
                <motion.span className='third block' variants={titleAnim} initial="hidden" animate="show">HEADPHONE</motion.span>
            </h2>
            <motion.a href="#products" variants={titleAnim} initial="hidden" animate="show">
                <button className='bg-[#f4cb3e] w-[50%] py-[1.5rem] px-[3rem] py-[1.2rem] rounded-[40px] font-bold cursor-pointer hover:bg-[#67111c] hover:text-[#fff] my-[2rem]'>Shop Now</button>
            </motion.a>
            </div>
            <div className='flex relative w-[45%] img-cover justify-between items-center'>
                <img src={Right} alt="" className='arrow w-[50px] h-[50px] cursor-pointer absolute top-[50%] hover:h-[55px] hover:w-[55px]' onClick={Decrease}/>
                <div className='w-[100%] h-[500px] bg-[#f4cb3e] rounded-lg img-cover flex justify-center items-center'>
                    <motion.img src={images[current]} alt="headphone" className='cover w-[300px]' variants={photoAnim} initial="hidden" animate="show"/>
                </div>
                <img src={Left} alt="" className='arrow w-[50px] h-[50px] cursor-pointer absolute right-0 top-[50%] hover:h-[55px] hover:w-[55px]' onClick={Increase}/>
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
                padding:.4rem 1rem;
                font-size:1rem;
                font-weight:400;
                width:80%;
            }
            .image{
                width:100%;
            }
            .img-cover{
                display:block;
                width:100%;
                height:400px;
                .cover{
                }
                .arrow{
                    width:40px;
                    height:40px;
                    top:80%;
                }
            }
    }
`
export default Hero