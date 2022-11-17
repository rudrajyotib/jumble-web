import React from "react";
import { JumbleBoard } from "../../../common/domain/JumbleBoard";
import SolutionPad from "../SolutionPad/SolutionPad";
import CountDownTimer from "../Timer/CountdownTimer";
import { TimedSolutionPadProps } from "./TimedSolutionPadProps";

class TimedSolutionPad extends React.Component<TimedSolutionPadProps, { boardState: 'on' | 'success' | 'fail' | 'over' }> {


    durationOfGame: number
    game: JumbleBoard

    timeOutHandler = () => {
        this.setState({ boardState: 'over' })
    }



    constructor(props: TimedSolutionPadProps) {
        super(props)
        this.durationOfGame = props.durationInSeconds
        this.game = new JumbleBoard(props.targetWord)
        this.state = { boardState: 'on' }
    }

    componentDidMount(): void {
        this.setState({ boardState: 'on' })
    }

    componentDidUpdate(prevProps: Readonly<TimedSolutionPadProps>, prevState: Readonly<{ boardState: 'on' | 'success' | 'fail' | 'over'; }>, snapshot?: any): void {

    }




    render(): React.ReactNode {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CountDownTimer duration={this.props.durationInSeconds} onTimeOut={() => { this.props.timeOutHandler() }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 8 }}>
                    <SolutionPad successHandler={this.props.successHandler} jumbleBoard={this.game} />
                </div>
            </div>
        )
    }
}

export default TimedSolutionPad