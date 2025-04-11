import { createContext, ReactNode, useEffect, useState } from "react";

export interface Transactions {
  id?: number;
  description: string;
  type: "income" | "outcome"
  category: string;
  price: number;
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transactions[];
  allTransactions: Transactions[]; 
  setTransactions: (transactions: Transactions[]) => void
}
interface TransactionsProviderType{
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsContextProvider({children}: TransactionsProviderType){
    const [allTransactions, setAllTransactions] = useState<Transactions[]>([])
    const [transactions, setTransactions] = useState<Transactions[]>([])
   
    const loadTransactions = async (query?: string) => {
        const url = new URL("http://localhost:3000/transactions")
        if(query){
            url.searchParams.append('q', query)
        }
        const response = await fetch(url)
        const data = await response.json()
        setTransactions(data)
        setAllTransactions(data)
    }

    useEffect(() =>{
        loadTransactions()
    }, [])

    return(
        <TransactionsContext.Provider value={{transactions, allTransactions, setTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}