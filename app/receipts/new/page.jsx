'use client'
import {useState, useContext, createContext} from 'react';
import AddReceipt from "@/components/addreceipt";
import { AppContext } from '@/context/data';

export default function () {

    const [receipts, setReceipts] = useContext( AppContext );
    
  function addReceipt(newReceipt) {
    setReceipts((prevReceipts) => {
      return [...prevReceipts, newReceipt];
    });
  }
  
    return (
        <AddReceipt onAdd={addReceipt} />
    )
}