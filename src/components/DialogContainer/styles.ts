import styled, { css } from "styled-components";
import { RadioGroup } from "radix-ui";

export const ContentForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background-color: ${(props) => props.theme["gray-900"]};
      border: 0;
      border-radius: 6px;
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    /* Remover as setinhas do input[type="number"] */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
export const ButtonConfirmFormTransaction = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    cursor: pointer;
    margin-top: 1.5rem;
    font-weight: bold;
    transition: 0.2s;
    &:hover{
        background-color: ${props => props.theme["green-700"]};
    }
    &:disabled{
        opacity: 0.6;
        cursor: default
    }
`
export const IncomeAndOutcomeButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 0.25rem;
`

interface ButtonTypeProps{
    variant: "income" | "outcome"
}

export const ButtonTypeIncomeOrOutcome = styled(RadioGroup.Item)<ButtonTypeProps>`
  all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.75rem;
    background-color: ${props => props.theme["gray-700"]};
    padding: 1rem;
    border-radius: 6px;
    color: ${props => props.theme["gray-300"]};
    transition: 0.2s;
    cursor: pointer;
    svg{
        color: ${props => 
        props.variant === "income" ? "#00b37e" : "#f75a68"};
        transition: 0.2s;
    }
    &:hover{
        background-color: ${props => props.theme["gray-600"]};
    }
    &:focus {
    && {
      background-color: ${props => 
      props.variant === "income" ? props.theme["green-700"] : props.theme["red-700"]};
      ${props => css`
        color: ${props.variant === "income" ? props.theme["white"] : props.theme.white};
        box-shadow: 0 0 2px ${props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};
      `}
      svg{
        color: ${props => props.theme.white}
      }
    }
  }
`