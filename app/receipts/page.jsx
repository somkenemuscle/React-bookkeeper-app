'use client'
import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import { useState, useContext, createContext } from 'react';
import { AppContext } from "@/context/data";


export default function () {
  const [receipts, setReceipts] = useContext(AppContext);

  function deleteReceipt(id) {
    setReceipts((prevReceipts) => {
      return prevReceipts.filter((receipt, index) => {
        return receipts[index].id!== id;
      });
    })
  }

  // function editReceipt(id) {
  //   setReceipts((prevReceipts) => {
  //     return prevReceipts.filter((receipt, index) => {
  //       console.log(receipts[index])
  //       return index!== id;
  //     });
  //   })
  // }


  return (
    <div className="r-list-container">
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
    </div>
  )
}