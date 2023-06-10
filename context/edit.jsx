'use client'
import { createContext, useState } from 'react';

export const EditReceiptContext = createContext({}, ()=>{});

export const EditReceiptContextProvider = ( {children} ) => {
    const [editReceipt, setEditReceipt] = useState({});
    return (
        <EditReceiptContext.Provider value={[editReceipt, setEditReceipt ]} >
            {children}
        </EditReceiptContext.Provider>
    );
}; 