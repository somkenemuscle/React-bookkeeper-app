'use client'
import { createContext, useState } from 'react';

export const EditReceiptContext = createContext([], ()=>{});

export const EditReceiptContextProvider = ( {children} ) => {
    const [editReceipts, seteditReceipts] = useState([]);
    return (
        <EditReceiptContext.Provider value={[editReceipts, seteditReceipts ]} >
            {children}
        </EditReceiptContext.Provider>
    );
}; 