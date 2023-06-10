'use client'
import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import { useState, useContext, createContext } from 'react';
import { AppContext } from "@/context/data";
import { DisplayReceiptContext } from "@/context/display";
import { EditReceiptContext } from "@/context/edit";


export default function () {
  //state calls
  const [receipts, setReceipts] = useContext(AppContext);
  const [search, setSearch] = useState("")
  const [condition, setConditon] = useState(true)
  const [DisplayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext)
  const [editReceipt, setEditReceipt] = useContext(EditReceiptContext)

  const [resultSearch, setResultSearch] = useState()

  //editing receipt
  function editingReceipt(id) {
    function getEdit() {
      return DisplayReceipts.filter((receipt) =>
        receipt.id === id
      )
    }
    let detail = getEdit()
    setEditReceipt(...detail)
  }

  //delete from receipt on and after search
  function deleteReceipt(id) {
    setDisplayReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return DisplayReceipts[index].id !== id;
      });
    })

    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return receipts[index].id !== id;
      });
    })
  }

  //delete from search side ------------------------
  function deleteReceiptSearch(id) {
    setResultSearch((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return resultSearch[index].id !== id;
      });
    })

    setDisplayReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return DisplayReceipts[index].id !== id;
      });
    })

    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return receipts[index].id !== id;
      });
    })
  }

  //searching for a receipt
  function handleSearchChange(e) {
    const { value } = e.target;
    setSearch(value)
  }

  function getSearch(e) {
    e.preventDefault()
    function showSearch(search) {
      return DisplayReceipts.filter((receipt) => {
        const hasName = receipt.name && receipt.name.includes(search);
        const hasShop = receipt.shop && receipt.shop.includes(search);
        return hasName || hasShop;
      });
    }
    setResultSearch(showSearch(search))
    setConditon(false)
    setSearch("")
  }

  //show all receipts after search has been made
  function handleToggle() {
    setConditon(true)
  }

  //return components
  return (
    <div className="list-container">

      <form className="search-container" onSubmit={getSearch}>
        <input className="search" onChange={handleSearchChange} name="search" value={search} type="text" placeholder="Search For An Item Or Shop" required />
        <button className="searchbtn">Search</button>
      </form>
      <button className="btnshow" onClick={handleToggle}>Show Receipt</button>

      <table>
        <tbody>
          <tr className="thead">
            <th scope="col">Date</th>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Shop</th>
            <th scope="col">Category</th>
            <th scope="col">
              <span className="material-symbols-outlined">
                edit_note
              </span>
            </th>
            <th scope="col">
              <span className="material-symbols-outlined">
                delete
              </span>
            </th>
          </tr>
          {
            condition ? receipts.map((item) => {
              return (
                <Listreceipts
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  date={item.date}
                  shop={item.shop}
                  category={item.category}
                  onDelete={deleteReceipt}
                  onEdit={editingReceipt}
                />
              )
            }) : resultSearch.map((item) => {
              return (
                <Listreceipts
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  date={item.date}
                  shop={item.shop}
                  category={item.category}
                  onDelete={deleteReceiptSearch}
                  onEdit={editingReceipt}
                />
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}