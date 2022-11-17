import Letter from "../../../../common/types/Letter";

type RowsOfLettersProps = {
    letters: Letter[]
    idPrefx: string
    rowSize: number
    letterClickHandler: (index: number) => void
}

export default RowsOfLettersProps;