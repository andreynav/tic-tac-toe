import styled from 'styled-components'

export const BoardRow = ({ children }: any) => {
  return <StyledBoardRow>{children}</StyledBoardRow>
}

const StyledBoardRow = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`
