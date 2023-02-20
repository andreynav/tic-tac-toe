import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Board = ({ children }: PropsWithChildren) => {
  return <StyledBoard>{children}</StyledBoard>
}

const StyledBoard = styled.div`
  display: grid;
  grid-area: Board;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 300px;
  justify-self: center;
  border: 2px solid black;
`
