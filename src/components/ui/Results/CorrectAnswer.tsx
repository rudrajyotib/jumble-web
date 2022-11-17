import React from "react";
import Letter from "../../../common/types/Letter";
import { createLettersArrayWithPosition } from "../../../utils/StringUtils";
import RowsOfClickableLetters from "../ClickableLetters/RowsOfClickableLetters";

export type ShowCorrectAnswerProps = {
    displayDuration: number
    answer: string
    timeOutHandler: () => void
}

export class CorrectAnswer extends React.Component<ShowCorrectAnswerProps, { visible: boolean }>{

    duration: number
    word: Letter[]

    constructor(props: ShowCorrectAnswerProps) {
        super(props)
        this.duration = props.displayDuration
        this.state = { visible: true }
        this.word = createLettersArrayWithPosition(this.props.answer)
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({ visible: false })
        }, this.duration * 1000)
    }

    componentDidUpdate(prevProps: Readonly<ShowCorrectAnswerProps>, prevState: Readonly<{ visible: boolean; }>, snapshot?: any): void {
        if (prevState.visible === true && this.state.visible === false) {
            this.props.timeOutHandler()
        }
    }

    render(): React.ReactNode {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <RowsOfClickableLetters letterClickHandler={() => { }} letters={this.word} idPrefx='correctAnswer' rowSize={6} />
            </div>
        )
    }
}

