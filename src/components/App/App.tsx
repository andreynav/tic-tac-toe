import { Board } from 'components/Board/Board'
import { BoardRow } from 'components/BoardRow/BoardRow'
import { Info } from 'components/Info/Info'
import { Square } from 'components/Square/Square'
import { useState } from 'react'
import styled from 'styled-components'

export const getMark = (mark: boolean) => {
  return mark ? 'X' : 'O'
}

export const App = () => {
  const [isCross, setIsCross] = useState(true)
  const [steps, setSteps] = useState([{ id: 1, text: 'Go to game start' }])

  return (
    <AppWrapper>
      <Board>
        <BoardRow>
          <Square
            cellId={1}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={2}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={3}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
        </BoardRow>
        <BoardRow>
          <Square
            cellId={4}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={5}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={6}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
        </BoardRow>
        <BoardRow>
          <Square
            cellId={7}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={8}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
          <Square
            cellId={9}
            mark={isCross}
            setMark={setIsCross}
            steps={steps}
            setSteps={setSteps}
          />
        </BoardRow>
      </Board>
      <Info>
        {steps.map((step) => (
          <div key={step.id}>{`${step.id}. ${step.text}`}</div>
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
