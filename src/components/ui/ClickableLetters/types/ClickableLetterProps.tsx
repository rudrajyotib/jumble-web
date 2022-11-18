import Letter from "../../../../common/types/Letter";

type ClickableLetterProps = {
    touchable: boolean
    content: Letter
    clickHandler: (index: number) => void
    clickable: boolean
}

export default ClickableLetterProps;