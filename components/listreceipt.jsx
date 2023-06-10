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
        <tr>
            <td  data-label='Date' scope='row'>{props.date}</td>
            <td data-label='Item'>{props.name}</td>
            <td data-label='Quantity'>{props.quantity}</td>
            <td data-label='Price'>${props.price}</td>
            <td data-label='Category'>{props.category}</td>
            <td data-label='Edit' > 
             <Link href='/receipts/edit'>
                <span onClick={handleEdit} className="material-symbols-outlined edit">edit_note</span>
            </Link>
            </td>
            <td data-label='Delete' className='delete'>
                <span onClick={handleDelete} className="material-symbols-outlined">delete</span>
            </td>

        </tr>




    )
}

export default listreceipts
