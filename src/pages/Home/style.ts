import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1.25rem;
`
export const TransactionContainer = styled.main`
    width: 100%;
    margin: 4rem auto 2rem;

  
`
export const TableContainer = styled.table`
    margin-top: 1.5rem;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    td{
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};
     
        &:first-child{
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px       
         }    
         &:last-child{
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px       
         }    
    }
`

interface PriceProps{
    variant: 'income' | 'outcome'
}

export const Price = styled.span<PriceProps>`
    color: ${props => props.variant === 'income' ?
     props => props.theme['green-300'] 
     :
     props.theme["red-300"]};
`