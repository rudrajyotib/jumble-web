import React from "react";
import { AppConstant, SinglePlayerBoardPersistableStates } from "../../common/AppConstants";
import { SinglePlayerGameState } from "../../common/types/SinglePlayerGameState";
import { WordService, WordServiceImpl } from "../../services/WordService";
import { CorrectAnswer } from "../ui/Results/CorrectAnswer";
import Result from "../ui/Results/Result";
import TimedSolutionPad from "../ui/TimedSolutionPad/TimedSolutionPad";

export class SinglePlayerGame extends React.Component<any, { gameState: SinglePlayerGameState }>{


    gameCurrentState: string
    wordOnBoard: string
    wordService: WordService
    finishGameState: SinglePlayerGameState
    timeRemaining = 60

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
        const locallySavedGameStatus = localStorage.getItem(AppConstant.SINGLE_PLAYER_GAME_STATE_STORE_KEY)
        const locallySavedWordOnBoard = localStorage.getItem(AppConstant.SINGLE_PLAYER_LAST_WORD_STORE_KEY)
        if (locallySavedGameStatus && locallySavedGameStatus === SinglePlayerBoardPersistableStates.on && locallySavedWordOnBoard && locallySavedWordOnBoard !== '') {
            this.wordOnBoard = locallySavedWordOnBoard
            const locallyPersistedTimeRemaining = localStorage.getItem(AppConstant.SINGLE_PLAYER_REMAINING_DURATION_STORE_KEY)
            if (locallyPersistedTimeRemaining && locallyPersistedTimeRemaining !== '') {
                this.timeRemaining = +locallyPersistedTimeRemaining
            }
        }
        localStorage.setItem(AppConstant.SINGLE_PLAYER_GAME_STATE_STORE_KEY, SinglePlayerBoardPersistableStates.on)
        localStorage.setItem(AppConstant.SINGLE_PLAYER_LAST_WORD_STORE_KEY, this.wordOnBoard)
        this.setState({ gameState: 'activeboard' })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ gameState: SinglePlayerGameState }>, snapshot?: any): void {
        if (this.state.gameState === 'nextboard') {
            this.wordOnBoard = this.wordService.nextWord()
            this.setState({ gameState: 'activeboard' })
            localStorage.setItem(AppConstant.SINGLE_PLAYER_GAME_STATE_STORE_KEY, SinglePlayerBoardPersistableStates.on)
            localStorage.setItem(AppConstant.SINGLE_PLAYER_LAST_WORD_STORE_KEY, this.wordOnBoard)
            this.timeRemaining = 60
        }
    }

    timeOutHandler = () => {
        this.finishGameState = 'timeout'
        this.setState({ gameState: 'showAnswer' })
        localStorage.setItem(AppConstant.SINGLE_PLAYER_GAME_STATE_STORE_KEY, SinglePlayerBoardPersistableStates.over)
        localStorage.removeItem(AppConstant.SINGLE_PLAYER_REMAINING_DURATION_STORE_KEY)
    }

    successHandler = () => {
        this.finishGameState = 'success'
        this.setState({ gameState: 'showAnswer' })
        localStorage.setItem(AppConstant.SINGLE_PLAYER_GAME_STATE_STORE_KEY, SinglePlayerBoardPersistableStates.over)
        localStorage.removeItem(AppConstant.SINGLE_PLAYER_REMAINING_DURATION_STORE_KEY)
    }

    render(): React.ReactNode {

        let content = <div />

        if (this.state.gameState === 'activeboard') {
            content = <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <TimedSolutionPad saveTimerProgressConfiguration={{
                    saveTimer: true, saveKeyword: AppConstant.SINGLE_PLAYER_REMAINING_DURATION_STORE_KEY
                }} successHandler={this.successHandler} timeOutHandler={this.timeOutHandler} key={this.wordOnBoard} durationInSeconds={this.timeRemaining} targetWord={this.wordOnBoard} />
            </div>
        } else if (this.state.gameState === 'timeout') {
            content = <Result nextStepHandler={() => { this.setState({ gameState: 'nextboard' }) }} type="timeup" />
        } else if (this.state.gameState === 'success') {
            content = <Result nextStepHandler={() => { this.setState({ gameState: 'nextboard' }) }} type="success" />
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

