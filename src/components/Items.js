import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleted, cartedDecrease, countDecrease, countIncrease } from '../redux/actions';


const Items = ({name, amount, image, item}) => {
    const dispatch = useDispatch();
    const Increase = ()=>{
        dispatch(countIncrease(item))
    }
    const Decrease = ()=>{
        dispatch(countDecrease(item))
    }
    const DeleteButtonHandler = (e)=>{
        const value = e.target.value;
        dispatch(deleted(value));
        dispatch(cartedDecrease())
    }
    return(
    <ItemStyle className=''>
        <td>
        <h2 className='font-semibold text-[1.2rem]'>{name}</h2>
        </td>
        <td>
        <p className='text-[1.5rem]'><span className='cursor-pointer' onClick={Decrease}>-</span><span className='font-semibold mx-[1rem] border-[1px] border-[solid] p-[.5rem]'>{item.count}</span><span className='cursor-pointer' onClick={Increase}>+</span></p>
        </td>
        <td>
        <img src={image} alt="" className='h-[80px] w-[80px]'/>
        </td>
        <td>
        <p className='text-[1.2rem] text-center'>${(amount*item.count).toFixed(2)}</p>
        </td>
        <td>
        <button className='border-[5px] border-red-500 p-[.5rem] hover:bg-red-500 hover:text-[#fff]' onClick={DeleteButtonHandler} value={name}>delete</button>
        </td>

    </ItemStyle>
    )
}

const ItemStyle = styled.tr`
    border-top:1px solid grey;
    td{
        padding:1rem .5rem;
    }
 @media screen and (max-width:680px){
    margin:.5rem 0;
img{
    width:20px;
    height:20px;
}

    h2{
        font-size:1rem;
    }
    p{
        font-size:.8rem;
    }
    button{
        font-size:.8rem;
        padding:0;
    }
}
`
export default Items