"use client"
import Styles from '../styles/page.css'
import { useState, useContext, createContext } from 'react';
import { EditReceiptContext } from "@/context/edit";
import { DisplayReceiptContext } from '@/context/display';

const EditReceipt = (props) => {
    const [editReceipt, setEditReceipt] = useContext(EditReceiptContext)
    const [DisplayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext)
    const [editValue, setEditValue] = useState([])
    const [edit, setEdit] = useState(
        {
            id: editReceipt.id,
            name: editReceipt.name,
            quantity: editReceipt.quantity,
            date: editReceipt.date,
            price: editReceipt.price,
            category: editReceipt.category
        }
    )

    function handleChange(e) {
        const { name, value } = e.target;
        setEdit((prevReceipt) => {
            return {
                ...prevReceipt,
                id: editReceipt.id,
                [name]: value
            };
        })
        setEditReceipt((prevReceipt) => {
            return {
                ...prevReceipt,
                id: editReceipt.id,
                [name]: value
            };
        })
    }

    function handleSubmit(e) {
        setEditValue(() => {
            return [edit]
        })
    let result = DisplayReceipts.filter((item)=>{
         return  item.id === edit.id
    })
        console.log(result)
        console.log(edit)
        e.preventDefault()
    }

    return (
        <div className="addform-container">
            <h3 className='r-head'>EDIT RECEIPT</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='r-label'>Item</label>
                    <input onChange={handleChange} name='name' className='r-input' value={edit.name} type='text' placeholder='Product Name' required />
                </div>
                <label className='r-label'>Quantity</label>
                <input onChange={handleChange} name='quantity' className='r-input' value={edit.quantity} type='number' placeholder='Quantity' min='1' required />
                <div>
                    <label className='r-label'>Date Of Purchase</label>
                    <input onChange={handleChange} name='date' className='r-input' value={edit.date} type="date" placeholder='Select Date' required />
                </div>
                <div>
                    <label className='r-label'>Price</label>
                    <input onChange={handleChange} name='price' className='r-input' value={edit.price} type='number' placeholder='$ Price' required />
                </div>
                <div>
                    <label className='r-label'>Select Category</label>
                    <select onChange={handleChange} className='r-category' name="category" defaultValue={'Select'} required>
                        <option value="Select" disabled >Choose Category...</option>
                        <option value='grocery' >Groceries</option>
                        <option value='cosmetics'>Cosmetics</option>
                        <option value='travel' >Travel</option>
                        <option value='electronics'>Electronics</option>
                    </select>
                </div>
                <button className='r-btn'>Edit Receipt</button>
            </form>
        </div>
    )
}

export default EditReceipt