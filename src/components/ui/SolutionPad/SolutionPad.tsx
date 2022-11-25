import React from "react";
import { ReactNode } from "react";
import { JumbleBoard } from "../../../common/domain/JumbleBoard";
import RowsOfClickableLetters from "../ClickableLetters/RowsOfClickableLetters";
import HeaderBanner from "../elements/banners/HeaderBanner";
import Button from "../elements/buttons/Button";
import SolutionPadProps from "./SolutionPadProps";

class SolutionPad extends React.Component<SolutionPadProps>{

    jumbleBoard: JumbleBoard

    clickQuestionLetterHandler = (index: number) => {
        this.jumbleBoard.moveFromQuestionToAnswerFrame(index)
        this.forceUpdate()
        if (this.jumbleBoard.answerReached() === true) {
            this.props.successHandler()
        }
    }

    undoHandler = () => {
        this.jumbleBoard.undoLastAnswer()
        this.forceUpdate()
    }

    undoAllHandler = () => {
        this.jumbleBoard.undoAll()
        this.forceUpdate()
    }

    reShuffleHandler = () => {
        this.jumbleBoard.reshuffle()
        this.forceUpdate()
    }

    constructor(props: SolutionPadProps) {
        super(props)
        this.jumbleBoard = props.jumbleBoard
    }

    render(): ReactNode {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1, display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#c6fc03' }}>
                    <HeaderBanner banner="instructionRibbon" text="Click the letters in sequence" />
                </div>
                <div style={{ flex: 2, display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <RowsOfClickableLetters clickable={true} letters={this.jumbleBoard.questionFrame} idPrefx='question' rowSize={6} letterClickHandler={this.clickQuestionLetterHandler} />
                </div>
                <div style={{ flex: 1, alignItems: 'center', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', backgroundColor: '#c6fc03' }}>
                    <div style={{ flex: 1, alignItems: 'flex-start', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }} >
                        <div>

                            <Button text="Undo" clickHandler={this.undoHandler} />
                        </div>
                        <div>
                            <Button text="Undo All" clickHandler={this.undoAllHandler} />
                        </div>
                        <div>
                            <Button text="Re-Shuffle" clickHandler={this.reShuffleHandler} />
                        </div>
                    </div>
                </div>

                <div style={{ flex: 3, display: 'flex', alignContent: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <RowsOfClickableLetters clickable={false} letters={this.jumbleBoard.answerFrame} idPrefx='answer' rowSize={6} letterClickHandler={(index: number) => { }} />
                </div>
            </div>
        )
    }
}

export default SolutionPad