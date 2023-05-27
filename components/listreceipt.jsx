import Styles from '../styles/page.css'
import Link from 'next/link'

const listreceipts = (props) => {
    return (
        <section className='r-list-items'>
            <h4 className='r-items r-name'>{props.name}</h4>
            <h4 className='r-items r-name'>{props.price}</h4>
            <h4 className='r-items r-name'>{props.qty}</h4>
            <h4 className='r-items r-name'>{props.date}</h4>

            <Link href='#'>
            <button className='r-btn'>see more</button>
            </Link>
        </section>
        
    )
}

export default listreceipts
