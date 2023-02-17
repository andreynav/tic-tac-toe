import styled from 'styled-components'

type PropsT = {
  value: string
  onSquareClick: (value: number) => void
}

export const Square = ({ value, onSquareClick }: PropsT) => {
  // @ts-ignore
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
