import { Board } from 'components/Board/Board'
import { BoardRow } from 'components/BoardRow/BoardRow'
import { Info } from 'components/Info/Info'
import { Square } from 'components/Square/Square'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useWinner } from '../../hooks/useWinner'
import { chooseMark } from '../../utils/chooseMark'

export const App = () => {
  const [isCross, setIsCross] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [steps, setSteps] = useState(['Game start:'])
  const winner = useWinner(squares, isCross)

  const winMessage = `Player ${chooseMark(!isCross)} won!`
  const stepMessage = (value: number) =>
    `Player put the ${chooseMark(isCross)} on the cell № ${value}`

  const handleClick = (value: number) => {
    if (squares[value] || winner) return

    const updatedSquares = [...squares]
    updatedSquares[value] = chooseMark(isCross)
    setSquares(updatedSquares)
    setIsCross(!isCross)
    setSteps([...steps, stepMessage(value)])
  }

  useEffect(() => {
    if (winner) {
      setSteps([...steps, winMessage])
    }
  }, [winner])

  return (
    <AppWrapper>
      <Board>
        {[0, 1, 2].map((row) => (
          <BoardRow key={row}>
            {[0, 1, 2].map((cell) => {
              const index = row * 3 + cell
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                />
              )
            })}
          </BoardRow>
        ))}
      </Board>
      <Info>
        {steps.map((step, id) => (
          <div key={id}>
            {id !== 0 && !step.includes('won') && id}
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
  grid-template-rows: 8rem auto 1fr;
  grid-template-columns: 0.4fr minmax(30rem, 1fr) 0.4fr;
  background-color: var(--bg-color);
  grid-template-areas:
    '. . .'
    '. Board .'
    '. Info .';

  @media (max-width: 768px) {
    grid-template-columns: 1rem minmax(20rem, 1fr) 1rem;
  }

  @media (max-width: 480px) {
    grid-template-rows: 3rem auto 1fr;
    grid-template-columns: 1rem minmax(10rem, 1fr) 1rem;
  }
`
