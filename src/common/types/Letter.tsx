import { ReactComponentElement } from "react"

type Letter = {
    index: number,
    value: string,
    clickHandler?: React.FunctionComponent
}

export default Letter