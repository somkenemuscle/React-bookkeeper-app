"use client"
import Styles from '../styles/page.css'
function handleSubmit(e) {
    e.preventDefault()
}

const newReceipt = () => {
    return (
        <div className="addform-container">
            <h3>Add Receipt</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' />
                <input type='text' />
                <input type='number' placeholder='$' />
                <input type="datetime-local" />
                <select name="categories" id="categories">
                    <option >Groceries</option>
                    <option>Cosmetics</option>
                    <option >Travel</option>
                    <option>Electronics</option>
                </select>
                <button>Add</button>
            </form>
        </div>
    )
}

export default newReceipt