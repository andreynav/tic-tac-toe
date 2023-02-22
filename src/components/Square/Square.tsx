import { MouseEventHandler } from 'react'
import styled from 'styled-components'

import { IsCrossT } from '../../utils/chooseMark'

type PropsT = {
  value: IsCrossT
  onSquareClick: MouseEventHandler<HTMLButtonElement>
}

export const Square = ({ value, onSquareClick }: PropsT) => {
  const color = value === 'X' ? 'red' : 'blue'

  return (
    <StyledButton onClick={onSquareClick} color={color}>
      {value}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ color: string }>`
  display: grid;
  align-content: center;
  min-height: var(--cell-size);
  min-width: var(--cell-size);
  height: var(--cell-size);
  width: var(--cell-size);
  border: var(--cell-border-size) solid black;
  font-size: var(--cell-font-size);
  color: ${({ color }) => color};
`
