'use client'
import {useState, useContext, createContext} from 'react';
import AddReceipt from "@/components/addreceipt";
import { AppContext } from '@/context/data';
import { DisplayReceiptContext } from '@/context/display';

export default function () {

    const [receipts, setReceipts] = useContext( AppContext );
    const [DisplayReceipts, setDisplayReceipts] = useContext(DisplayReceiptContext)
    
  function addReceipt(newReceipt) {
    setReceipts((prevReceipts) => {
      return [...prevReceipts, newReceipt];
    });
    setDisplayReceipts((prevReceipts)=>{
      return [...prevReceipts, newReceipt];
    })
  }
  
    return (
        <AddReceipt onAdd={addReceipt} />
    )
}