import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartedList, deleted, cartedDecrease } from '../redux/actions';


const Items = ({name, category, amount, image, count, active}) => {
    const [counter, setCounter] = useState(count);
    const cartedAway = useSelector((state)=> state.cartList);
    const dispatch = useDispatch();
    const Increase = ()=>{
        setCounter(counter + 1);
        cartedAway.filter((item)=> {
            if(item.name === name){
                console.log(item.count)
                item.count = item.count + 1;
                return(item.count)
            }
        })
    }
    const Decrease = ()=>{
        if(count >= 2){
            setCounter(counter - 1)
        }
    }
    const DeleteButtonHandler = (e)=>{
        const value = e.target.value;
        console.log(value)
        dispatch(deleted(value));
        dispatch(cartedDecrease())
    }
    return(
    <div className='flex m-[.5rem] bg-[#f2f2f2] items-center gap-[1rem] p-[.5rem] justify-between'>
        <h2 className='font-semibold text-[1.2rem] w-[30%]'>{name}</h2>
        <p className='w-[30%] text-[1.2rem]'>{category}</p>
        <p className='w-[30%] text-[1.5rem]'><span className='cursor-pointer' onClick={Decrease}>-</span><span className='font-semibold mx-[1rem] border-[1px] border-[solid] p-[.5rem]'>{counter}</span><span className='cursor-pointer' onClick={Increase}>+</span></p>
        <img src={image} alt="" className='h-[80px] w-[80px]'/>
        <p className='w-[30%] text-[1.2rem] text-center'>${amount*counter}</p>
        <button className='border-[5px] border-red-500 p-[.5rem] hover:bg-red-500 hover:text-[#fff]' onClick={DeleteButtonHandler} value={name}>delete</button>
    </div>
    )
}

export default Items