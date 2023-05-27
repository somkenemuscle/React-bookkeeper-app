'use client'
import { createContext, useState } from 'react';

export const AppContext = createContext([], ()=>{});

export const AppContextProvider = ( {children} ) => {
    const [receipts, setReceipts] = useState([]);
    return (
        <AppContext.Provider value={[receipts, setReceipts]}>
            {children}
        </AppContext.Provider>
    );
}; 