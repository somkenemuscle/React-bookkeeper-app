'use client'
import { createContext, useState } from 'react';

export const DisplayReceiptContext = createContext([], () => { });

export const DisplayReceiptContextProvider = ({ children }) => {
    const [DisplayReceipts, setDisplayReceipts] = useState([]);
    return (
        <DisplayReceiptContext.Provider value={[DisplayReceipts, setDisplayReceipts]} >
            {children}
        </DisplayReceiptContext.Provider>
    );
}; 