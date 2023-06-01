'use client'
import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import { useState, useContext, createContext } from 'react';
import { AppContext } from "@/context/data";
import { TableHTMLAttributes } from "react";

export default function () {

  const [receipts, setReceipts] = useContext(AppContext);
  const [search, setSearch] = useState("")

  function deleteReceipt(id) {
    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return receipts[index].id !== id;
      });
    })
  }

  // function editReceipt(id) {
  //     receipts.filter((receipt, index) => {
  //       console.log(receipt)
  //       console.log(index)
  //       console.log(id)
  //     });

  // }

  function handleSearchChange(e) {
    const { value } = e.target;
    setSearch(value)
  }
  function getSearch(e) {
    console.log(search)
     function showSearch(search) {
      setReceipts((prevReceipts) => {
        return prevReceipts.filter((receipt, index) => {
          return receipts[index].name === search;
        });
      })
     }
     showSearch(search)
    e.preventDefault()

  }

  return (
    <div className="list-container">
      <form className="search-container" onSubmit={getSearch}>
        <input className="search" onChange={handleSearchChange} name="search" value={search} type="text" placeholder="find receipt" required />
        <button>Search</button>
      </form>


      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>

            <th>
              <span className="material-symbols-outlined">
                edit_note
              </span>
            </th>
            <th>
              <span className="material-symbols-outlined">
                delete
              </span>
            </th>
          </tr>
          {
            receipts.map((item) => {
              return (
                <Listreceipts
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  date={item.date}
                  category={item.category}
                  onDelete={deleteReceipt}
                //onEdit={editReceipt}
                />
              )
            })
          }
        </tbody>
      </table>


    </div>

  )
}