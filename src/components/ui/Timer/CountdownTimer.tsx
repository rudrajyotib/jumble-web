import React from "react";
import CountDownTimerProps from "./CountDownTimerProps";

class CountDownTimer extends React.Component<CountDownTimerProps, { timeUp: boolean }> {

    remainingDuration: number
    timeOut: NodeJS.Timeout
    saveTimer: boolean
    saveKeyword: string = 'default'

    constructor(props: CountDownTimerProps) {
        super(props)
        this.state = { timeUp: false }
        this.remainingDuration = props.duration
        this.timeOut = setTimeout(() => { }, 1000)
        this.saveTimer = props.saveTimerProgressConfiguration.saveTimer
        if (this.saveTimer) {
            this.saveKeyword = props.saveTimerProgressConfiguration.saveKeyword && props.saveTimerProgressConfiguration.saveKeyword !== ''
                ? props.saveTimerProgressConfiguration.saveKeyword : 'timeProgress'
        }
    }

    componentDidMount(): void {
        clearTimeout(this.timeOut)
        if (this.saveTimer) {
            localStorage.setItem(this.saveKeyword, '' + this.remainingDuration)
        }
        this.timeOut = setTimeout(() => {
            this.remainingDuration = this.remainingDuration - 1;
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
                    <span>You have {this.remainingDuration} seconds</span>
                    : <span>TIME IS UP !!!</span>
                }
            </div>

        )
    }


}

export default CountDownTimer