import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"
import {useForm} from 'react-hook-form'
import * as z from "zod"
import {zodResolver} from '@hookform/resolvers/zod'
import { useContext } from "react"
import { TransactionsContext } from "@/context/transactionsContext"

const SchemaValidationForm = z.object({
  query: z.string()
})

export const SearchForm = () => { 
  const {allTransactions, setTransactions } = useContext(TransactionsContext)
 
  type searchFormSchemaValidation = z.infer<typeof SchemaValidationForm>
  const { register,
          handleSubmit,
          formState:{isSubmitting}
     } = useForm<searchFormSchemaValidation>({
    resolver: zodResolver(SchemaValidationForm)
  }) 
 
  async function handleSearchTransactions(data: searchFormSchemaValidation) {
    await new Promise(resolve => setTimeout(resolve, 2000)) 
    const filtered = allTransactions.filter((transaction) =>
    {
      return transaction.description.toLowerCase().includes(data.query.toLowerCase())
    }
    )
    setTransactions(filtered)
  }
 
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input 
        type="text"
         placeholder="Busque uma transação"
        {...register('query')}
         />
        <button disabled={isSubmitting}>
            <MagnifyingGlass size={20} weight="bold" />
            Buscar
        </button>
    </SearchFormContainer>
  )
}
