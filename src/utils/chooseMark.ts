export type MarkT = 'X' | 'O'
export const chooseMark = (mark: boolean): MarkT => (mark ? 'X' : 'O')
