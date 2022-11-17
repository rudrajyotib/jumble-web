import { JumbleBoard } from "../../../common/domain/JumbleBoard"

export type TimedSolutionPadProps = {
    durationInSeconds: number
    targetWord: string
    timeOutHandler: () => void
    successHandler: () => void
}

