'use client'
import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import { useState } from "react";


export default function () {

  const [receipts, setReceipts] = useState([])
  function addReceipt(newReceipt) {
    setReceipts((prevReceipts) => {
      return [...prevReceipts, newReceipt];
    });
  }

  return (
    <div className="r-list-container">
      {
        Demoreceipts.map((item) => {
          return (
            <Listreceipts
              key={item.id}
              name={item.name}
              qty={item.quantity}
            />
          )
        })
      }
    </div>
  )
}