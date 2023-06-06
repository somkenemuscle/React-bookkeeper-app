"use client"
import { useState } from 'react'
import { v4 } from 'uuid'
import Styles from '../styles/page.css'

const newReceipt = (props) => {

    const [receipt, setReceipt] = useState(
        {
            id: '',
            shop: '',
            item: '',
            quantity: '',
            date: '',
            price: '',
            category: ''
        }
    )

    function handleChange(e) {
        const { name, value } = e.target;
        setReceipt((prevReceipt) => {
            return {
                ...prevReceipt,
                id:v4(),
                [name]: value
            };
        })
    }


    function handleSubmit(e) {
        e.preventDefault()
        props.onAdd(receipt);
        setReceipt({
            shop: '',
            item: '',
            quantity: '',
            date: '',
            price: ''
        })
    }


    return (
        <div className="addform-container">
            <h3 className='r-head'>ADD RECEIPT</h3>
            <form onSubmit={handleSubmit}>


           <div>
                    <label className='r-label'>Shop</label>
                    <input onChange={handleChange} name='shop' className='r-input' type='text' placeholder='Shop Name' value={receipt.shop} required />
                </div>
                <div>
                    <label className='r-label'>Item</label>
                    <input onChange={handleChange} name='name' className='r-input' type='text' placeholder='Product Name' value={receipt.name} required />
                </div>
                <label className='r-label'>Quantity</label>
                <input onChange={handleChange} name='quantity' className='r-input' type='number' placeholder='Quantity' value={receipt.quantity} min='1' required />
                <div>
                    <label className='r-label'>Date Of Purchase</label>
                    <input onChange={handleChange} name='date' className='r-input' type="date" placeholder='Select Date' value={receipt.date} required />
                </div>
                <div>
                    <label className='r-label'>Price</label>
                    <input onChange={handleChange} name='price' className='r-input' type='number' placeholder='$ Price' value={receipt.price} required />
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
                <button className='r-btn'>Add Receipt</button>


            </form>
        </div>
    )
}

export default newReceipt