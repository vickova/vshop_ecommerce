import React from 'react';
import Github from '../images/github.svg';
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import LinkedIn from '../images/linkedin.svg';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
        <div className='section bord top'>
            <h2><span>V</span>-shop</h2>
            <p>The home of quality products. Secured payment facility, 
                fast delivery and many more. I can't regret ordering from us</p>
            <div className='imgs'>
            <a href="https://github.com/vickova"><img src={Github} alt="Github_icon"/></a>
            <a href="https://www.facebook.com/olumide.victoria.56"><img src={Facebook} alt="facebook_icon"/></a>
            <a href="https://twitter.com/OlumideVictori3"><img src={Twitter} alt="twitter_icon"/></a>
            <a href="https://www.linkedin.com/in/victoria-olumide-90439b163/"><img src={LinkedIn} alt="Linkedin_icon"/></a>
            </div>
            </div>
        <div className='section bord'>
            <h3>Contact</h3>   
            <p>+2348020585796</p>
            <p>No 9, Osiomole Street, Ojodu, Bergar, Lagos</p>
        </div>
        <div className='section'>
            <h3>Subscrbe to our email <span>For latest news and update</span></h3>
            <form>
                <input type="text" />
                <button>Subscribe</button>
            </form>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    background-color:#f4cbd3;
    display:flex;
    justify-content:space-between;
    padding:2rem;
    margin-top:5rem;
    h2{
        font-size:2rem;
        span{
            color:#f56f94;
            margin:.8rem 0;
        }
    }
    h3{
        margin:1.5rem 0;
        font-size:1.5rem;
    }
    .section{
        padding:1rem;
        width:33%;
        .imgs{
            margin: 1rem 0;
            display:flex;
            gap:1rem;
            align-items:center;
        }
        p{
            margin:.8rem 0;
            font-size:1.2rem;
        }
    }
    .bord{
        border-right: 2px solid #67111c;
    }
    .top{
        p{
            margin-top:3rem;
        }
    }
    h3{
        span{
            display:block;
            font-size:2.5rem;
        }
    }
    form{
        position:relative;
        input{
            width:100%;
            height: 55px;
            border-radius:30px;
            border:none;
        }
        button{
            position:absolute;
            background-color:#67111c;
            top:7px;
            right:7px;
            height:75%;
            border:none;
            border-radius:30px;
            padding: 0 3rem;
            font-size:1.2rem;
            display:block;
            color:#f0f0f0;
            cursor:pointer;
        }
        button:hover{
        background-color:#971425;
        color:#dbe0e0;
        font-weight:500;
        }
    }
`
export default Footer