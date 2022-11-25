import { ReactComponentElement } from "react"

type Letter = {
    index: number,
    value: string,
    clickable: () => boolean
    clear: () => void
    markPositionallyCorrect: () => void
    markPositionallyIncorrect: () => void
    isPositionallyCorrect: () => boolean
}

export default Letter