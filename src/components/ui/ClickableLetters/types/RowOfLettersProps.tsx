import Letter from "../../../../common/types/Letter"

type RowOfLetterProps = {
    letters: Letter[]
    idPrefix: string
    letterClickHandler: (index: number) => void
    clickable: boolean
}

export default RowOfLetterProps