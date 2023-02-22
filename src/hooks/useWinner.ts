import { useEffect, useState } from 'react'

import { chooseMark } from '../utils/chooseMark'

export const useWinner = (squares: Array<string | null>, isCross: boolean) => {
  const [winner, setWinner] = useState<string | null>(null)

  useEffect(() => {
    const winConditions: any = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i]!
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(chooseMark(isCross))
        break
      }
    }
  }, [squares, isCross])

  return winner
}
