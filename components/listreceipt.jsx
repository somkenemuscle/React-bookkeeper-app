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
            <td>{props.date}</td>
            <td>{props.shop}</td>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>${props.price}</td>
            <td>{props.category}</td>
            <td > 
             <Link href='/receipts/edit'>
                <span onClick={handleEdit} className="material-symbols-outlined edit">edit_note</span>
            </Link>
            </td>
            <td className='delete'>
                <span onClick={handleDelete} className="material-symbols-outlined">delete</span>
            </td>

        </tr>




    )
}

export default listreceipts
