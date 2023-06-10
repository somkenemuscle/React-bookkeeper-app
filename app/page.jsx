import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import creditCardImage from '../styles/credit-card.png';
import Styles from '../styles/page.css';

const Home = () => {
  return (
      <main>
        <div className='content-container'>
          <div className='text-container'>
            <h1 className='header glowing-text'>Get Started With Bookie</h1>
            <h3 className='header2'>Your app for saving receipts and keeping track of daily spendings.</h3>
          </div>
         
  
<Image src={creditCardImage} alt="Credit Card" width={200} height={130} />
             
         
          </div>
      </main>
      
  )
   
};

export default Home;
