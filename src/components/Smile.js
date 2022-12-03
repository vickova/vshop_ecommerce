import React from 'react'
import HeadPhone from '../images/headwhite.png'
import styled from 'styled-components'

const Smile = () => {
  return (
    <SmileStyle className='xl:flex block '>
        <div className='smile'>
            <p>20% OFF</p>
            <h2>FINE SMILE</h2>
            <p>15TH NOVEMBER TO 7TH DEC</p>
            <img src={HeadPhone} alt="headphone" />
        </div>
        <div className='solo'>
            <h3>Beats Solo Air</h3>
            <h2>Summer Sales</h2>
            <p>Company that has grown from 270 to 480 employees in the last 12 months</p>
            <button>Shop</button>
        </div>
    </SmileStyle>
  )
}

const SmileStyle = styled.div`
    margin:1rem 5rem;
    margin-top:10rem;
    background-color:#f0f0f0;
    /* height:55vh; */
    border-radius:10px;
    padding:2rem 4rem;
    /* display:flex; */
    justify-content:space-between;
    align-items:center;
    .smile{
        position:relative;
        width:50%;
        img{
            position:absolute;
            top:-150px;
            right:150px;
            height:350px;
            width:350px;
        }
        h2{
            font-size:8rem;
            width:45%;
            line-height:8rem;
        }
        p{
            font-size:1.2rem;
        }
    }
    .solo{
        h3{
            font-size:2rem;
            margin: 1rem 0;
        }
        h2{
            font-size:3rem;
        }
        p{
            font-size:1.2rem;
            margin:1rem 0;
        }
        button{
        background-color:#67111c;
        padding:1.5rem 5rem;
        font-size:1.2rem;
        border:none;
        border-radius:40px;
        font-weight:700;
        color:#f4f5f5;
        cursor:pointer;
        margin:2rem 0;
    }
    button:hover{
        background-color:#971425;
        color:#dbe0e0;
        font-weight:500;
    }
    }
    @media screen and (max-width:680px){
        margin:1rem;
        padding:1.5rem;
        .smile{
            img{
                left:150px;
                top:-80px;
                height:200px;
                width:250px;
            }
        h2{
            font-size:3rem;
            width:100%;
            line-height:3rem;
            margin:1rem 0;
        }
        }
        .solo{
            h3{
                margin:0;
            }
            h2{
            font-size:3rem;
            width:100%;
            line-height:3rem;
            margin:1rem 0;
        }
        button{
            padding:1rem 4rem;
            font-size:1rem;
            font-weight:400;
        }
        }
    }
`
export default Smile