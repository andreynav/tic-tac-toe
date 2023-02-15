import { useState } from 'react'
import styled from 'styled-components'

// type PropsT = {
//   value: string
//   // onClick?: () => void
// }

export const Square = () => {
  const [value, setValue] = useState('')
  const onSquareClick = () => {
    if (!value) {
      setValue('X')
    } else {
      setValue('')
    }
  }

  return <StyledButton onClick={onSquareClick}>{value}</StyledButton>
}

const StyledButton = styled.button`
  display: grid;
  min-height: 100px;
  min-width: 100px;
  height: 100px;
  width: 100px;
  border: 1px solid black;
  font-size: 70px;
  color: red;
`
