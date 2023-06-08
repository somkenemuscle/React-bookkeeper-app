
"use client"

import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import { useState, useContext } from 'react';
import { AppContext } from "@/context/data";
import { DisplayReceiptContext } from "@/context/display";
import { EditReceiptContext } from "@/context/edit";

export default function () {
  // state calls
  const [receipts, setReceipts] = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState(true);
  const [displayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext);
  const [editReceipt, setEditReceipt] = useContext(EditReceiptContext);

  const [resultSearch, setResultSearch] = useState([]);

  // editing receipt
  function editingReceipt(id) {
    function getEdit() {
      return displayReceipts.filter((receipt) => receipt.id === id);
    }
    let detail = getEdit();
    setEditReceipt(...detail);
  }

  // delete from receipt on and after search
  function deleteReceipt(id) {
    setDisplayReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt) => receipt.id !== id);
    });

    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt) => receipt.id !== id);
    });
  }

  function deleteReceiptSearch(id) {
    setResultSearch((prevReceipts) => {
      return prevReceipts.filter((receipt) => receipt.id !== id);
    });

    setDisplayReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt) => receipt.id !== id);
    });

    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt) => receipt.id !== id);
    });
  }

  // searching for a receipt
  function handleSearchChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  function getSearch(e) {
    e.preventDefault();

    function showSearch(search) {
      return displayReceipts.filter((receipt) => {
        const hasName = receipt.name && receipt.name.includes(search);
        const hasShop = receipt.shop && receipt.shop.includes(search);
        return hasName || hasShop;
      });
    }
    
    setResultSearch(showSearch(search));
    setCondition(false);
    setSearch("");
  }

  // show all receipts after search has been made
  function handleToggle() {
    setCondition(true);
  }

  // return components
  return (
    <div className="list-container">
      <div className="header">
        <form className="search-container" onSubmit={getSearch}>
          <input
            className="search"
            onChange={handleSearchChange}
            name="search"
            value={search}
            type="text"
            placeholder="Find receipt"
            required
          />
          <button type="submit">Search</button>
        </form>

        <button className="show-receipt-button" onClick={handleToggle}>
          Show Receipt
        </button>
      </div>

      <div className="receipts-container">
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Shop</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {condition
                ? receipts.map((item) => (
                    <Listreceipts
                      key={item.id}
                      id={item.id}
                      shop={item.shop}
                      name={item.name} // Adjusted prop name for the item name
                      quantity={item.quantity}
                      price={item.price}
                      date={item.date}
                      category={item.category}
                      onDelete={deleteReceipt}
                      onEdit={editingReceipt}
                    />
                  ))
                : resultSearch.map((item) => (
                    <Listreceipts
                      key={item.id}
                      id={item.id}
                      shop={item.shop}
                      name={item.name} // Adjusted prop name for the item name
                      quantity={item.quantity}
                      price={item.price}
                      date={item.date}
                      category={item.category}
                      onDelete={deleteReceiptSearch}
                      // onEdit={editReceipt}
                    />
                  ))}
            </tbody>
          </table>
        </div>

        {/* Add Receipt component */}
        <div className="add-receipt-container">
          {/* Add Receipt component content */}
        </div>
      </div>
    </div>
  );
}
