 import Styles from '../styles/page.css'
 import Link from 'next/link'

 const navbar = () => {
    return (
        <nav className="topnav">
           <section className='sec'>
           <Link className='active' href='/'>BOOKIE 🧾</Link>
           <Link className='items' href='/receipts/new'>Add-Receipt</Link>
           <Link className='items' href='/receipts'>Receipts</Link>
           </section>
        </nav>
    )
}

export default navbar