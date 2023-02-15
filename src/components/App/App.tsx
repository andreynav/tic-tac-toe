import { Board } from 'components/Board/Board'
import { Square } from 'components/Square/Square'
import styled from 'styled-components'

import { BoardRow } from '../BoardRow/BoardRow'

export const App = () => {
  return (
    <AppWrapper>
      <Board>
        <BoardRow>
          <Square />
          <Square />
          <Square />
        </BoardRow>
        <BoardRow>
          <Square />
          <Square />
          <Square />
        </BoardRow>
        <BoardRow>
          <Square />
          <Square />
          <Square />
        </BoardRow>
      </Board>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: auto;
  grid-template-rows: 0.7fr auto 0.7fr;
  grid-template-columns: 0.7fr auto 0.7fr;
  background-color: #282c34;
  grid-template-areas:
    '. . .'
    '. Board .'
    '. . .';
`
