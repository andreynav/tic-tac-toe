import { Board } from 'components/Board/Board'
import { BoardRow } from 'components/BoardRow/BoardRow'
import { Info } from 'components/Info/Info'
import { Square } from 'components/Square/Square'
import { useState } from 'react'
import styled from 'styled-components'

import { chooseMark } from '../../utils/chooseMark'
import { isWinner } from '../../utils/isWinner'

export const App = () => {
  const [isCross, setIsCross] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [steps, setSteps] = useState(['Game start:'])

  const handleClick = (value: number) => {
    if (squares[value] || isWinner(squares)) return

    const updatedSquares = [...squares]
    updatedSquares[value] = chooseMark(isCross)
    setSquares(updatedSquares)
    setIsCross(!isCross)
    setSteps([...steps, `Step was made in cell #${value}`])
  }

  return (
    <AppWrapper>
      <Board>
        <BoardRow>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </BoardRow>
        <BoardRow>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </BoardRow>
      </Board>
      <Info>
        {steps.map((step, id) => (
          <div key={id}>
            {id !== 0 && id}
            {` ${step}`}
          </div>
        ))}
      </Info>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: auto;
  grid-template-rows: 0.7fr auto 0.7fr;
  grid-template-columns: 0.5fr auto 0.8fr;
  background-color: #282c34;
  grid-template-areas:
    '. . .'
    '. Board Info'
    '. . .';
`
