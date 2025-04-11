import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { CardsContainer, CardsContent } from "./styles";
import { useSummary } from "@/hooks/useSummary";


export function FormattedPrice(value: number){
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}
export function CardsTransactions(){
    const summary = useSummary()
    
    return (
        <CardsContainer>
            <CardsContent>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>{FormattedPrice(summary.income)}</strong>
            </CardsContent>
            <CardsContent>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>{FormattedPrice(summary.outcome)}</strong>
            </CardsContent>
            <CardsContent variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>
                <strong>{FormattedPrice(summary.total)}</strong>
            </CardsContent>
        </CardsContainer>
    )
}