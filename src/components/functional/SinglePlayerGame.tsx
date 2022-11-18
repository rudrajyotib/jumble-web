import React from "react";
import { JumbleBoard } from "../../common/domain/JumbleBoard";
import { WordService, WordServiceImpl } from "../../services/WordService";
import { CorrectAnswer } from "../ui/Results/CorrectAnswer";
import { Success } from "../ui/Results/Success";
import { TimeUp } from "../ui/Results/TimeUp";
import TimedSolutionPad from "../ui/TimedSolutionPad/TimedSolutionPad";

export class SinglePlayerGame extends React.Component<any, { gameState: 'newgame' | 'nextboard' | 'activeboard' | 'timeout' | 'success' | 'showAnswer' }>{


    gameCurrentState: string
    wordOnBoard: string
    // words: string[] = ['AAA']
    wordService: WordService
    finishGameState: 'newgame' | 'nextboard' | 'activeboard' | 'timeout' | 'success' | 'showAnswer'

    constructor(props: any) {
        super(props)
        this.gameCurrentState = 'newgame'
        this.state = { gameState: 'newgame' }
        this.wordOnBoard = ''
        this.wordService = new WordServiceImpl()
        this.finishGameState = 'newgame'
    }

    componentDidMount(): void {
        this.wordOnBoard = this.wordOnBoard = this.wordService.nextWord()
        this.setState({ gameState: 'activeboard' })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ gameState: 'newgame' | 'nextboard' | 'success' | 'activeboard' | 'timeout' | 'showAnswer' }>, snapshot?: any): void {
        if (this.state.gameState === 'nextboard') {
            this.wordOnBoard = this.wordService.nextWord()
            this.setState({ gameState: 'activeboard' })
        }
    }

    timeOutHandler = () => {
        this.finishGameState = 'timeout'
        this.setState({ gameState: 'showAnswer' })
    }

    successHandler = () => {
        this.finishGameState = 'success'
        this.setState({ gameState: 'showAnswer' })
    }

    render(): React.ReactNode {

        let content = <div />

        if (this.state.gameState === 'activeboard') {
            content = <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <TimedSolutionPad successHandler={this.successHandler} timeOutHandler={this.timeOutHandler} key={this.wordOnBoard} durationInSeconds={60} targetWord={this.wordOnBoard} />
            </div>
        } else if (this.state.gameState === 'timeout') {
            content = <TimeUp nextStepHandler={() => { this.setState({ gameState: 'nextboard' }) }} />
        } else if (this.state.gameState === 'success') {
            content = <Success nextStepHandler={() => { this.setState({ gameState: 'nextboard' }) }} />
        } else if (this.state.gameState === 'showAnswer') {
            content = <CorrectAnswer displayDuration={2} answer={this.wordOnBoard} timeOutHandler={() => { this.setState({ gameState: this.finishGameState }) }} />
        }



        return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                {content}
            </div>
        )
    }

}

