import styled, { css } from "styled-components";

export const CardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -5rem;
`

interface CardsContentProps{
    variant?: "green"
}

export const CardsContent = styled.div<CardsContentProps>`
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme["gray-300"]};
    }
    strong{
        display: block;
        font-size: 2rem;
        margin-top: 0.75rem;
    }
    ${props => props.variant === 'green' && css`
    background-color: ${props => props.theme["green-700"]};
    `}
`