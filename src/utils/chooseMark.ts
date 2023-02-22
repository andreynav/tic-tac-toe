export type IsCrossT = 'X' | 'O'
export const chooseMark = (isCross: boolean): IsCrossT => (isCross ? 'X' : 'O')
