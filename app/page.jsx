import Styles from '../styles/page.css';
import Link from 'next/link';
import Image from 'next/image';
import creditCardImage from '../styles/credit-card.png';

const Home = () => {
  return (
    <main>
      <h1 className='header'>Get Started With Bookie</h1>
      <h3 className='header2 dark-purple-text'>Your app for saving receipts and keeping track of daily spendings.</h3>
      <div className="animation-container">
        <div className="credit-card-animation">
          <Image src={creditCardImage} alt="Credit Card" width={200} height={130} />
        </div>
      </div>
    </main>
  );
}

export default Home;
