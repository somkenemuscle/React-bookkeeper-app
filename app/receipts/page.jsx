'use client'
import Listreceipts from "@/components/listreceipt";
import Demoreceipts from "@/demo";
import {useState, useContext, createContext} from 'react';
import { AppContext } from "@/context/data";


export default function () {
  const [receipts, setReceipts] = useContext( AppContext );

  return (
    <div className="r-list-container">
      {
        receipts.map((item, index) => {
          return (
            <Listreceipts
              key={index}
              name={item.name}
              qty={item.quantity}
              price={item.price}
              date={item.date}

            />
          )
        })
      }
    </div>
  )
}