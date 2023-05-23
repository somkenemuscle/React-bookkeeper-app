import Styles from '../styles/page.css'
import Link from 'next/link'

const listreceipts = (props) => {
    return (
        <section className='r-list-items'>
            <h4 className='r-items r-name'>{props.name}</h4>
            <p className='r-items r-descrip'>The purchase receipt for the {props.name}</p>
            <Link href='#'>
            <button className='r-btn'>see more</button>
            </Link>
        </section>
        
    )
}

export default listreceipts