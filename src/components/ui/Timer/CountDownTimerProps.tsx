type CountDownTimerProps = {

    duration: number
    onTimeOut: () => void
    saveTimerProgressConfiguration: {
        saveTimer: boolean
        saveKeyword?: string
    }

}

export default CountDownTimerProps;