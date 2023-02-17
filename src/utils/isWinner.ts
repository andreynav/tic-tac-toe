import { MarkT } from './chooseMark'

type LineT = [a: MarkT, b: MarkT, c: MarkT]

export const isWinner = (squares: Array<MarkT | null> = []) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length!; i++) {
    // @ts-ignore
    const [a, b, c]: LineT | null = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
