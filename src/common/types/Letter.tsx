import { ReactComponentElement } from "react"

type Letter = {
    index: number,
    value: string,
    clickable: () => boolean
    clear: () => void
}

export default Letter