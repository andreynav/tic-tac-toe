import { MouseEventHandler } from 'react'
import styled from 'styled-components'

import { MarkT } from '../../utils/chooseMark'

type PropsT = {
  value: MarkT
  onSquareClick: MouseEventHandler<HTMLButtonElement>
}

export const Square = ({ value, onSquareClick }: PropsT) => {
  return (
    <StyledButton onClick={onSquareClick} value={value}>
      {value}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ value: MarkT }>`
  display: grid;
  align-content: center;
  min-height: 100px;
  min-width: 100px;
  height: 100px;
  width: 100px;
  border: 2px solid black;
  font-size: 70px;
  color: ${({ value }) => (value === 'X' ? 'red' : 'blue')};
`
