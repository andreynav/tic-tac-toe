import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const Info = ({ children }: PropsWithChildren) => {
  return <StyledInfo>{children}</StyledInfo>
}

const StyledInfo = styled.div`
  display: grid;
  grid-area: Info;
  grid-template-rows: auto;
  grid-template-columns: 300px;
  justify-self: center;
  color: snow;
  align-content: start;
  margin-top: 14px;

  & div {
    line-height: 28px;
  }
`
