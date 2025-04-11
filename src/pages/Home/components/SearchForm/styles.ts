import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    input{
        flex: 1;
        border: 0;
        border-radius: 6px;
        padding: 1rem;
        background-color: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};

        &::placeholder{
            color: ${props => props.theme["gray-500"]};
        }
    }
    button{
        padding: 0 2rem;
        border: 0;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        border: 1px solid ${props => props.theme["green-300"]};
        color: ${props => props.theme["green-300"]};
        border-radius: 6px;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            background:  ${props => props.theme["green-500"]};;
            border-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white}; 
        }
        &:disabled{
            opacity: 0.5;
            cursor: default;
        }
    }
`