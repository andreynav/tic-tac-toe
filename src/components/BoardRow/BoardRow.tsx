import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const BoardRow = ({ children }: PropsWithChildren) => {
  return <StyledBoardRow>{children}</StyledBoardRow>
}

const StyledBoardRow = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(var(--num-rows-cols), 1fr);
`
