"use client"
import { useState } from 'react'
import Styles from '../styles/page.css'

const newReceipt = (props) => {

    const [receipt, setReceipt] = useState(
        {
            name: '',
            quantity: Number,
            date: '',
            price: Number,
            category: ''
        }
    )

    function handleChange(e) {
        const { name, value } = e.target;
        setReceipt((prevReceipt) => {
            return {
                ...prevReceipt,
                [name]: value
            };
        })
    }
    function handleClick() {
        props.onAdd(receipt);
        setReceipt({
            name: '',
            quantity: '',
            date: '',
            price: '',
            category: ''
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
    }


    return (
        <div className="addform-container">
            <h3 className='r-head'>ADD RECEIPT</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='r-label'>Item</label>
                    <input onChange={handleChange} name='name' className='r-input' type='text' placeholder='Product Name' required />
                </div>
                <label className='r-label'>Quantity</label>
                <input onChange={handleChange} name='quantity' className='r-input' type='number' placeholder='Quantity' min='1' required />
                <div>
                    <label className='r-label'>Date Of Purchase</label>
                    <input onChange={handleChange} name='date' className='r-input' type="date" placeholder='Select Date' required />
                </div>
                <div>
                    <label className='r-label'>Price</label>
                    <input onChange={handleChange} name='price' className='r-input' type='number' placeholder='$ Price' required />
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
                <button onClick={handleClick} className='r-btn'>Add Receipt</button>
            </form>
        </div>
    )
}

export default newReceipt