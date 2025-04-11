import { useContext } from "react"
import { CardsTransactions } from "../../components/CardsValueTransactions"
import { SearchForm } from "./components/SearchForm/index"
import { HomeContainer, Price, TableContainer, TransactionContainer } from "./style"
import { TransactionsContext } from "@/context/transactionsContext"
import { FormattedPrice } from "../../components/CardsValueTransactions"
import {format} from 'date-fns'

const HomeComponent = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <HomeContainer>
      <CardsTransactions />
      <TransactionContainer>
        <SearchForm />
        <TableContainer>
          <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td width="15%">
                      <Price variant={transaction.type}>
                        {transaction.type === "outcome" && "- "}
                        {FormattedPrice(transaction.price)}
                      </Price>
                    </td>
                    <td>{transaction.category}</td>
                    <td> {format(new Date(transaction.createdAt), 'dd/MM/yyyy')}</td>
                  </tr>
                ))}
          </tbody>
        </TableContainer>
      </TransactionContainer>
    </HomeContainer>
  )
}

export default HomeComponent
