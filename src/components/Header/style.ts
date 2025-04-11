import styled from "styled-components";
import * as Dialog from "@/components/ui/dialog"

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
    width: 100%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ButtonNewTransaction = styled.button`
    height: 50px;
    background-color: ${ props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.theme["green-700"]};
        transition: 0.2s;
    }
`
export const DialogContainer = styled(Dialog.DialogContent)`
    background: ${props => props.theme["gray-800"]};
    border: 0;
    padding: 3rem;
`