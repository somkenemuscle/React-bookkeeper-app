import Styles from '../styles/page.css'
import Link from 'next/link'

const listreceipts = (props) => {
function handleDelete() {
    props.onDelete(props.id);
}
function handleEdit() {
    props.onEdit(props.id)
}

    return (
        <section className='r-list-items'>
            <h4 className='r-items r-name'>{props.name}</h4>
            <h2 className='r-items r-name'>${props.price}</h2>
            <h3 className='r-items r-name'>{props.quantity}</h3>
            <h4 className='r-items r-name'>{props.date}</h4>
            <h4 className='r-items r-name'>{props.category}</h4>
            <button onClick={handleEdit} className='r-btn'>Edit</button>
            <button onClick={handleDelete} className='r-btn'>Delete</button>            
        </section>
        
    )
}

export default listreceipts
