import styled from 'styled-components'

export const Info = ({ children }: any) => {
  return <StyledInfo>{children}</StyledInfo>
}

const StyledInfo = styled.div`
  display: grid;
  grid-area: Info;
  grid-template-rows: auto;
  grid-template-columns: 300px;
  justify-self: center;
  color: snow;
  //border: 10px solid black;
`
