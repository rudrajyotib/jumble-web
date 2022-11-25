import React from "react";
import ClickableBadge from "../elements/views/ClickableBadge";
import CountDownTimerProps from "./CountDownTimerProps";

class CountDownTimer extends React.Component<CountDownTimerProps, { timeUp: boolean }> {

    remainingDuration: number
    timeOut: NodeJS.Timeout
    saveTimer: boolean
    saveKeyword: string = 'default'
    minutesRemaining: number
    secondsRemaining: number

    constructor(props: CountDownTimerProps) {
        super(props)
        this.state = { timeUp: false }
        this.remainingDuration = props.duration
        this.timeOut = setTimeout(() => { }, 1000)
        this.saveTimer = props.saveTimerProgressConfiguration.saveTimer
        this.minutesRemaining = Math.floor(this.remainingDuration / 60)
        this.secondsRemaining = this.remainingDuration % 60
        if (this.saveTimer) {
            this.saveKeyword = props.saveTimerProgressConfiguration.saveKeyword && props.saveTimerProgressConfiguration.saveKeyword !== ''
                ? props.saveTimerProgressConfiguration.saveKeyword : 'timeProgress'
        }
    }


    calculateMinuteSeconds(): void {
        this.minutesRemaining = Math.floor(this.remainingDuration / 60)
        this.secondsRemaining = this.remainingDuration % 60
    }

    componentDidMount(): void {
        clearTimeout(this.timeOut)
        if (this.saveTimer) {
            localStorage.setItem(this.saveKeyword, '' + this.remainingDuration)
        }
        this.timeOut = setTimeout(() => {
            this.remainingDuration = this.remainingDuration - 1;
            this.calculateMinuteSeconds()
            this.setState({
                timeUp: false
            })
        }, 1000)
    }

    componentWillUnmount(): void {
        if (this.state.timeUp === false) {
            clearTimeout(this.timeOut)
        }
    }

    componentDidUpdate(prevProps: Readonly<CountDownTimerProps>, prevState: Readonly<{ timeUp: boolean }>, snapshot?: any): void {
        clearTimeout(this.timeOut)
        if (this.saveTimer) {
            localStorage.setItem(this.saveKeyword, '' + this.remainingDuration)
        }
        if (this.remainingDuration <= 0) {
            if (this.state.timeUp === false) {
                this.setState({
                    timeUp: true
                })
            } else {
                this.props.onTimeOut()
            }
        } else {
            this.timeOut = setTimeout(() => {
                this.remainingDuration = this.remainingDuration - 1;
                this.calculateMinuteSeconds()
                this.setState({
                    timeUp: false
                })
            }, 1000)
        }
    }

    render(): React.ReactNode {



        return (

            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                {this.state.timeUp === false ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <ClickableBadge active={false} clickHandler={() => { }} position={this.remainingDuration > 10 ? 'timer' : 'dyingseconds'} text={(this.minutesRemaining < 10 ? '0' + this.minutesRemaining : '' + this.minutesRemaining)} />
                        <span>:</span>
                        <ClickableBadge active={false} clickHandler={() => { }} position={this.remainingDuration > 10 ? 'timer' : 'dyingseconds'} text={(this.secondsRemaining < 10 ? '0' + this.secondsRemaining : '' + this.secondsRemaining)} />

                    </div>
                    : <div><span>TIME IS UP !!!</span></div>
                }
            </div>

        )
    }


}

export default CountDownTimer