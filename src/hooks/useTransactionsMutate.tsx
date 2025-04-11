import { Transactions } from "@/context/transactionsContext";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'


const postTransaction = async (data: Transactions) =>{
     return  await axios.post('http://localhost:3000/transactions', data)
}
export function useTransactionsMutate(){
    const mutate = useMutation({
        mutationFn: postTransaction,
    })
    return mutate
}