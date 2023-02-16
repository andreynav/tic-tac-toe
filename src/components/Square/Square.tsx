import { useState } from 'react'
import styled from 'styled-components'

import { getMark } from '../App/App'

type StepsT = {
  id: number
  text: string
}

type PropsT = {
  cellId: number
  mark: boolean
  setMark: (mark: boolean) => void
  steps: Array<StepsT>
  setSteps: (arr: Array<StepsT>) => void
}

export const Square = ({ cellId, mark, setMark, steps, setSteps }: PropsT) => {
  const [value, setValue] = useState('')
  const nextId = steps[steps.length - 1]!.id + 1

  const onSquareClick = () => {
    if (value) return

    setValue(getMark(mark))
    setMark(!mark)
    setSteps([...steps, { id: nextId, text: `Step was made in cell #${cellId}` }])
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
