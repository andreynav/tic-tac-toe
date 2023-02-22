import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Board = ({ children }: PropsWithChildren) => {
  return <StyledBoard>{children}</StyledBoard>
}

const StyledBoard = styled.div`
  display: grid;
  grid-area: Board;
  grid-template-rows: repeat(var(--num-rows-cols), var(--cell-size));
  grid-template-columns: var(--col-size);
  justify-self: center;
  border: var(--cell-border-size) solid black;
`
