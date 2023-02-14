import styled from 'styled-components'

export const App = () => {
  return (
    <AppWrapper>
      <Board>
        <BoardRow1>
          <Square value={'x'} />
          <Square value={'x'} />
          <Square value={'x'} />
        </BoardRow1>
        <BoardRow2>
          <Square value={'x'} />
          <Square value={'x'} />
          <Square value={'x'} />
        </BoardRow2>
        <BoardRow3>
          <Square value={'x'} />
          <Square value={'x'} />
          <Square value={'x'} />
        </BoardRow3>
      </Board>
    </AppWrapper>
  )
}

const Board = ({ children }: any) => {
  return <StyledBoard>{children}</StyledBoard>
}

const Square = ({ value }: { value: string }) => {
  return <StyledButton>{value}</StyledButton>
}

const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: auto;
  grid-template-rows: 0.7fr auto 0.7fr;
  grid-template-columns: 0.7fr auto 0.7fr;
  background-color: #282c34;
`
const StyledBoard = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-column: 2/3;
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 300px;
  border: 10px solid black;
`

const BoardRow1 = styled.div`
  display: grid;
  grid-row: 0/1;
  grid-template-rows: 100px;
  grid-template-columns: 100px 100px 100px;
`

const BoardRow2 = styled.div`
  display: grid;
  grid-row: 1/2;
  grid-template-rows: 100px;
  grid-template-columns: 100px 100px 100px;
`

const BoardRow3 = styled.div`
  display: grid;
  grid-row: 2/3;
  grid-template-rows: 100px;
  grid-template-columns: 100px 100px 100px;
`

const StyledButton = styled.button`
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: 100px;
  height: 100px;
  width: 100px;
  border: 1px solid black;
  font-size: 70px;
  color: red;
`
