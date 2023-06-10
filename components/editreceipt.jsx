"use client"
import Styles from '../styles/page.css'
import { useState, useContext, createContext } from 'react';
import { AppContext } from "@/context/data";
import { EditReceiptContext } from "@/context/edit";
import { DisplayReceiptContext } from '@/context/display';
import { useRouter } from 'next/navigation';

const EditReceipt = () => {
    const router = useRouter();
    const [editReceipt, setEditReceipt] = useContext(EditReceiptContext)
    const [DisplayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext)
    const [receipts, setReceipts] = useContext(AppContext);

    const [edit, setEdit] = useState(
        {
            id: editReceipt.id,
            name: editReceipt.name,
            quantity: editReceipt.quantity,
            date: editReceipt.date,
            price: editReceipt.price,
            category: editReceipt.category,
            shop:editReceipt.shop
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
        const elementsIndex = receipts.findIndex(element => element.id == edit.id)
        let newDisplay = [...receipts]
        newDisplay[elementsIndex] = {
            ...edit
        }
        setReceipts(newDisplay)

        //for displaying receipt
        const displayelementsIndex = DisplayReceipts.findIndex(element => element.id == edit.id)
        let newelementDisplay = [...DisplayReceipts]
        newelementDisplay[displayelementsIndex] = {
            ...edit
        }
        setDisplayReceipts(newelementDisplay)
        function link() {
            router.push('/receipts')
        }
        link()
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
                    <label className='r-label'>Shop</label>
                    <input onChange={handleChange} name='shop' className='r-input' value={edit.shop} type='text' placeholder='Shop' required />
                </div>
                <div>
                    <label className='r-label'>Select Category</label>
                    <select onChange={handleChange} className='r-category' name="category" defaultValue={'Select'} required>
                        <option value="Select" disabled >Choose Category...</option>
                        <option value='Grocery' >Groceries</option>
                        <option value='Cosmetics'>Cosmetics</option>
                        <option value='Travel' >Travel</option>
                        <option value='Electronics'>Electronics</option>
                    </select>
                </div>
                <button className='r-btn'>Edit Receipt</button>

            </form>
        </div>
    )
}

export default EditReceipt